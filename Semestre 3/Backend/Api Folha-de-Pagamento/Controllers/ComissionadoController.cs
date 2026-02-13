
using Microsoft.AspNetCore.Mvc;

namespace Api_Folha_de_Pagamento.Controllers
{
    [ApiController]
    [Route("/Pagamento")]
    public class ComissionadoController : ControllerBase
    {
        [HttpGet("/Comissionado/{nome}/{foto}/{totalVendas}/{taxaComissao}")]
        public IActionResult Get(string nome, string foto,  double totalVendas, double taxaComissao)
        {
            return Ok(new ComissionadoModel(nome, foto, totalVendas, taxaComissao));
        }
    
        
    }
}