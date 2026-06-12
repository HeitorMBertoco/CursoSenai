-- CreateTable
CREATE TABLE "aluno" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id")
);
