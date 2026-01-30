using Api_2.Models;
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
            var resultado = new Soma(a, b);
            return Ok(resultado);
        }
       

        [HttpGet("subtrair/{a}/{b}")]
        public IActionResult Subtrair(int a, int b)
        {
            var resultado = new Subtracao(a, b);
            return Ok(resultado);
        }
       
        [HttpGet("multiplicar/{a}/{b}")]
        public IActionResult Multiplicar(int a, int b)
        {
            var resultado = new Multiplicacao(a, b);
            return Ok(resultado);
        }

        [HttpGet("dividir/{a}/{b}")]
        public IActionResult Dividir(int a, int b)
        {
            var resultado = new Divisao(a, b);
            return Ok(resultado);
        }
        [HttpGet("exponenciacao/{a}/{b}")]
        public IActionResult Exponenciar(int a, int b)
        {
            var resultado = new Exponenciacao(a, b);
            return Ok(resultado);
        }

        
    }
}