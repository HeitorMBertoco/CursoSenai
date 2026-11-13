using Microsoft.EntityFrameworkCore;

public class logginContext(DbContextOptions<logginContext> options) : DbContext(options)
{
    public DbSet<Loggin.Pessoa> Pessoa { get; set; } = default!;
}
