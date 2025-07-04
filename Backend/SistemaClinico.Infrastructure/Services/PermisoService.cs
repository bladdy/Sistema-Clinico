using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SistemaClinico.Core.Interfaces;
using SistemaClinico.Infrastructure.Data;

namespace SistemaClinico.Infrastructure.Services
{
    public class PermisoService : IPermisoService
    {
        private readonly AppDbContext _context;

        public PermisoService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<bool> TienePermisoAsync(int usuarioId, string moduloNombre, string permisoNombre)
        {
            // Obtiene el usuario con su rol y permisos asociados
            var usuario = await _context.Usuarios.Include(u => u.Rol)
                                             .ThenInclude(r => r.PermisosPorModulo)
                                             .ThenInclude(rpm => rpm.Permiso)
                                             .Include(u => u.Rol)
                                             .ThenInclude(r => r.PermisosPorModulo)
                                             .ThenInclude(rpm => rpm.Modulo)
                                             .FirstOrDefaultAsync(u => u.Id == usuarioId);


            if (usuario == null || usuario.Rol == null) return false;

            var rolPermisos = usuario.Rol.PermisosPorModulo;

            // Si tiene PermitirTodo en el módulo, autoriza automáticamente
            bool tienePermitirTodo = rolPermisos.Any(rpm =>
                rpm.Modulo.Nombre == moduloNombre &&
                rpm.Permiso.Nombre == "PermitirTodo"
            );
            if (tienePermitirTodo) return true;

            // Sino, verifica el permiso específico
            return rolPermisos.Any(rpm =>
                rpm.Modulo.Nombre == moduloNombre &&
                rpm.Permiso.Nombre == permisoNombre
            );
        }
    }
}