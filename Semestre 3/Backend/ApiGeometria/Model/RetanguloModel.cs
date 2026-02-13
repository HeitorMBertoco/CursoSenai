using ApiGeometria.Model;

namespace ApiGeometria.Model
{
   
public class RetanguloModel : FormaModel
{
    public double Largura { get; set; }
    public double Altura { get; set; }

    public override string Tipo { get; set; }

    public RetanguloModel(double largura, double altura) : base("Retângulo")
    {
        Largura = largura;
        Altura = altura;
        Tipo = "Retângulo";
    }

    public override double CalcularArea() => Largura * Altura;
    public override double CalcularPerimetro() => 2 * (Largura + Altura);
}
}