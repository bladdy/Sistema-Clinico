
using Microsoft.EntityFrameworkCore;
using SistemaClinico.Core.Entities;
namespace SistemaClinico.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Paciente> Pacientes => Set<Paciente>();
        public DbSet<Usuario> Usuarios => Set<Usuario>();
        public DbSet<Rol> Roles => Set<Rol>();
        public DbSet<Modulo> Modulos => Set<Modulo>();
        public DbSet<Permiso> Permisos => Set<Permiso>();
        public DbSet<RolPermisoModulo> RolPermisoModulos => Set<RolPermisoModulo>();
        public DbSet<MotivoConsulta> MotivosConsulta => Set<MotivoConsulta>();
        public DbSet<Diagnostico> Diagnosticos => Set<Diagnostico>();
        public DbSet<Doctor> Doctores => Set<Doctor>();
        public DbSet<HistoriaClinica> HistoriasClinicas => Set<HistoriaClinica>();
        public DbSet<Especialidad> Especialidades => Set<Especialidad>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Clave primaria compuesta para RolPermisoModulo
            modelBuilder.Entity<RolPermisoModulo>()
                .HasKey(rpm => new { rpm.RolId, rpm.ModuloId, rpm.PermisoId });

            // Relaciones
            modelBuilder.Entity<RolPermisoModulo>()
                .HasOne(rpm => rpm.Rol)
                .WithMany(r => r.PermisosPorModulo)
                .HasForeignKey(rpm => rpm.RolId);

            modelBuilder.Entity<RolPermisoModulo>()
                .HasOne(rpm => rpm.Modulo)
                .WithMany(m => m.PermisosAsignados)
                .HasForeignKey(rpm => rpm.ModuloId);

            modelBuilder.Entity<RolPermisoModulo>()
                .HasOne(rpm => rpm.Permiso)
                .WithMany(p => p.RolesModulos)
                .HasForeignKey(rpm => rpm.PermisoId);

            // Un usuario debe tener un rol
            modelBuilder.Entity<Usuario>()
                .HasOne(u => u.Rol)
                .WithMany(r => r.Usuarios)
                .HasForeignKey(u => u.RolId);

            // Seed Permisos
            modelBuilder.Entity<Permiso>().HasData(
                new Permiso { Id = 1, Nombre = "Crear" },
                new Permiso { Id = 2, Nombre = "Leer" },
                new Permiso { Id = 3, Nombre = "Editar" },
                new Permiso { Id = 4, Nombre = "Eliminar" },
                new Permiso { Id = 5, Nombre = "PermitirTodo" }
            );


            // Seed Módulos (ejemplo)
            modelBuilder.Entity<Modulo>().HasData(
                new Modulo { Id = 1, Nombre = "Pacientes" },
                new Modulo { Id = 2, Nombre = "Citas" },
                new Modulo { Id = 3, Nombre = "Doctores" },
                new Modulo { Id = 4, Nombre = "Usuarios" },
                new Modulo { Id = 5, Nombre = "Reportes" }
            );

            // Seed Rol Admin (permite todo)
            modelBuilder.Entity<Rol>().HasData(
                new Rol { Id = 1, Nombre = "Admin" }
            );

            modelBuilder.Entity<MotivoConsulta>().HasData(
                new MotivoConsulta { Id = 1, Nombre = "Dolor de cabeza" },
                new MotivoConsulta { Id = 2, Nombre = "Fiebre" }
            );

            modelBuilder.Entity<Diagnostico>().HasData(
                new Diagnostico { Id = 1, Nombre = "Migraña" },
                new Diagnostico { Id = 2, Nombre = "Gripe" }
            );
            modelBuilder.Entity<Especialidad>().HasData(
                new Especialidad { Id = 1, Nombre = "Neurología" },
                new Especialidad { Id = 2, Nombre = "Pediatría" }
            );
            modelBuilder.Entity<Doctor>().HasData(
                new Doctor { Id = 1, Nombre = "Dr. Juan Perez" },
                new Doctor { Id = 2, Nombre = "Dra. Maria Lopez" }
            );

            // Seed RolPermisoModulo para Admin: PermitirTodo en todos los módulos
            var rolAdminPermisos = new List<RolPermisoModulo>();
            for (int moduloId = 1; moduloId <= 5; moduloId++)
            {
                rolAdminPermisos.Add(new RolPermisoModulo
                {
                    RolId = 1,
                    ModuloId = moduloId,
                    PermisoId = 5 // PermitirTodo
                });
            }
            modelBuilder.Entity<RolPermisoModulo>().HasData(rolAdminPermisos.ToArray());
        }
    }
}
