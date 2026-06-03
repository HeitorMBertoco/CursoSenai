import {
  MEGA_EVOLUTION_SERIES,
  MEGA_EVOLUTION_SETS,
  getSetBrief,
} from "./constants";
import type { Card, CardBrief, Serie, SetDetail } from "./types";

const BASE = "https://api.tcgdex.net/v2/en";
export const ITEMS_PER_PAGE = 24;

const FETCH_TIMEOUT_MS = 60_000;
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1_500;

export class TcgdexFetchError extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown
  ) {
    super(message);
    this.name = "TcgdexFetchError";
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchJson<T>(url: string): Promise<T> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(url, {
        cache: "no-store",
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        throw new TcgdexFetchError(
          `TCGdex API error: ${res.status} ${url}`
        );
      }

      return (await res.json()) as T;
    } catch (error) {
      lastError = error;
      if (attempt < MAX_RETRIES) {
        await sleep(RETRY_DELAY_MS * attempt);
      }
    }
  }

  throw new TcgdexFetchError(
    `Não foi possível conectar à TCGdex após ${MAX_RETRIES} tentativas. Verifique sua internet ou tente novamente.`,
    lastError
  );
}

/** Cartas: base da API + /{quality}.webp — ver https://tcgdex.dev/assets */
export function cardImageUrl(
  image?: string,
  quality: "low" | "high" = "low"
): string {
  if (!image) return "";
  if (/\.(webp|png|jpg|jpeg)$/i.test(image)) return image;
  if (image.includes(`/${quality}.`)) return image;
  return `${image}/${quality}.webp`;
}

/** Logos/símbolos: base da API + .webp */
export function setLogoUrl(logo?: string): string {
  if (!logo) return "";
  if (/\.(webp|png|jpg|jpeg)$/i.test(logo)) return logo;
  return `${logo}.webp`;
}

export function getMegaEvolutionSeriesLocal(): Serie {
  return MEGA_EVOLUTION_SERIES;
}

/** Tenta a API; em falha usa dados locais (home sempre funciona). */
export async function getMegaEvolutionSeries(): Promise<{
  series: Serie;
  fromApi: boolean;
}> {
  try {
    const series = await fetchJson<Serie>(`${BASE}/series/me`);
    return { series, fromApi: true };
  } catch {
    return { series: MEGA_EVOLUTION_SERIES, fromApi: false };
  }
}

function fallbackSetDetail(setId: string): SetDetail | null {
  const brief = getSetBrief(setId);
  if (!brief) return null;
  return {
    id: brief.id,
    name: brief.name,
    logo: brief.logo,
    cardCount: brief.cardCount,
    cards: [],
    serie: { id: "me", name: "Mega Evolution" },
  };
}

export async function getSet(setId: string): Promise<SetDetail> {
  try {
    return await fetchJson<SetDetail>(
      `${BASE}/sets/${encodeURIComponent(setId)}`
    );
  } catch (error) {
    const fallback = fallbackSetDetail(setId);
    if (fallback) return fallback;
    throw error;
  }
}

export async function getSetCardsPage(
  setId: string,
  page: number
): Promise<CardBrief[]> {
  const params = new URLSearchParams({
    "set.id": `eq:${setId}`,
    "pagination:page": String(page),
    "pagination:itemsPerPage": String(ITEMS_PER_PAGE),
    "sort:field": "localId",
    "sort:order": "ASC",
  });
  return fetchJson<CardBrief[]>(`${BASE}/cards?${params}`);
}

function paginateCards(cards: CardBrief[], page: number): CardBrief[] {
  const start = (page - 1) * ITEMS_PER_PAGE;
  return cards.slice(start, start + ITEMS_PER_PAGE);
}

/** Uma chamada ao set (lista completa) ou fallback na API paginada. */
export async function getSetWithCardsPage(
  setId: string,
  page: number
): Promise<{ set: SetDetail; cards: CardBrief[]; apiDegraded: boolean }> {
  try {
    const set = await fetchJson<SetDetail>(
      `${BASE}/sets/${encodeURIComponent(setId)}`
    );
    if (set.cards && set.cards.length > 0) {
      return {
        set,
        cards: paginateCards(set.cards, page),
        apiDegraded: false,
      };
    }
    const cards = await getSetCardsPage(setId, page);
    return { set, cards, apiDegraded: false };
  } catch {
    try {
      const set = fallbackSetDetail(setId);
      if (!set) throw new Error("Set desconhecido");
      const cards = await getSetCardsPage(setId, page);
      return { set, cards, apiDegraded: true };
    } catch {
      const set = fallbackSetDetail(setId);
      if (!set) throw new TcgdexFetchError("Expansão não encontrada.");
      return { set, cards: [], apiDegraded: true };
    }
  }
}

export async function getCard(cardId: string): Promise<Card> {
  return fetchJson<Card>(`${BASE}/cards/${encodeURIComponent(cardId)}`);
}

export function getTotalPages(totalCards: number): number {
  return Math.max(1, Math.ceil(totalCards / ITEMS_PER_PAGE));
}

export function isKnownSetId(setId: string): boolean {
  return MEGA_EVOLUTION_SETS.some((s) => s.id === setId);
}

export function clampPage(page: number, totalPages: number): number {
  if (page < 1) return 1;
  if (page > totalPages) return totalPages;
  return page;
}
