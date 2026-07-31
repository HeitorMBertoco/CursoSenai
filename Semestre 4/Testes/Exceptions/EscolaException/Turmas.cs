namespace Exceptions;

public class Turmas
{
    public Turmas(int quantidadeAlunos, string serie, DateOnly dataCriacao)
    {
        if (dataCriacao > DateOnly.FromDateTime(DateTime.Now))
        {
            throw new DataInvalidaException("Data de Criação não pode ser em um momento futuro."); 
        }
        if (quantidadeAlunos < 5)
        {
            throw new QuantidadeAlunosMinimaNaoAtingidaException("Quantidade não atingida");
        }
        else
        {
            QuantidadeAlunos = quantidadeAlunos;
        }
        Serie = serie;
    }
    public int QuantidadeAlunos { get; set; }
    public string Serie { get; set; }

    public DateOnly DataCricao {get; set;}

}