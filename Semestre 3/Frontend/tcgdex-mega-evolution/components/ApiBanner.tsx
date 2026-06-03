type Props = {
  message?: string;
};

export default function ApiBanner({ message }: Props) {
  return (
    <div className="api-banner" role="status">
      {message ??
        "Conexão lenta ou indisponível com a TCGdex. Exibindo dados locais; cartas podem não carregar até a API responder."}
    </div>
  );
}
