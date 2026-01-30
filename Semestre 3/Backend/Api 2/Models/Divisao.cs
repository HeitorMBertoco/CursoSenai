namespace Api_2.Models
{
    public class Divisao
    {
        public int Dividendo { get; set; }
        public int Divisor { get; set; }
        public double Resultado { get; set; }

        public Dividir(int dividendo, int divisor)
        {
            Dividendo = dividendo;
            Divisor = divisor;
            Resultado = (double)dividendo / divisor;
        }
    }


}