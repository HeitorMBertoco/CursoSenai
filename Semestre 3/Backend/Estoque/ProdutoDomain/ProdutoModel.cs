using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProdutoDomain
{ 
    public class ProdutoModel
    {   
        public ProdutoModel() { }

     

        public ProdutoModel(bool habilitado, CategoriaProduto categoria, string nome, string nomeArquivoFoto, string descricao, Decimal quantidadeAtual, UnidadeMedida unidadeMedida)
        {
            
            Habilitado = habilitado;
            this.unidadeMedida = unidadeMedida;
            Categoria = categoria;
            Nome = nome;
            NomeArquivoFoto = nomeArquivoFoto;
            Descricao = descricao;
            if (quantidadeAtual >= 0)
            {
                QuantidadeAtual = quantidadeAtual;
            }

        }
        [Key]
        public Guid id { get; set; }

        public Guid CategoriaId { get; set; }


        public Guid UnidadeId { get; set; }

        public Boolean Habilitado { get; set; } = false;

        public UnidadeMedida unidadeMedida { get; set; }
        public CategoriaProduto? Categoria { get; set; }
        [StringLength(20)]
        public String Nome { get; set; }
        [StringLength(12)]
        public String NomeArquivoFoto { get; set; }
        [StringLength(50)]
        public String Descricao { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public Decimal QuantidadeAtual { get; set; } 


    }
}
