using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ControleEstoque.Data;


namespace ControleEstoque
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<ControleEstoqueContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("ControleEstoqueContext") ?? throw new InvalidOperationException("Connection string 'ControleEstoqueContext' not found.")));
            
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

            
            app.UseSwagger();
            app.UseSwaggerUI();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
