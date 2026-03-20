using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using zoologico.Data;

namespace zoologico
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<zoologicoContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("zoologicoContext") ?? throw new InvalidOperationException("Connection string 'zoologicoContext' not found.")));

            // Add services to the container.
            builder.Services.AddSwaggerGen();
            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseSwagger();
            app.UseSwaggerUI();
            app.MapControllers();

            app.Run();
        }
    }
}
