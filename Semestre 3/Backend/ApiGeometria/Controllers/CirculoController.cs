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
    public class CirculoController : ControllerBase
    {
        [HttpGet("/circulo/{raio}")]
        public IActionResult GetCirculo(double raio)
        {
            var circulo = new CirculoModel(raio);
            return Ok(new
            {
                Tipo = circulo.Tipo,
                Area = circulo.CalcularArea(),
                Perimetro = circulo.CalcularPerimetro()
            });
        }

    }
}