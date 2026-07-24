using System.Collections;

namespace ClasseTestar;

public class Zoologico
{
    
   
   
    
    public String Nome { get; set;}
    
    public String Especie { get; set;}
    
    public String Sexo { get; set;}

    public int Idade {get; set;}

    public DateOnly DataEntrada {get; set;}
    
     public Zoologico(string nome, string especie, string sexo, int idade, DateOnly dataentrada){
        if (String.IsNullOrWhiteSpace(Nome))
        {
        throw new ArgumentNullException("nome não pode ser nulo");
        }
        if (String.IsNullOrWhiteSpace(Especie))
        {
        throw new ArgumentNullException("Especie não pode ser nulo");
        }
        if (String.IsNullOrWhiteSpace(Sexo))
        {
        throw new ArgumentNullException("Sexo não pode ser nulo");
        }
        if (sexo.ToUpper() != "M" && sexo.ToUpper() != "F")
        {
        throw new ArgumentException("Não da para ser diferente de M ou F");
        }
        if (idade < 0)
        {
            throw new ArgumentException("idade nao pode ser menor que zero");
        }
        if (dataentrada > (DateOnly.FromDateTime(DateTime.Today)))
        {
            throw new ArgumentException("Data está no passado");
        }
        
        Nome = nome;
        Especie = especie;
        Sexo = sexo;
        Idade = idade;
        DataEntrada = dataentrada;

        
    }

    
}
