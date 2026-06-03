import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <h1>Página não encontrada</h1>
      <p style={{ color: "var(--muted)" }}>
        A expansão ou carta solicitada não existe.
      </p>
      <Link href="/" className="back-link">
        ← Voltar para Mega Evolution
      </Link>
    </main>
  );
}
