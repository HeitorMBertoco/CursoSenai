
namespace AtividadesApi.Geometria.Retangulo
{
    public class RetanguloModel
    {
        public decimal Comprimento { get; }
        public decimal Largura { get; }
        public decimal Area { get; }
        public decimal Perimetro{ get; }

        public RetanguloModel(decimal comprimento, decimal largura)
        {
            Comprimento = comprimento;
            Largura = largura;
            Area = Largura * Comprimento;
            Perimetro = Comprimento + Comprimento + Largura + Largura;
        }
    }
}