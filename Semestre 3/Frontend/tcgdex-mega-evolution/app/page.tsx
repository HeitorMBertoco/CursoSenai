import Link from "next/link";
import ApiBanner from "@/components/ApiBanner";
import TcgdexImage from "@/components/TcgdexImage";
import { getMegaEvolutionSeries, setLogoUrl } from "@/lib/tcgdex";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { series, fromApi } = await getMegaEvolutionSeries();
  const seriesLogo = setLogoUrl(series.logo);

  return (
    <main className="page">
      {!fromApi && (
        <ApiBanner message="Não foi possível atualizar pela API agora. Lista de expansões carregada localmente — as páginas de cartas tentarão a API ao abrir." />
      )}

      <header className="hero">
        {seriesLogo && (
          <TcgdexImage
            src={seriesLogo}
            alt={series.name}
            width={280}
            height={100}
            className="hero__logo"
            priority
          />
        )}
        <h1 className="hero__title">{series.name}</h1>
        <p className="hero__subtitle">
          Expansões da série Mega Evolution — dados via{" "}
          <a
            href="https://tcgdex.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            TCGdex API
          </a>
        </p>
      </header>

      <ul className="set-list">
        {series.sets.map((set) => {
          const logoSrc = setLogoUrl(set.logo);
          return (
            <li key={set.id}>
              <Link
                href={`/sets/${encodeURIComponent(set.id)}`}
                className="set-card"
              >
                {logoSrc ? (
                  <TcgdexImage
                    src={logoSrc}
                    alt=""
                    width={120}
                    height={48}
                    className="set-card__logo"
                  />
                ) : (
                  <div className="set-card__logo-placeholder" />
                )}
                <div className="set-card__body">
                  <h2 className="set-card__name">{set.name}</h2>
                  <p className="set-card__count">
                    {set.cardCount.total} cartas
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
