/*
  Warnings:

  - Added the required column `categoriaId` to the `ProdutoModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidadeMedidaId` to the `ProdutoModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProdutoModel" ADD COLUMN     "categoriaId" INTEGER NOT NULL,
ADD COLUMN     "unidadeMedidaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ProdutoModel" ADD CONSTRAINT "ProdutoModel_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "CategoriaProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutoModel" ADD CONSTRAINT "ProdutoModel_unidadeMedidaId_fkey" FOREIGN KEY ("unidadeMedidaId") REFERENCES "UnidadeMedida"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
