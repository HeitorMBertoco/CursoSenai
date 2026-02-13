namespace Api_Folha_de_Pagamento.Models
{
    public abstract class FuncionarioModel
    {
        public string Nome { get; set; }
        public string Foto { get; set; } = string.Empty;  // Inicializa como vazio → resolve CS8618
        public double Pagamento { get; set; }

        public FuncionarioModel(string nome, string foto)
        {
            Nome = nome;
            Foto = foto;  // Agora atribui o parâmetro corretamente (resolve CS1717)
        }

        abstract public double CalcularSalario();
    }
}