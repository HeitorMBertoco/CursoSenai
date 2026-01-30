
namespace Api_2.Models
{
    public class Multiplicacao
    {
        public int Fator1 { get; set; }
        public int Fator2 { get; set; }
        public int Produto { get; set; }
    

        public Multiplicacao(int fator1, int fator2)
        {
            Fator1 = fator1;
            Fator2 = fator2;
            Produto = fator1 * fator2;
        }
    }
}