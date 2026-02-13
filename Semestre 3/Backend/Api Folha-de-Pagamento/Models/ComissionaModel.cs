

using System.Reflection.Metadata.Ecma335;

namespace Api_Folha_de_Pagamento.Models
{
    public class ComissionaModel : FuncionarioModel
    {
        public double TotalVendas { get; set; }
        public double TaxaComissao { get; set; }
        public ComissionaModel(string nome, string foto,  double totalVendas, double taxaComissao) : base(nome, foto)
        {
            TotalVendas = totalVendas;
            TaxaComissao = taxaComissao;
        }
        override public double CalcularSalario()
        {
            return this.Pagamento = TotalVendas * TaxaComissao;
        }
    }
}