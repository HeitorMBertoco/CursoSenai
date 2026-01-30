namespace Api_2.Models
{
    public class Soma
    {
        public int Fator1 { get; set; }
        public int Fator2 { get; set; }
        public int Resultado { get; set; }


        public Soma(int fator1, int fator2)
        {
            Fator1 = fator1;
            Fator2 = fator2;
            Resultado = fator1 + fator2;
        }
    }

}