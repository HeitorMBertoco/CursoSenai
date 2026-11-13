using Loggin;
using Serilog;
using Serilog.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol;
var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("logginContext") ?? throw new InvalidOperationException("Connection string 'logginContext' not found.");

Log.Logger = new LoggerConfiguration().WriteTo.Console().WriteTo.File("logs/log-txt", rollingInterval: RollingInterval.Day).CreateLogger();

builder.Host.UseSerilog();

builder.Services.AddDbContext<logginContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddScoped<IPasswordHasher<Pessoa>, PasswordHasher<Pessoa>>();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {

}
app.MapControllers();
app.UseHttpsRedirection();
app.UseSwagger();
app.UseSwaggerUI();

app.Run();
