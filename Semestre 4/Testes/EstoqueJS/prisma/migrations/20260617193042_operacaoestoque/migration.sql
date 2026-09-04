-- CreateTable
CREATE TABLE "OperacaoEstoque" (
    "id" SERIAL NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "motivo" TEXT NOT NULL,
    "entradasaida" TEXT NOT NULL,

    CONSTRAINT "OperacaoEstoque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperacaoEstoqueDetalhe" (
    "id" SERIAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "precoCusto" DOUBLE PRECISION NOT NULL,
    "operacaoEstoqueId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,

    CONSTRAINT "OperacaoEstoqueDetalhe_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OperacaoEstoqueDetalhe_produtoId_key" ON "OperacaoEstoqueDetalhe"("produtoId");

-- AddForeignKey
ALTER TABLE "OperacaoEstoqueDetalhe" ADD CONSTRAINT "OperacaoEstoqueDetalhe_operacaoEstoqueId_fkey" FOREIGN KEY ("operacaoEstoqueId") REFERENCES "OperacaoEstoque"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperacaoEstoqueDetalhe" ADD CONSTRAINT "OperacaoEstoqueDetalhe_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "ProdutoModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
