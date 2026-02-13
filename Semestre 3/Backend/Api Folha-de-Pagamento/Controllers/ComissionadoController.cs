
using Microsoft.AspNetCore.Mvc;
using Api_Folha_de_Pagamento.Models;
namespace Api_Folha_de_Pagamento.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ComissionadoController : ControllerBase
    {
        [HttpGet("/comissionado/{nome}/{foto}/{totalVendas}/{taxaComissao}")]
        public IActionResult Get(string nome, string foto,  double totalVendas, double taxaComissao)
        {
            return Ok(new ComissionadoModel(nome, foto, totalVendas, taxaComissao));
        }
    
        
    }
}