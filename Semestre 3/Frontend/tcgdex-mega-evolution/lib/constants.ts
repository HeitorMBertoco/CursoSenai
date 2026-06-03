import type { Serie, SetBrief } from "./types";

const asset = (setId: string, path: string) =>
  `https://assets.tcgdex.net/en/me/${setId}/${path}`;

/** Expansões da série Mega Evolution (sincronizado com GET /series/me) */
export const MEGA_EVOLUTION_SETS: SetBrief[] = [
  {
    id: "mee",
    name: "Mega Evolution Energy",
    cardCount: { official: 8, total: 8 },
  },
  {
    id: "me01",
    name: "Mega Evolution",
    logo: asset("me01", "logo.webp"),
    cardCount: { official: 132, total: 188 },
  },
  {
    id: "mep",
    name: "MEP Black Star Promos",
    cardCount: { official: 0, total: 52 },
  },
  {
    id: "me02",
    name: "Phantasmal Flames",
    logo: asset("me02", "logo.webp"),
    cardCount: { official: 94, total: 130 },
  },
  {
    id: "me02.5",
    name: "Ascended Heroes",
    logo: asset("me02.5", "logo.webp"),
    cardCount: { official: 217, total: 295 },
  },
  {
    id: "me03",
    name: "Perfect Order",
    logo: asset("me03", "logo.webp"),
    cardCount: { official: 88, total: 124 },
  },
  {
    id: "me04",
    name: "Chaos Rising",
    logo: asset("me04", "logo.webp"),
    cardCount: { official: 86, total: 122 },
  },
];

export const MEGA_EVOLUTION_SERIES: Serie = {
  id: "me",
  name: "Mega Evolution",
  logo: asset("me01", "logo.webp"),
  sets: MEGA_EVOLUTION_SETS,
};

export function getSetBrief(setId: string): SetBrief | undefined {
  return MEGA_EVOLUTION_SETS.find((s) => s.id === setId);
}
