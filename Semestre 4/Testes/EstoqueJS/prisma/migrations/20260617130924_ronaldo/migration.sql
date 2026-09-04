-- CreateTable
CREATE TABLE "ProdutoModel" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "habilitado" BOOLEAN NOT NULL DEFAULT true,
    "nomearquivofoto" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "quantidadeAtual" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ProdutoModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriaProduto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "CategoriaProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnidadeMedida" (
    "id" SERIAL NOT NULL,
    "sigla" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "fracionavel" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UnidadeMedida_pkey" PRIMARY KEY ("id")
);
