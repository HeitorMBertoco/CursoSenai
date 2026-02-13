using ApiGeometria.Model;

namespace ApiGeometria.Model
{
    public class CirculoModel : FormaModel
    {
        public double Raio { get; set; }

        // Implementação da propriedade abstrata
        public override string Tipo { get; set; }

        public CirculoModel(double raio) : base("Círculo")
        {
            Raio = raio;
            Tipo = "Círculo"; 
        }

        public override double CalcularArea()
        {
            return Math.Round(Math.PI * Math.Pow(Raio, 2), 2);
        }

        public override double CalcularPerimetro()
        {
            return Math.Round(2 * Math.PI * Raio, 2);
        }
    }
}
