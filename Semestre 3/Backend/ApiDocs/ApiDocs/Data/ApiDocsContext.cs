using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ApiDocs.Rg;

namespace ApiDocs.Data
{
    public class ApiDocsContext : DbContext
    {
        public ApiDocsContext (DbContextOptions<ApiDocsContext> options)
            : base(options)
        {
        }

        public DbSet<ApiDocs.Rg.RgModel> RgModel { get; set; } = default!;
    }
}
