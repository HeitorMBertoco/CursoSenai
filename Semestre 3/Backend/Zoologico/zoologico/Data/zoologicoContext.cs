using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AnimalDomain;

namespace zoologico.Data
{
    public class zoologicoContext : DbContext
    {
        public zoologicoContext (DbContextOptions<zoologicoContext> options)
            : base(options)
        {
        }

        public DbSet<AnimalDomain.Genero> Genero { get; set; } = default!;
        public DbSet<AnimalDomain.Especie> Especie { get; set; } = default!;
    }
}
