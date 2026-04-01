using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ControleEstoque.Migrations
{
    /// <inheritdoc />
    public partial class betinha : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProdutoModel_CategoriaProduto_Categoriaid",
                table: "ProdutoModel");

            migrationBuilder.RenameColumn(
                name: "Categoriaid",
                table: "ProdutoModel",
                newName: "CategoriaId");

            migrationBuilder.RenameIndex(
                name: "IX_ProdutoModel_Categoriaid",
                table: "ProdutoModel",
                newName: "IX_ProdutoModel_CategoriaId");

            migrationBuilder.AlterColumn<decimal>(
                name: "QuantidadeAtual",
                table: "ProdutoModel",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AddColumn<Guid>(
                name: "UnidadeId",
                table: "ProdutoModel",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddForeignKey(
                name: "FK_ProdutoModel_CategoriaProduto_CategoriaId",
                table: "ProdutoModel",
                column: "CategoriaId",
                principalTable: "CategoriaProduto",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProdutoModel_CategoriaProduto_CategoriaId",
                table: "ProdutoModel");

            migrationBuilder.DropColumn(
                name: "UnidadeId",
                table: "ProdutoModel");

            migrationBuilder.RenameColumn(
                name: "CategoriaId",
                table: "ProdutoModel",
                newName: "Categoriaid");

            migrationBuilder.RenameIndex(
                name: "IX_ProdutoModel_CategoriaId",
                table: "ProdutoModel",
                newName: "IX_ProdutoModel_Categoriaid");

            migrationBuilder.AlterColumn<double>(
                name: "QuantidadeAtual",
                table: "ProdutoModel",
                type: "float",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AddForeignKey(
                name: "FK_ProdutoModel_CategoriaProduto_Categoriaid",
                table: "ProdutoModel",
                column: "Categoriaid",
                principalTable: "CategoriaProduto",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
