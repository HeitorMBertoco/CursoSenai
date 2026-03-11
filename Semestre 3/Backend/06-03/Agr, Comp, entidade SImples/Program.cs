using CursoDomain;


AlunoModel aluno1 = new AlunoModel("Ronaldo Mac donaldes", 17);

AlunoModel aluno2 = new AlunoModel("Rei do Burguer", 190);

AlunoModel aluno3 = new AlunoModel("Tacinho Bella", 16);

AlunoModel aluno4 = new AlunoModel("Geraldo 30 cm Burguer", 29);


aluno1.CriarNota("Trabalho Biologia", 70);
aluno2.CriarNota("Seminario Sociologia", 25);

aluno3.CriarNota("Tarefa LP", 10);

aluno4.CriarNota("Tarefa Matematica", 99);

CursoModel curso = new CursoModel("Açucar e Alcool", 15);

curso.MatricularAluno(aluno1);

curso.MatricularAluno(aluno2);





