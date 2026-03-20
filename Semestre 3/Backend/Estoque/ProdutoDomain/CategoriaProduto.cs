

using System.ComponentModel.DataAnnotations;

namespace ProdutoDomain
{
    public class CategoriaProduto
    {
        public CategoriaProduto( string nome, string descricao)
        {
            
            Nome = nome;
            Descricao = descricao;
        }
        [Key]
        public Guid id { get; set; }
        [StringLength(12)]
        public String Nome { get; set; }
        [StringLength(50)]
        public String Descricao { get; set; }
    }
}
