
namespace AtividadesApi.Geometria.Triangulo
{
    public class TrianguloModel
    {
        public decimal Comprimento { get; }
        public decimal Largura { get; }
        public decimal Area { get; }
        

        public TrianguloModel(decimal comprimento, decimal largura)
        {
            Comprimento = comprimento;
            Largura = largura;
            Area = (Largura * Comprimento) / 2;
            
        }
    }
}