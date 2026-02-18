

namespace Api_Folha_de_Pagamento.Models
{
    public class ComissionadoModel : FuncionarioModel
    {
        private double TotalVendas { get; set; }
        private double TaxaComissao { get; set; }

        public override string Tipo => "Comissionado";
        public ComissionadoModel(string nome, string foto,  double totalVendas, double taxaComissao) : base(nome, foto)
        {
            TotalVendas = totalVendas;
            TaxaComissao = taxaComissao;
            Pagamento = CalcularSalario();
        }
        override public double CalcularSalario()
        {
            return TotalVendas * (TaxaComissao / 100);
        }
    }
}