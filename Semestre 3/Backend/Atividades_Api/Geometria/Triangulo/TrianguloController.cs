using AtividadesApi.Geometria.Triangulo;
using Microsoft.AspNetCore.Mvc;

namespace AtividadesApi.Geometria.Triangulo
{
    [ApiController]
    [Route("[controller]")]
    public class TrianguloController : ControllerBase
    {
        [HttpGet("/triangulo")]
        public TrianguloModel GetTriangulo(decimal comprimento, decimal largura)
        {
            
            return new TrianguloModel(comprimento, largura);
        }
    }
}