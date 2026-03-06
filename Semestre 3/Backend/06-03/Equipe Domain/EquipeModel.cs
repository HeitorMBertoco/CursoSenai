using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Reflection;
using System.Reflection.Metadata.Ecma335;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using PilotoDomain;
namespace Equipe_Domain
{
    public class EquipeModel
    {
        public string Nome { get; set; }
        public IReadOnlyList<PilotoModel> Pilotos => _pilotos;
        
        private List<PilotoModel> _pilotos { get; set; } = [];

        public EquipeModel(string nome)
        {
            Nome =  nome;
        }
        public void  AdicionarPiloto(PilotoModel piloto)
        {
            _pilotos.Add(piloto);
            Console.WriteLine($"piloto {piloto.Nome} foi adicionado à equipe {Nome}");


        }
        
    }
}
