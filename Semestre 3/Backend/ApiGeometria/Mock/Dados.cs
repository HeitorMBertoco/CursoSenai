
namespace ApiGeometria.Mock
{
    public class Dados
    {
        public static List<FormaModel> Formas { get; set; } = new List<FormaModel>
        {
            new CirculoModel(5),
            new RetanguloModel(4, 6)
        };
        
    }
    
}