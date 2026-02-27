namespace Biblioteca
{
    public class ClassePublica1
    {
        public string? texto = "Esta é uma classe publica";

     public void SetDataNascimento(DateOnly data)
        {
            DateOnly hoje = DateOnly.FromDateTime(DateTime.Now) ;

            if  (data > hoje)
            {
                throw new ArgumentException("a data não pode ser maior q a de hoje");
            }

            }
                
                
        
        
        private DateOnly _dataNascimento;
    }
}

public class ClasseIntermediaria
{


}
