namespace Testes;

public class Equipe


{

    

    public Guid id  {get; set;}
    public string nome {get; set;}
    public DateOnly dataFundacao {get; set;}
    public double valoremCaixa {get; set;}

    public Equipe(
        Guid Id,
        string Nome,
        DateOnly DataFundacao,
        double ValoremCaixa

    ){
        if (String.IsNullOrWhiteSpace(nome)){
            throw new ArgumentNullException("Sem Nome nulo Porfavor");
        }
        if(ValoremCaixa < 0)
        {
            throw new ArgumentException("Não da pra ter valor negativo");
        }
        if (Nome.Length < 3)
        {
            throw new ArgumentException("Nome pequeno");

        }
        id = Id;
        nome = Nome;
        dataFundacao = DataFundacao;
        valoremCaixa = ValoremCaixa;

    }
}
