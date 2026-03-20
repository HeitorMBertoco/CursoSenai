using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ProdutoDomain
{
    public class UnidadeMedida
    {
        public UnidadeMedida( string sigla, string descricao, bool fracionavel)
        {
            
            Sigla = sigla;
            Descricao = descricao;
            Fracionavel = fracionavel;
        }
        [Key]
        public Guid id { get; set; }
        [StringLength(12)]
        public String Sigla { get; set; }
        [StringLength(50)]
        public String Descricao { get; set; }

        public Boolean Fracionavel { get; set; } = false;
    }
}
