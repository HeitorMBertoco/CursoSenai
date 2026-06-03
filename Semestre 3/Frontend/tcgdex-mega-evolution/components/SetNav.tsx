import Link from "next/link";
import type { SetBrief } from "@/lib/types";

type Props = {
  sets: SetBrief[];
};

export default function SetNav({ sets }: Props) {
  return (
    <nav className="set-nav" aria-label="Expansões Mega Evolution">
      <Link href="/" className="set-nav__home">
        Home
      </Link>
      {sets.map((set) => (
        <Link
          key={set.id}
          href={`/sets/${encodeURIComponent(set.id)}`}
          className="set-nav__link"
        >
          {set.name}
        </Link>
      ))}
    </nav>
  );
}
