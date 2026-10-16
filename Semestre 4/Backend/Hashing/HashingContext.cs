using Microsoft.EntityFrameworkCore;

public class HashingContext(DbContextOptions<HashingContext> options) : DbContext(options)
{
    public DbSet<Hashing.Login> Login { get; set; } = default!;
}
