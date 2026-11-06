using Microsoft.EntityFrameworkCore;

public class RazorContext(DbContextOptions<RazorContext> options) : DbContext(options)
{
    public DbSet<Razor.Models.Suplemento> Suplemento { get; set; } = default!;
}
