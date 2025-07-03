using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using SistemaClinico.Infrastructure.Data;

var builder = WebApplication.CreateBuilder(args);

// Configurar DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Cargar controladores
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Sistema Clínico API",
        Version = "v1",
        Description = "API REST para la gestión del sistema clínico"
    });

    // Si usarás JWT más adelante, puedes preparar esto:
    // options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme { ... });
});


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "Sistema Clínico API v1");
        options.RoutePrefix = string.Empty; // Swagger en la raíz (/)
    });
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
