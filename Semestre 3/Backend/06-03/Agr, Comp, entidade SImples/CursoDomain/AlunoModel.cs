

using System.Diagnostics.CodeAnalysis;

namespace CursoDomain
{
    public class AlunoModel
    {
        internal AlunoModel(string nomeAluno, int idade) 
        {
            this.NomeAluno = nomeAluno;
            this.Idade = idade;
        }
        public string NomeAluno { get; set; }
        public int Idade { get; set; }

        private List<NotaModel> _notas = [];

        public IReadOnlyList<NotaModel> Notas => _notas; 

        public void CriarNota(string nomeAtividade, int valorNota)
        {
            if (valorNota < 0)
            {
                throw new ArgumentException("Nota invalida: menor que zero");

            }
            if (valorNota > 100)
            {
                throw new ArgumentException("Nota invalida: maior que o limite");

            }
            _notas.Add(new NotaModel(nomeAtividade, valorNota));
            Console.WriteLine($"o aluno {NomeAluno} tirou {valorNota} na atividade {nomeAtividade} ");


        }
    }
}