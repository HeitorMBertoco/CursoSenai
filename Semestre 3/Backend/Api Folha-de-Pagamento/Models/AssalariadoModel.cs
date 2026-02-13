using System.Runtime.CompilerServices;

Microsoft.AspNetCore.Mvc;

namespace Api_Folha_de_Pagamento.Models
{
    public class AssalariadoModel : FuncionarioModel
    {
        public double Salario { get; set; }
        public double Desconto { get; set; }

        public AssalariadoModel(string nome, string foto, double desconto) : base(nome, foto)
        {
            Desconto = desconto;
        }
        override public double CalcularSalario()
        {
           return this.Pagamento = Salario - Desconto;
        }
    }
}