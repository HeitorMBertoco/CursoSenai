using PilotoLib;

namespace EquipeLib
{
    public class EquipeModel
    {

        public string nome { get; set; }
        private List<PilotoModel> _pilotos { get; set; } = [];




        public EquipeModel(string nome)
        {
            this.nome = nome;
        }
        public IReadOnlyList<PilotoModel> Pilotos => _pilotos;

        public void AdicionarPiloto(PilotoModel piloto)
        {
            if (_pilotos.Count >= 2)
            {
                throw new ArgumentException("limite de pilotos atingidos");

            }
            _pilotos.Add(piloto);
            Console.WriteLine(piloto.Nome + " entrou na equipe" + nome);     
        }
    }
}
