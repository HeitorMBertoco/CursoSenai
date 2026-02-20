using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CNH.Migrations
{
    /// <inheritdoc />
    public partial class Inicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "cnhModel",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Sobrenome = table.Column<string>(type: "nvarchar(9)", maxLength: 9, nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    UrlFoto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DataNascimento = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LocalNascimento = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    localEmissao = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    OrgaoExpedidor = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Cpf = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    nRegistro = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Naturalidade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PlacaVeiculos = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Filiacao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Observacao = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cnhModel", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "cnhModel");
        }
    }
}
