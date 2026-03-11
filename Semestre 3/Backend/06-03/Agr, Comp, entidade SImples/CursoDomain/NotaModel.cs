using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.AccessControl;
using System.Threading.Tasks;

namespace CursoDomain
{
    public class NotaModel
    {

        internal NotaModel(string nomeAtividade, int valorNota)
        {
            this.NomeAtividade = nomeAtividade;

            this.ValorNota = valorNota;
            

        }
        public string NomeAtividade { get; set; }
        public int ValorNota { get; set; }


    }
}