using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ApiGeometria.Model;
namespace ApiGeometria.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RetanguloController : ControllerBase
    {
        [HttpGet("/retangulo/{comprimento}/{largura}")]
        public IActionResult GetRetangulo(double comprimento, double largura)
        {
            var retangulo = new RetanguloModel(comprimento, largura);
            return Ok(new
            {
                Tipo = "Retângulo",
                Area = retangulo.CalcularArea(),
                Perimetro = retangulo.CalcularPerimetro()
            });
        }
    }
}