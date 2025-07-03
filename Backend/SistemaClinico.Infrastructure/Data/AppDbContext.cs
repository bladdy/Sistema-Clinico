
using Microsoft.EntityFrameworkCore;
using SistemaClinico.Core.Entities;
namespace SistemaClinico.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Paciente> Pacientes => Set<Paciente>();
    }
}