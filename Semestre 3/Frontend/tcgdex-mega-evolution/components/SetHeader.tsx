import TcgdexImage from "@/components/TcgdexImage";
import { setLogoUrl } from "@/lib/tcgdex";
import type { SetDetail } from "@/lib/types";

type Props = {
  set: SetDetail;
};

export default function SetHeader({ set }: Props) {
  const logoSrc = setLogoUrl(set.logo);

  return (
    <header className="set-header">
      {logoSrc && (
        <TcgdexImage
          src={logoSrc}
          alt={`Logo ${set.name}`}
          width={200}
          height={80}
          className="set-header__logo"
        />
      )}
      <div>
        <h1 className="set-header__title">{set.name}</h1>
        <p className="set-header__meta">
          {set.cardCount.official} oficiais · {set.cardCount.total} no total
        </p>
      </div>
    </header>
  );
}
