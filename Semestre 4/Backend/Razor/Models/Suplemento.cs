using System.ComponentModel.DataAnnotations;

namespace Razor.Models
{
    public class Suplemento
    {
        public Suplemento(string nome, string marca, string categoria)

        {
            Id = Guid.NewGuid();
            Nome = nome ?? throw new ArgumentNullException(nameof(nome));
            Marca = marca ?? throw new ArgumentNullException(nameof(marca));
            Categoria = categoria ?? throw new ArgumentNullException(nameof(categoria));
        }

        [Key] public Guid Id { get; set; }

        
        public string Nome { get; set; }

        public string Marca { get; set; }
        public string Categoria { get; set; }


    }
}
