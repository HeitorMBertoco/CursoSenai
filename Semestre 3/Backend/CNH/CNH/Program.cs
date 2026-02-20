using CNH.Data;
using Microsoft.AspNetCore.Builder;
using Swashbuckle.Swagger;
using Swashbuckle;
using Swashbuckle.SwaggerUi;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<CNHContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CNHContext") ?? throw new InvalidOperationException("Connection string 'CNHContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
