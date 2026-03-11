using CursoDomain;
namespace CursoDomain;

public class CursoModel

{
        internal CursoModel(string nomeCurso, int idadeMin) 
        {
            NomeCurso = nomeCurso;
            IdadeMin =  idadeMin;
   
        }
        public void MatricularAluno(AlunoModel Aluno)
    {
        if (Aluno.Idade < IdadeMin)
        {
            throw new ArgumentException("Idade Muito Baixa");
        }
        _alunos.Add(Aluno);
        Console.WriteLine($"o aluno {Aluno.NomeAluno} foi matriculado no curso {NomeCurso} ");
    }

    public string NomeCurso { get; set; }
    public int IdadeMin { get; set; }
    private List<AlunoModel> _alunos = [];

    public IReadOnlyList<AlunoModel> Alunos => _alunos;

    




}
