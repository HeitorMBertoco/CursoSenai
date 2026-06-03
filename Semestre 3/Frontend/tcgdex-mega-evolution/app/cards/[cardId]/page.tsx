import Link from "next/link";
import { notFound } from "next/navigation";
import TcgdexImage from "@/components/TcgdexImage";
import { cardImageUrl, getCard } from "@/lib/tcgdex";

type Props = {
  params: Promise<{ cardId: string }>;
};

export const dynamic = "force-dynamic";

export default async function CardDetailPage({ params }: Props) {
  const { cardId } = await params;

  let card;
  try {
    card = await getCard(cardId);
  } catch {
    notFound();
  }

  const src = cardImageUrl(card.image, "high");
  const setId = card.set?.id;

  return (
    <main className="page card-detail">
      <nav className="breadcrumb">
        <Link href="/">Mega Evolution</Link>
        {setId && card.set?.name && (
          <>
            <span aria-hidden="true"> / </span>
            <Link href={`/sets/${encodeURIComponent(setId)}`}>
              {card.set.name}
            </Link>
          </>
        )}
        <span aria-hidden="true"> / </span>
        <span>{card.name}</span>
      </nav>

      <div className="card-detail__layout">
        <div className="card-detail__image-wrap">
          {src ? (
            <TcgdexImage
              src={src}
              alt={card.name}
              width={600}
              height={825}
              className="card-detail__image"
              priority
            />
          ) : (
            <div className="card-thumb__placeholder card-detail__placeholder">
              Sem imagem
            </div>
          )}
        </div>

        <div className="card-detail__info">
          <h1>{card.name}</h1>
          <p className="card-detail__id">#{card.localId}</p>

          <dl className="card-detail__meta">
            {card.category && (
              <>
                <dt>Categoria</dt>
                <dd>{card.category}</dd>
              </>
            )}
            {card.rarity && (
              <>
                <dt>Raridade</dt>
                <dd>{card.rarity}</dd>
              </>
            )}
            {card.hp != null && (
              <>
                <dt>HP</dt>
                <dd>{card.hp}</dd>
              </>
            )}
            {card.types && card.types.length > 0 && (
              <>
                <dt>Tipos</dt>
                <dd>{card.types.join(", ")}</dd>
              </>
            )}
            {card.stage && (
              <>
                <dt>Estágio</dt>
                <dd>{card.stage}</dd>
              </>
            )}
            {card.evolveFrom && (
              <>
                <dt>Evolui de</dt>
                <dd>{card.evolveFrom}</dd>
              </>
            )}
            {card.retreat != null && (
              <>
                <dt>Recuo</dt>
                <dd>{card.retreat}</dd>
              </>
            )}
          </dl>

          {card.description && (
            <p className="card-detail__description">{card.description}</p>
          )}

          {card.attacks && card.attacks.length > 0 && (
            <section>
              <h2>Ataques</h2>
              <ul className="attack-list">
                {card.attacks.map((attack) => (
                  <li key={attack.name}>
                    <strong>{attack.name}</strong>
                    {attack.cost && attack.cost.length > 0 && (
                      <span className="attack-cost">
                        {" "}
                        [{attack.cost.join(", ")}]
                      </span>
                    )}
                    {attack.damage != null && (
                      <span> — {attack.damage} dano</span>
                    )}
                    {attack.effect && (
                      <p className="attack-effect">{attack.effect}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {card.weaknesses && card.weaknesses.length > 0 && (
            <section>
              <h2>Fraquezas</h2>
              <ul>
                {card.weaknesses.map((w) => (
                  <li key={w.type}>
                    {w.type} {w.value}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {card.pricing?.cardmarket && (
            <section>
              <h2>Preços (Cardmarket)</h2>
              <dl className="card-detail__meta">
                {card.pricing.cardmarket.trend != null && (
                  <>
                    <dt>Trend</dt>
                    <dd>
                      {String(card.pricing.cardmarket.trend)}{" "}
                      {card.pricing.cardmarket.unit ?? "EUR"}
                    </dd>
                  </>
                )}
                {card.pricing.cardmarket.low != null && (
                  <>
                    <dt>Menor</dt>
                    <dd>{String(card.pricing.cardmarket.low)}</dd>
                  </>
                )}
              </dl>
            </section>
          )}

          {setId && (
            <Link
              href={`/sets/${encodeURIComponent(setId)}`}
              className="back-link"
            >
              ← Voltar para {card.set?.name ?? "expansão"}
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
