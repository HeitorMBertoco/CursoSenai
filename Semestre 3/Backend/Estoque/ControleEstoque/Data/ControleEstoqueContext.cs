using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProdutoDomain;
using OperacionalDomain;

namespace ControleEstoque.Data
{
    public class ControleEstoqueContext : DbContext
    {
        public ControleEstoqueContext (DbContextOptions<ControleEstoqueContext> options)
            : base(options)
        {
        }

        public DbSet<ProdutoDomain.UnidadeMedida> UnidadeMedida { get; set; } = default!;
        public DbSet<ProdutoDomain.ProdutoModel> ProdutoModel { get; set; } = default!;
        public DbSet<ProdutoDomain.CategoriaProduto> CategoriaProduto { get; set; } = default!;
        public DbSet<OperacionalDomain.OperacaoEstoque> OperacaoEstoque { get; set; } = default!;
    }
}
