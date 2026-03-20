using ProdutoDomain;
using System.ComponentModel.DataAnnotations;

namespace OperacionalDomain
{
    public class OperacaoEstoque
    {  
        public OperacaoEstoque() { }
        public OperacaoEstoque( DateTime hora, string motivo, string entrada_Saida, List<OperacaoEstoqueDetalhe> detalhes)
        {
            
            Hora = hora;
            Motivo = motivo;
            Entrada_Saida = entrada_Saida;
            Detalhes = detalhes;
        }
        [Key]
        public Guid id { get; set; }

        public DateTime Hora { get; set; }
        [StringLength(12)]
        public String Motivo { get; set; }
        [StringLength(20)]
        public String Entrada_Saida { get; set; }

        public List<OperacaoEstoqueDetalhe> Detalhes { get; set; }

        public OperacaoEstoqueDetalhe CriarDetalhe(ProdutoModel produto, double quantidade)
        {
            OperacaoEstoqueDetalhe operacaoEstoqueDetalhe = new OperacaoEstoqueDetalhe(produto, quantidade);
            return operacaoEstoqueDetalhe;



        }






    }

   
}
