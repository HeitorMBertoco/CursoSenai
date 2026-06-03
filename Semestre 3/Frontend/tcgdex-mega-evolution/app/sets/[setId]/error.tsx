"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function SetError({ error, reset }: Props) {
  return (
    <main className="page">
      <h1>Erro ao carregar expansão</h1>
      <p style={{ color: "var(--muted)" }}>
        {error.message.includes("TCGdex") || error.message.includes("conectar")
          ? error.message
          : `${error.message} — a API pode estar lenta ou bloqueada na sua rede.`}
      </p>
      <button
        type="button"
        onClick={reset}
        className="pagination__btn"
        style={{ marginTop: "1rem", cursor: "pointer" }}
      >
        Tentar novamente
      </button>
    </main>
  );
}
