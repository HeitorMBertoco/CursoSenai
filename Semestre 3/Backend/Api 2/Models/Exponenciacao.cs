namespace Api_2.Models
{
    public class Exponenciacao
    {
        public int Base { get; set; }
        public int Expoente { get; set; }
        public int Produto { get; set; }
        
        public Exponenciacao(int baseNum, int expoente)
        {
            Base = baseNum;
            Expoente = expoente;
            Produto = (int)Math.Pow(baseNum, expoente);
        }
    }
}