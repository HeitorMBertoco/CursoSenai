using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ControleEstoque.Migrations
{
    /// <inheritdoc />
    public partial class renomear : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProdutoModel_UnidadeMedida_UnidadeMedidaid",
                table: "ProdutoModel");

            migrationBuilder.DropColumn(
                name: "UnidadeId",
                table: "ProdutoModel");

            migrationBuilder.RenameColumn(
                name: "UnidadeMedidaid",
                table: "ProdutoModel",
                newName: "UnidadeMedidaId");

            migrationBuilder.RenameIndex(
                name: "IX_ProdutoModel_UnidadeMedidaid",
                table: "ProdutoModel",
                newName: "IX_ProdutoModel_UnidadeMedidaId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProdutoModel_UnidadeMedida_UnidadeMedidaId",
                table: "ProdutoModel",
                column: "UnidadeMedidaId",
                principalTable: "UnidadeMedida",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProdutoModel_UnidadeMedida_UnidadeMedidaId",
                table: "ProdutoModel");

            migrationBuilder.RenameColumn(
                name: "UnidadeMedidaId",
                table: "ProdutoModel",
                newName: "UnidadeMedidaid");

            migrationBuilder.RenameIndex(
                name: "IX_ProdutoModel_UnidadeMedidaId",
                table: "ProdutoModel",
                newName: "IX_ProdutoModel_UnidadeMedidaid");

            migrationBuilder.AddColumn<Guid>(
                name: "UnidadeId",
                table: "ProdutoModel",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddForeignKey(
                name: "FK_ProdutoModel_UnidadeMedida_UnidadeMedidaid",
                table: "ProdutoModel",
                column: "UnidadeMedidaid",
                principalTable: "UnidadeMedida",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
