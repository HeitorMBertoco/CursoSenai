
using System.ComponentModel.DataAnnotations;

namespace AnimalDomain
{
    public class Genero
    {
        public Genero( string nome, string? desc)
        {

            Nome = nome;
            Desc = desc;
        }
        [Key]
        public Guid Id { get; set; }

        public string Nome { get; set; }

        public string? Desc { get; set; }


    }
}
