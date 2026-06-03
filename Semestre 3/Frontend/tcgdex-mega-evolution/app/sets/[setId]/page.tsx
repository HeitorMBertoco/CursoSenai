import { notFound, redirect } from "next/navigation";
import ApiBanner from "@/components/ApiBanner";
import CardThumbnail from "@/components/CardThumbnail";
import Pagination from "@/components/Pagination";
import SetHeader from "@/components/SetHeader";
import { getSetBrief } from "@/lib/constants";
import {
  clampPage,
  getSetWithCardsPage,
  getTotalPages,
  isKnownSetId,
  ITEMS_PER_PAGE,
} from "@/lib/tcgdex";

type Props = {
  params: Promise<{ setId: string }>;
  searchParams: Promise<{ page?: string }>;
};

export const dynamic = "force-dynamic";

export default async function SetPage({ params, searchParams }: Props) {
  const { setId } = await params;
  const { page: pageParam } = await searchParams;

  if (!isKnownSetId(setId)) {
    notFound();
  }

  const brief = getSetBrief(setId)!;
  const totalPages = getTotalPages(brief.cardCount.total);
  const requestedPage = Number.parseInt(pageParam ?? "1", 10);
  const rawPage = Number.isNaN(requestedPage) ? 1 : requestedPage;
  const currentPage = clampPage(rawPage, totalPages);

  if (rawPage !== currentPage) {
    redirect(`/sets/${encodeURIComponent(setId)}?page=${currentPage}`);
  }

  const { set, cards, apiDegraded } = await getSetWithCardsPage(
    setId,
    currentPage
  );

  const rangeStart = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const rangeEnd = Math.min(currentPage * ITEMS_PER_PAGE, set.cardCount.total);

  return (
    <main className="page">
      {apiDegraded && (
        <ApiBanner message="A API TCGdex não respondeu. Verifique sua conexão e recarregue a página." />
      )}

      <SetHeader set={set} />
      <p className="page-info">
        Mostrando {rangeStart}–{rangeEnd} de {set.cardCount.total} cartas ·
        Página {currentPage} de {totalPages}
      </p>

      <div className="card-grid">
        {cards.map((card) => (
          <CardThumbnail key={card.id} card={card} />
        ))}
      </div>

      {cards.length === 0 && (
        <p className="empty-message">
          Nenhuma carta carregada. A API pode estar fora do ar — tente
          recarregar em alguns segundos.
        </p>
      )}

      <Pagination
        setId={setId}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
}
