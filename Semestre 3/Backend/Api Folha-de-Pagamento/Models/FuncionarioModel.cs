
using Microsoft.AspNetCore.Mvc;
namespace Api_Folha_de_Pagamento.Models
{
    public abstract class FuncionarioModel
    {
        public string Nome { get; set; }
        public string foto { get; set; }
        public double Pagamento { get; set; }

        public FuncionarioModel(string nome, string foto)
        {
            Nome = nome;
            foto = foto;
        
        }

        abstract public double CalcularSalario();
    }
}