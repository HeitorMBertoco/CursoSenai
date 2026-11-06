using Microsoft.EntityFrameworkCore;

public class EscolaContext(DbContextOptions<EscolaContext> options) : DbContext(options)
{
    public DbSet<Escola.Models.Aluno> Aluno { get; set; } = default!;
}
