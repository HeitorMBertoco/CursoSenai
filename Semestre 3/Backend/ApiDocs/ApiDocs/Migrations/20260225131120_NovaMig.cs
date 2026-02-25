using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApiDocs.Migrations
{
    /// <inheritdoc />
    public partial class NovaMig : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FatorRh",
                table: "RgModel");

            migrationBuilder.DropColumn(
                name: "NomeMae",
                table: "RgModel");

            migrationBuilder.RenameColumn(
                name: "Numero",
                table: "RgModel",
                newName: "Sobrenome");

            migrationBuilder.RenameColumn(
                name: "NomePai",
                table: "RgModel",
                newName: "LocalNascimento");

            migrationBuilder.AddColumn<string>(
                name: "Cpf",
                table: "RgModel",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Filiacao",
                table: "RgModel",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PlacaVeiculos",
                table: "RgModel",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "localEmissao",
                table: "RgModel",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "nRegistro",
                table: "RgModel",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cpf",
                table: "RgModel");

            migrationBuilder.DropColumn(
                name: "Filiacao",
                table: "RgModel");

            migrationBuilder.DropColumn(
                name: "PlacaVeiculos",
                table: "RgModel");

            migrationBuilder.DropColumn(
                name: "localEmissao",
                table: "RgModel");

            migrationBuilder.DropColumn(
                name: "nRegistro",
                table: "RgModel");

            migrationBuilder.RenameColumn(
                name: "Sobrenome",
                table: "RgModel",
                newName: "Numero");

            migrationBuilder.RenameColumn(
                name: "LocalNascimento",
                table: "RgModel",
                newName: "NomePai");

            migrationBuilder.AddColumn<string>(
                name: "FatorRh",
                table: "RgModel",
                type: "nvarchar(3)",
                maxLength: 3,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NomeMae",
                table: "RgModel",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);
        }
    }
}
