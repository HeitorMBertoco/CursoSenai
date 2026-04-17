using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProdutoDomain
{ 
    public class ProdutoModel
    {   
        public ProdutoModel() { }

     

        public ProdutoModel(bool habilitado, Guid CategoriaId,Guid UnidadeMedidaId, string nome, string descricao, Decimal quantidadeAtual)
        {
            
            Habilitado = habilitado;
            this.UnidadeMedidaId = UnidadeMedidaId;
            this.CategoriaId = CategoriaId;
            
            Nome = nome;
            
            Descricao = descricao;
            if (quantidadeAtual >= 0)
            {
                QuantidadeAtual = quantidadeAtual;
            }

        }
        [Key]
        public Guid id { get; set; }

        public Guid CategoriaId { get; set; }

        public string? NomeArquivoFoto {  get; set; } = null;


        public Guid UnidadeMedidaId { get; set; }

        public Boolean Habilitado { get; set; } = false;

        public UnidadeMedida UnidadeMedida { get; set; }
        public CategoriaProduto? Categoria { get; set; }
        [StringLength(20)]
        public String Nome { get; set; }
        
        [StringLength(50)]
        public String Descricao { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public Decimal QuantidadeAtual { get; set; } 


    }
}



























































