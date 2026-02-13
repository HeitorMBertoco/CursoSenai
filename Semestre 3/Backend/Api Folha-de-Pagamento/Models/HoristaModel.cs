

namespace Api_Folha_de_Pagamento.Models
{
    public class HoristaModel : FuncionarioModel
    {
        public double HorasTrabalhadas { get; set; }
        public double ValorHora { get; set; }

        public HoristaModel(string nome, string foto, double horasTrabalhadas, double valorHora) : base(nome, foto)
        {
            HorasTrabalhadas = horasTrabalhadas;
            ValorHora = valorHora;
        }
        override public double CalcularSalario()
        {
            return this.Pagamento = HorasTrabalhadas * ValorHora;
        }
    }
}