import Link from "next/link";

type Props = {
  setId: string;
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ setId, currentPage, totalPages }: Props) {
  if (totalPages <= 1) return null;

  const encodedSetId = encodeURIComponent(setId);
  const pages = buildPageNumbers(currentPage, totalPages);

  return (
    <nav className="pagination" aria-label="Paginação de cartas">
      {currentPage > 1 ? (
        <Link
          href={`/sets/${encodedSetId}?page=${currentPage - 1}`}
          className="pagination__btn"
        >
          Anterior
        </Link>
      ) : (
        <span className="pagination__btn pagination__btn--disabled">Anterior</span>
      )}

      <div className="pagination__numbers">
        {pages.map((page, i) =>
          page === "..." ? (
            <span key={`ellipsis-${i}`} className="pagination__ellipsis">
              …
            </span>
          ) : (
            <Link
              key={page}
              href={`/sets/${encodedSetId}?page=${page}`}
              className={`pagination__num${
                page === currentPage ? " pagination__num--active" : ""
              }`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </Link>
          )
        )}
      </div>

      {currentPage < totalPages ? (
        <Link
          href={`/sets/${encodedSetId}?page=${currentPage + 1}`}
          className="pagination__btn"
        >
          Próxima
        </Link>
      ) : (
        <span className="pagination__btn pagination__btn--disabled">Próxima</span>
      )}
    </nav>
  );
}

function buildPageNumbers(
  current: number,
  total: number
): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "...")[] = [1];
  if (current > 3) pages.push("...");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let p = start; p <= end; p++) pages.push(p);

  if (current < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}
