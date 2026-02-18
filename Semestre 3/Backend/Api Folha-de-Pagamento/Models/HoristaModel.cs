

namespace Api_Folha_de_Pagamento.Models
{
    public class HoristaModel : FuncionarioModel
    {
        private double HorasTrabalhadas { get; set; }
        private double ValorHora { get; set; }

            public override string Tipo => "Horista";
        public HoristaModel(string nome, string foto, double horasTrabalhadas, double valorHora) : base(nome, foto)
        {
            HorasTrabalhadas = horasTrabalhadas;
            ValorHora = valorHora;
            Pagamento = CalcularSalario();
        }
        override public double CalcularSalario()
        {
            return HorasTrabalhadas * ValorHora;
        }
    }
}