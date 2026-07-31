namespace Exceptions;
using Exceptions;

public class Escola
{
    public Escola(List<Turmas> turmas, int idadeMinima, string nome) {
        Nome = nome;
        if (idadeMinima <= 6)
        {
            throw new IdadeMinimaNaoAtingidaException("Idade Minima Não Atingida");
        }
        else
        {
            IdadeMinima = idadeMinima;
        }
        
        Turmas = turmas;

    }
    public List<Turmas> Turmas {get; set;}
    public int IdadeMinima {get; set;}
    public string Nome { get; set;}

}
