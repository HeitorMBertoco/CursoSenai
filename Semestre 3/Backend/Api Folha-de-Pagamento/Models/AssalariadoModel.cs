

using System.ComponentModel.Design.Serialization;
using Microsoft.AspNetCore.Mvc;

namespace Api_Folha_de_Pagamento.Models
{
    public class AssalariadoModel : FuncionarioModel
    {
        private double Salario { get; set; }

        private double Desconto { get; set; }

        public AssalariadoModel(string nome, string foto, double salario, double desconto) : base(nome, foto)
        {
            Salario = salario;
            Desconto = desconto;
            Pagamento = CalcularSalario();
            
        }
        override public double CalcularSalario()
        {
           return Salario - Desconto;
        }
    }
}