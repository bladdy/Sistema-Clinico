using Microsoft.EntityFrameworkCore;
using SistemaClinico.Core.DTOs.Catalogos;
using SistemaClinico.Core.DTOs.Doctores;
using SistemaClinico.Core.Entities;
using SistemaClinico.Core.Interfaces;
using SistemaClinico.Infrastructure.Data;
using BCrypt.Net;

namespace SistemaClinico.Infrastructure.Services
{
    public class DotoresService : IDotoresService
    {
        private readonly AppDbContext _context;

        public DotoresService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<DoctorResponseDto> CreateDoctorAsync(DoctorCreateDto dto)
        {
            Usuario usuario;

            if (dto.UsuarioId.HasValue)
            {
                usuario = await _context.Usuarios.FindAsync(dto.UsuarioId.Value);
                if (usuario == null)
                    throw new Exception("El usuario especificado no existe.");
            }
            else
            {
                if (string.IsNullOrWhiteSpace(dto.UsuarioCorreo) || string.IsNullOrWhiteSpace(dto.Clave) || dto.RolId == null)
                    throw new Exception("Faltan datos para crear el usuario.");

                if (await _context.Usuarios.AnyAsync(u => u.Correo == dto.UsuarioCorreo))
                    throw new Exception("El correo ya está registrado.");

                usuario = new Usuario
                {
                    Nombre = dto.UsuarioNombre!,
                    Correo = dto.UsuarioCorreo!,
                    RolId = dto.RolId.Value,
                    ClaveHash = BCrypt.Net.BCrypt.HashPassword(dto.Clave!)
                };

                _context.Usuarios.Add(usuario);
                await _context.SaveChangesAsync();
            }

            var especialidades = await _context.Especialidades
                .Where(e => dto.EspecialidadIds.Contains(e.Id))
                .ToListAsync();

            if (especialidades.Count != dto.EspecialidadIds.Count)
                throw new Exception("Una o más especialidades no existen.");

            var newDoctor = new Doctor
            {
                Nombre = dto.Nombre,
                Apellido = dto.Apellido,
                Correo = dto.Correo,
                Exequatur = dto.Exequatur,
                Documento = dto.Documento,
                Telefono = dto.Telefono,
                UsuarioId = usuario.Id,
                DoctorEspecialidades = especialidades.Select(e => new DoctorEspecialidad
                {
                    EspecialidadId = e.Id
                }).ToList()
            };

            _context.Doctores.Add(newDoctor);
            await _context.SaveChangesAsync();

            return new DoctorResponseDto
            {
                Id = newDoctor.Id,
                Nombre = newDoctor.Nombre,
                Apellido = newDoctor.Apellido,
                Correo = newDoctor.Correo,
                Documento = newDoctor.Documento,
                Telefono = newDoctor.Telefono,
                Exequatur = newDoctor.Exequatur,
                Especialidades = especialidades.Select(e => new EspecialidadDto
                {
                    Id = e.Id,
                    Nombre = e.Nombre
                }).ToList()
            };
        }

        public async Task<IEnumerable<DoctorResponseDto>> GetDoctorsAsync()
        {
            var doctors = await _context.Doctores
                .Include(d => d.DoctorEspecialidades)
                    .ThenInclude(de => de.Especialidad)
                .ToListAsync();

            return doctors.Select(doctor => new DoctorResponseDto
            {
                Id = doctor.Id,
                Nombre = doctor.Nombre,
                Apellido = doctor.Apellido,
                Documento = doctor.Documento,
                Telefono = doctor.Telefono,
                Correo = doctor.Correo,
                Exequatur = doctor.Exequatur,
                Especialidades = doctor.DoctorEspecialidades
                    .Select(de => new EspecialidadDto
                    {
                        Id = de.Especialidad.Id,
                        Nombre = de.Especialidad.Nombre
                    }).ToList()
            }).ToList();
        }

        public async Task<DoctorResponseDto> GetDoctorByIdAsync(int id)
        {
            var doctor = await _context.Doctores
                .Include(d => d.DoctorEspecialidades)
                    .ThenInclude(de => de.Especialidad)
                .FirstOrDefaultAsync(d => d.Id == id);

            if (doctor == null) return null;

            return new DoctorResponseDto
            {
                Id = doctor.Id,
                Nombre = doctor.Nombre,
                Apellido = doctor.Apellido,
                Documento = doctor.Documento,
                Telefono = doctor.Telefono,
                Correo = doctor.Correo,
                Exequatur = doctor.Exequatur,
                Especialidades = doctor.DoctorEspecialidades
                    .Select(de => new EspecialidadDto
                    {
                        Id = de.Especialidad.Id,
                        Nombre = de.Especialidad.Nombre
                    }).ToList()
            };
        }

        public async Task<DoctorResponseDto> UpdateDoctorAsync(int id, DoctorCreateDto dto)
        {
            var doctor = await _context.Doctores
                .Include(d => d.DoctorEspecialidades)
                .Include(d => d.Usuario)
                .FirstOrDefaultAsync(d => d.Id == id);

            if (doctor == null) return null;

            // Actualizar datos del usuario si viene en el DTO
            if (!string.IsNullOrWhiteSpace(dto.UsuarioNombre))
                doctor.Usuario.Nombre = dto.UsuarioNombre;

            if (!string.IsNullOrWhiteSpace(dto.UsuarioCorreo) && doctor.Usuario.Correo != dto.UsuarioCorreo)
            {
                // Verificar si el nuevo correo ya está registrado
                if (await _context.Usuarios.AnyAsync(u => u.Correo == dto.UsuarioCorreo && u.Id != doctor.UsuarioId))
                    throw new Exception("El correo ya está registrado por otro usuario.");

                doctor.Usuario.Correo = dto.UsuarioCorreo;
            }

            if (!string.IsNullOrWhiteSpace(dto.Clave))
            {
                doctor.Usuario.ClaveHash = BCrypt.Net.BCrypt.HashPassword(dto.Clave);
            }

            if (dto.RolId.HasValue)
            {
                doctor.Usuario.RolId = dto.RolId.Value;
            }

            // Actualizar campos del doctor
            doctor.Nombre = dto.Nombre;
            doctor.Apellido = dto.Apellido;
            doctor.Correo = dto.Correo;
            doctor.Exequatur = dto.Exequatur;
            doctor.Documento = dto.Documento;
            doctor.Telefono = dto.Telefono;

            // Actualizar especialidades
            var especialidades = await _context.Especialidades
                .Where(e => dto.EspecialidadIds.Contains(e.Id))
                .ToListAsync();

            if (especialidades.Count != dto.EspecialidadIds.Count)
                throw new Exception("Una o más especialidades no existen.");

            // Limpiar y reasignar especialidades
            doctor.DoctorEspecialidades.Clear();

            foreach (var especialidad in especialidades)
            {
                doctor.DoctorEspecialidades.Add(new DoctorEspecialidad
                {
                    DoctorId = doctor.Id,
                    EspecialidadId = especialidad.Id
                });
            }

            await _context.SaveChangesAsync();

            return new DoctorResponseDto
            {
                Id = doctor.Id,
                Nombre = doctor.Nombre,
                Apellido = doctor.Apellido,
                Documento = doctor.Documento,
                Telefono = doctor.Telefono,
                Correo = doctor.Correo,
                Exequatur = doctor.Exequatur,
                Especialidades = especialidades.Select(e => new EspecialidadDto
                {
                    Id = e.Id,
                    Nombre = e.Nombre
                }).ToList()
            };
        }

        public async Task<bool> DeleteDoctorAsync(int id)
        {
            var doctor = await _context.Doctores.FindAsync(id);
            if (doctor == null) return false;

            _context.Doctores.Remove(doctor);
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
