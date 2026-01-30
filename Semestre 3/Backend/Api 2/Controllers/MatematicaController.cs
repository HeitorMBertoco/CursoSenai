using Microsoft.AspNetCore.Mvc;

namespace Api_2.Controllers
{
    [ApiController]
    [Route("/conta")]
    public class MatematicaController : ControllerBase
    {
        [HttpGet("somar/{a}/{b}")]
        public IActionResult Somar(int a, int b)
        {
            var resultado = new Models.Somar(a, b);
            return Ok(resultado);
        }
       

        [HttpGet("subtrair/{a}/{b}")]
        public IActionResult Subtrair(int a, int b)
        {
            var resultado = new Models.Subtrair(a, b);
            return Ok(resultado);
        }
       
        [HttpGet("multiplicar/{a}/{b}")]
        public IActionResult Multiplicar(int a, int b)
        {
            var resultado = new Models.Multiplicar(a, b);
            return Ok(resultado);
        }

        [HttpGet("dividir/{a}/{b}")]
        public IActionResult Dividir(int a, int b)
        {
            var resultado = new Models.Dividir(a, b);
            return Ok(resultado);
        }
        
    }
}