using ProdutoDomain;
using System.ComponentModel.DataAnnotations;
namespace OperacionalDomain
{
    public class OperacaoEstoqueDetalhe
    {
        internal OperacaoEstoqueDetalhe() { }
        internal OperacaoEstoqueDetalhe( ProdutoModel produto, double quantidade)
        {
            if (produto.Habilitado)
            {
                
      
                    Produto = produto;

                    Quantidade = quantidade;
                
                
            }
            else
            {
                throw new ArgumentException("Produto não está habilitado.", nameof(produto));
            }
            
            
        }
        [Key]
        public Guid Id { get; set; }

        public ProdutoModel Produto { get; set; }

        public double Quantidade { get; set; }

    }
}
