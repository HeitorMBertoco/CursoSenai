using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CNH.Cnh;

namespace CNH.Data
{
    public class CNHContext : DbContext
    {
        public CNHContext (DbContextOptions<CNHContext> options)
            : base(options)
        {
        }

        public DbSet<CNH.Cnh.cnhModel> cnhModel { get; set; } = default!;
    }
}
