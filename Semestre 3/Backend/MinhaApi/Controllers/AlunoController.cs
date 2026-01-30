
using Microsoft.AspNetCore.Mvc;
using MinhaApi.Models;

namespace MinhaApi.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class AlunoController : ControllerBase
    {
        [HttpGet("/aluno")]
        public List<AlunoModel> GetAluno()
        {
            
            List<AlunoModel> alunos = new List<AlunoModel>();
            alunos.Add(new AlunoModel { Nome = "Savio", Idade = 200, Curso = "Aviario" });
            alunos.Add(new AlunoModel { Nome = "João", Idade = 18, Curso = "Engenharia de Software" });
            alunos.Add(new AlunoModel { Nome = "Maria", Idade = 19, Curso = "Design" });
            alunos.Add(new AlunoModel { Nome = "Ana", Idade = 20, Curso = "Medicina" });
            alunos.Add(new AlunoModel { Nome = "Pedro", Idade = 21, Curso = "Direito" });
            alunos.Add(new AlunoModel { Nome = "Lucas", Idade = 22, Curso = "Arquitetura" });
            return alunos;



        }
    }
}