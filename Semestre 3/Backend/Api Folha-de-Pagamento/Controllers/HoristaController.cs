
using Microsoft.AspNetCore.Mvc;

namespace Api_Folha_de_Pagamento.Controllers
{
    [ApiController]
    [Route("/Pagamento")]
    public class HoristaController : ControllerBase
    {
        [HttpGet("/Horista/{nome}/{foto}/{horasTrabalhadas}/{valorHora}")]
        public IActionResult Get(string nome, string foto, double horasTrabalhadas, double valorHora)
        {
            return Ok(new HoristaModel(nome, foto, horasTrabalhadas, valorHora));
        }
    }
}