using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SistemaClinico.Core.DTOs.Auth;
using SistemaClinico.Core.Entities;
using SistemaClinico.Core.Interfaces;
using SistemaClinico.Infrastructure.Data;

namespace SistemaClinico.Infrastructure.Services
{
    public class RolService : IRolService
    {
        private readonly AppDbContext _context;

        public RolService(AppDbContext context)
        {
            _context = context;
        }

        public async Task AsignarPermisosAsync(AsignarPermisosRolDto dto)
        {
            // Elimina permisos anteriores
            var existentes = _context.RolPermisoModulos
                .Where(rpm => rpm.RolId == dto.RolId);
            _context.RolPermisoModulos.RemoveRange(existentes);

            // Agrega nuevos permisos
            foreach (var item in dto.PermisosPorModulo)
            {
                foreach (var permisoId in item.PermisoIds)
                {
                    _context.RolPermisoModulos.Add(new RolPermisoModulo
                    {
                        RolId = dto.RolId,
                        ModuloId = item.ModuloId,
                        PermisoId = permisoId
                    });
                }
            }

            await _context.SaveChangesAsync();
        }
        public async Task ActualizarPermisosRolAsync(ActualizarPermisosRolDto dto)
        {
            var rol = await _context.Roles
                .Include(r => r.PermisosPorModulo)
                .FirstOrDefaultAsync(r => r.Id == dto.RolId);

            if (rol == null)
                throw new Exception("Rol no encontrado");

            // Elimina todos los permisos actuales
            _context.RolPermisoModulos.RemoveRange(rol.PermisosPorModulo);

            // Agrega los nuevos
            foreach (var modulo in dto.PermisosPorModulo)
            {
                foreach (var permisoId in modulo.PermisoIds)
                {
                    var nuevo = new RolPermisoModulo
                    {
                        RolId = dto.RolId,
                        ModuloId = modulo.ModuloId,
                        PermisoId = permisoId
                    };
                    _context.RolPermisoModulos.Add(nuevo);
                }
            }

            await _context.SaveChangesAsync();
        }
        public async Task<IEnumerable<RolResponseDto>> GetAllAsync()
        {
            return await _context.Roles
                .Select(r => new RolResponseDto
                {
                    Id = r.Id,
                    Nombre = r.Nombre
                }).ToListAsync();
        }

        public async Task<RolResponseDto> GetByIdAsync(int id)
        {
            var rol = await _context.Roles.FindAsync(id);
            if (rol == null) throw new Exception("Rol no encontrado");

            return new RolResponseDto
            {
                Id = rol.Id,
                Nombre = rol.Nombre
            };
        }

        public async Task<RolResponseDto> CreateAsync(RolCreateDto dto)
        {
            var rol = new Rol { Nombre = dto.Nombre };
            _context.Roles.Add(rol);
            await _context.SaveChangesAsync();

            return new RolResponseDto { Id = rol.Id, Nombre = rol.Nombre };
        }

        public async Task UpdateAsync(RolUpdateDto dto)
        {
            var rol = await _context.Roles.FindAsync(dto.Id);
            if (rol == null) throw new Exception("Rol no encontrado");

            rol.Nombre = dto.Nombre;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var rol = await _context.Roles.FindAsync(id);
            if (rol == null) throw new Exception("Rol no encontrado");

            _context.Roles.Remove(rol);
            await _context.SaveChangesAsync();
        }
    }

}