using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;

namespace CNH.Cnh
{
    public class cnhModel
    {
        [Key]
        public Guid Id { get; set; }

        [StringLength(9)]
        public required String Sobrenome { get; set; }

        [StringLength(100)]
        public required String Nome { get; set; }

        public required String UrlFoto { get; set; }


        public DateTime? DataNascimento { get; set; }

        [StringLength(100)]
        public String? LocalNascimento { get; set; }

        [StringLength(10)]
        public required String localEmissao { get; set; }

        [StringLength(10)]
        public required String OrgaoExpedidor { get; set; }

        [StringLength(20)]
        public required String Cpf { get; set; }

        public required String nRegistro { get; set; }




        public String? Naturalidade { get; set; }

        public required String PlacaVeiculos { get; set; }
        public String? Filiacao { get; set; }
        public String? Observacao { get; set; }

    }
}