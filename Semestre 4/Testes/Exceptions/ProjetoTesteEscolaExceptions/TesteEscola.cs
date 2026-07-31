namespace ProjetoTesteEscolaExceptions;

using Exceptions;
[TestClass]
public sealed class TesteEscola
{
    [TestMethod]
    public void TesteIdadeMin()

    {
        Action act = () => new Escola(
    nome: "Jonas's swiss chocolate school",
    idadeMinima: 1,
    turmas: new List<Turmas>
    {
        new Turmas(
            dataCriacao: new DateOnly(2025, 05, 17 ),
            quantidadeAlunos: 32,
            serie: "JonasGays"
            
        ),
        new Turmas(
            dataCriacao: new DateOnly(2024, 02, 10 ),
            quantidadeAlunos: 24,
            serie: "Terceirão"
        ),
        new Turmas(
            dataCriacao: new DateOnly(2025, 06, 20 ),
            quantidadeAlunos: 32,
            serie: "Primeiro Ano EM"
        )
    }
);
Assert.Throws<IdadeMinimaNaoAtingidaException>(act);
}
[TestMethod]
public void TesteTurmaQuantidade()
    {
        Action act = () => new Escola(
    nome: "Luis's Mongolian throat singing school",
    idadeMinima: 12,
    turmas: new List<Turmas>
    {
        new Turmas(
            dataCriacao: new DateOnly(2025, 05, 20 ),
            quantidadeAlunos: 2,
            serie: "cantores guturais experientes"
        ),
        new Turmas(
            dataCriacao: new DateOnly(2023, 01, 01 ),
            quantidadeAlunos: 24,
            serie: "Cantores mongolianos Excelentes"
        ),
        new Turmas(
            dataCriacao: new DateOnly(2025, 07, 20 ),
            quantidadeAlunos: 32,
            serie: "Cantores guturais iniciantes"
        ),

          new Turmas(
            dataCriacao: new DateOnly(2025, 07, 09 ),
            quantidadeAlunos: 80,
            serie: "Cantores gulosos"
        )
    }
);
Assert.Throws<QuantidadeAlunosMinimaNaoAtingidaException>(act);
}
[TestMethod]
public void TesteCriacaoTurma()
    {
        Action act = () => new Escola(
    nome: "Dimas's Dark Discipline school",
    idadeMinima: 19,
    turmas: new List<Turmas>
    {
        new Turmas(
            dataCriacao: new DateOnly(2027, 05, 20 ),
            quantidadeAlunos: 20,
            serie: "Aurudos Disciplinados obscuros"
        ),
        new Turmas(
            dataCriacao: new DateOnly(2023, 01, 01 ),
            quantidadeAlunos: 24,
            serie: "Iniciantes da Disciplina"
        ),
        new Turmas(
            dataCriacao: new DateOnly(2025, 07, 20 ),
            quantidadeAlunos: 32,
            serie: "Monges da aura"
        ),

          new Turmas(
            dataCriacao: new DateOnly(2025, 07, 09 ),
            quantidadeAlunos: 80,
            serie: "Turbo"
        )
        
    }
        );
        Assert.Throws<DataInvalidaException>(act);
    }
    [TestMethod]
public void TesteCriacaoEscolaESucesso()
{
    Action act = () => new Escola(
    nome: "Dimas's Dark Discipline school",
    idadeMinima: 19,
    turmas: new List<Turmas>
    {
        new Turmas(
            dataCriacao: new DateOnly(2023, 05, 20 ),
            quantidadeAlunos: 20,
            serie: "Aurudos Disciplinados obscuros"
        ),
        new Turmas(
            dataCriacao: new DateOnly(2023, 01, 01 ),
            quantidadeAlunos: 24,
            serie: "Iniciantes da Disciplina"
        ),
        new Turmas(
            dataCriacao: new DateOnly(2025, 07, 20 ),
            quantidadeAlunos: 32,
            serie: "Monges da aura"
        ),

          new Turmas(
            dataCriacao: new DateOnly(2025, 07, 09 ),
            quantidadeAlunos: 80,
            serie: "Turbo"
        )
        
    }
    );
    
    
}}

