namespace api2.Models
{
    public class Subtraçao
    {
        public int Minuendo { get; set; }
        public int Subtraendo { get; set; }
        public int Resultado { get; set; }

        public Subtrair(int minuendo, int subtraendo)
        {
            Minuendo = minuendo;
            Subtraendo = subtraendo;
            Resultado = minuendo - subtraendo;
        }
    }
}