using System.ComponentModel.DataAnnotations;

namespace AnimalDomain
{
    public class Especie
    {
        public Especie() { }
        public Especie( Genero genero, string nome, string? desc, int? quantidade, string? arquivo_imagem)
        {

            Genero = genero;
            Nome = nome;
            Desc = desc;
            Quantidade = quantidade;
            Arquivo_imagem = arquivo_imagem;
        }
        [Key]
        public Guid Id { get; set; }

        public Genero Genero { get; set; }

        public string Nome { get; set; }

        public string? Desc { get; set; }

        public int? Quantidade { get; set; }

        public string? Arquivo_imagem { get; set; }
    }
}
