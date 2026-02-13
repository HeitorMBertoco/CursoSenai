
using Microsoft.AspNetCore.Mvc;
using Api_Folha_de_Pagamento.Models;
namespace Api_Folha_de_Pagamento.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HoristaController : ControllerBase
    {
        [HttpGet("/horista/{nome}/{foto}/{horasTrabalhadas}/{valorHora}")]
        public IActionResult Get(string nome, string foto, double horasTrabalhadas, double valorHora)
        {
            return Ok(new HoristaModel(nome, foto, horasTrabalhadas, valorHora));
        }
    }
}