
namespace api_2.Models
{
    public class Multipliçao
    {
        public int Fator1 { get; set; }
        public int Fator2 { get; set; }
        public int Produto { get; set; }
    

        public Multiplicar(int fator1, int fator2)
        {
            Fator1 = fator1;
            Fator2 = fator2;
            Produto = fator1 * fator2;
        }
    }
}