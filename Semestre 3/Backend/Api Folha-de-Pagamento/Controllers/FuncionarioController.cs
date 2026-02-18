using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Api_Folha_de_Pagamento.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FuncionarioController : ControllerBase
    {
        [HttpGet("/funcionarios")]
        public IActionResult GetFuncionarios()
        {
            return Ok(Mock.Dados.GerarDados());
        }
    }
}