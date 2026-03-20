using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ControleEstoque.Migrations
{
    /// <inheritdoc />
    public partial class Primeira : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CategoriaProduto",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: false),
                    Descricao = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoriaProduto", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "OperacaoEstoque",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Hora = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Motivo = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: false),
                    Entrada_Saida = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperacaoEstoque", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "UnidadeMedida",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Sigla = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: false),
                    Descricao = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Fracionavel = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnidadeMedida", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "ProdutoModel",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Habilitado = table.Column<bool>(type: "bit", nullable: false),
                    Categoriaid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    NomeArquivoFoto = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: false),
                    Descricao = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    QuantidadeAtual = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProdutoModel", x => x.id);
                    table.ForeignKey(
                        name: "FK_ProdutoModel_CategoriaProduto_Categoriaid",
                        column: x => x.Categoriaid,
                        principalTable: "CategoriaProduto",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OperacaoEstoqueDetalhe",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Produtoid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Quantidade = table.Column<double>(type: "float", nullable: false),
                    OperacaoEstoqueid = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperacaoEstoqueDetalhe", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OperacaoEstoqueDetalhe_OperacaoEstoque_OperacaoEstoqueid",
                        column: x => x.OperacaoEstoqueid,
                        principalTable: "OperacaoEstoque",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_OperacaoEstoqueDetalhe_ProdutoModel_Produtoid",
                        column: x => x.Produtoid,
                        principalTable: "ProdutoModel",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OperacaoEstoqueDetalhe_OperacaoEstoqueid",
                table: "OperacaoEstoqueDetalhe",
                column: "OperacaoEstoqueid");

            migrationBuilder.CreateIndex(
                name: "IX_OperacaoEstoqueDetalhe_Produtoid",
                table: "OperacaoEstoqueDetalhe",
                column: "Produtoid");

            migrationBuilder.CreateIndex(
                name: "IX_ProdutoModel_Categoriaid",
                table: "ProdutoModel",
                column: "Categoriaid");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OperacaoEstoqueDetalhe");

            migrationBuilder.DropTable(
                name: "UnidadeMedida");

            migrationBuilder.DropTable(
                name: "OperacaoEstoque");

            migrationBuilder.DropTable(
                name: "ProdutoModel");

            migrationBuilder.DropTable(
                name: "CategoriaProduto");
        }
    }
}
