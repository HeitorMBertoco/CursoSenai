namespace ControleEstoque.Contracts
{
    public class PostProdutoModelRequest
    {
        public Guid UnidadeMedidaId { get; set; }

        public Guid CategoriaId { get; set; }

        public string? Nome { get; set; }

        public string? Descricao { get; set; }

        public Decimal? QuantidadeAtual { get; set; }



    }
}
