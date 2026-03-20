using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ControleEstoque.Migrations
{
    /// <inheritdoc />
    public partial class segunda : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "unidadeMedidaid",
                table: "ProdutoModel",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_ProdutoModel_unidadeMedidaid",
                table: "ProdutoModel",
                column: "unidadeMedidaid");

            migrationBuilder.AddForeignKey(
                name: "FK_ProdutoModel_UnidadeMedida_unidadeMedidaid",
                table: "ProdutoModel",
                column: "unidadeMedidaid",
                principalTable: "UnidadeMedida",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProdutoModel_UnidadeMedida_unidadeMedidaid",
                table: "ProdutoModel");

            migrationBuilder.DropIndex(
                name: "IX_ProdutoModel_unidadeMedidaid",
                table: "ProdutoModel");

            migrationBuilder.DropColumn(
                name: "unidadeMedidaid",
                table: "ProdutoModel");
        }
    }
}
