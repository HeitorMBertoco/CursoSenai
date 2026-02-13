
using Microsoft.AspNetCore.Mvc;
using Api_Folha_de_Pagamento.Models;

namespace Api_Folha_de_Pagamento.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AssalariadoController : ControllerBase
    {
        [HttpGet("/assalariado/{nome}/{foto}/{salario}/{desconto}")]
        public IActionResult Get(string nome, string foto, double salario, double desconto)
        {
            return Ok(new AssalariadoModel(nome, foto, salario, desconto));
        }
    }
}