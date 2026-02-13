
using Microsoft.AspNetCore.Mvc;

namespace Api_Folha_de_Pagamento.Controllers
{
    [ApiController]
    [Route("/Pagamento")]
    public class AssalariadoController : ControllerBase
    {
        [HttpGet("/Assalariado/{nome}/{foto}/{desconto}")]
        public IActionResult Get(string nome, string foto, double desconto)
        {
            return Ok(new AssalariadoModel(nome, foto, desconto));
        }
    }
}