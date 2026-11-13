using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Loggin
{
    public class Pessoa
    {
        public Pessoa()
        {
        }
        public Pessoa(string? name, double idade)
        {
            Id = Guid.NewGuid();
            this.name = name;
            this.idade = idade;

        }

        [Key]
        public Guid Id { get; set; }

        [StringLength(50)]
        public string? name { get; set; }

        public double idade { get; set; }

        public double saldo {get; set;}

        public string senha { get; set; }


    }
}