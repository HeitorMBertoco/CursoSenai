/*
  Warnings:

  - You are about to drop the column `precoCusto` on the `OperacaoEstoqueDetalhe` table. All the data in the column will be lost.
  - You are about to drop the column `produtoId` on the `OperacaoEstoqueDetalhe` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `OperacaoEstoqueDetalhe` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[operacaoEstoqueId]` on the table `OperacaoEstoqueDetalhe` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "OperacaoEstoqueDetalhe" DROP CONSTRAINT "OperacaoEstoqueDetalhe_produtoId_fkey";

-- DropIndex
DROP INDEX "OperacaoEstoqueDetalhe_produtoId_key";

-- AlterTable
ALTER TABLE "OperacaoEstoqueDetalhe" DROP COLUMN "precoCusto",
DROP COLUMN "produtoId",
DROP COLUMN "quantidade";

-- CreateTable
CREATE TABLE "OperacaoEstoqueDetalheItem" (
    "id" SERIAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "precoCusto" DOUBLE PRECISION NOT NULL,
    "operacaoEstoqueDetalheId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,

    CONSTRAINT "OperacaoEstoqueDetalheItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OperacaoEstoqueDetalheItem_operacaoEstoqueDetalheId_produto_key" ON "OperacaoEstoqueDetalheItem"("operacaoEstoqueDetalheId", "produtoId");

-- CreateIndex
CREATE UNIQUE INDEX "OperacaoEstoqueDetalhe_operacaoEstoqueId_key" ON "OperacaoEstoqueDetalhe"("operacaoEstoqueId");

-- AddForeignKey
ALTER TABLE "OperacaoEstoqueDetalheItem" ADD CONSTRAINT "OperacaoEstoqueDetalheItem_operacaoEstoqueDetalheId_fkey" FOREIGN KEY ("operacaoEstoqueDetalheId") REFERENCES "OperacaoEstoqueDetalhe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperacaoEstoqueDetalheItem" ADD CONSTRAINT "OperacaoEstoqueDetalheItem_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "ProdutoModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
