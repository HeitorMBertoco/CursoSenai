namespace Api_2.Models
{
    public class Subtracao
    {
        public int Minuendo { get; set; }
        public int Subtraendo { get; set; }
        public int Resultado { get; set; }

        public Subtracao(int minuendo, int subtraendo)
        {
            Minuendo = minuendo;
            Subtraendo = subtraendo;
            Resultado = minuendo - subtraendo;
        }
    }
}