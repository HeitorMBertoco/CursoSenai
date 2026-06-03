import Link from "next/link";
import TcgdexImage from "@/components/TcgdexImage";
import { cardImageUrl } from "@/lib/tcgdex";
import type { CardBrief } from "@/lib/types";

type Props = {
  card: CardBrief;
};

export default function CardThumbnail({ card }: Props) {
  const src = cardImageUrl(card.image);

  return (
    <Link href={`/cards/${encodeURIComponent(card.id)}`} className="card-thumb">
      {src ? (
        <TcgdexImage
          src={src}
          alt={card.name}
          width={245}
          height={337}
          className="card-thumb__image"
        />
      ) : (
        <div className="card-thumb__placeholder">Sem imagem</div>
      )}
      <p className="card-thumb__id">#{card.localId}</p>
      <p className="card-thumb__name">{card.name}</p>
    </Link>
  );
}
