using Microsoft.EntityFrameworkCore;
using SistemaClinico.Core.DTOs.Pacientes;
using SistemaClinico.Core.Entities;
using SistemaClinico.Core.Interfaces;
using SistemaClinico.Infrastructure.Data;

namespace SistemaClinico.Infrastructure.Services
{
    public class PacienteService : IPacienteService
    {
        private readonly AppDbContext _context;

        public PacienteService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<PacienteResponseDto>> GetAllAsync()
        {
            var pacientes = await _context.Pacientes.ToListAsync();

            return pacientes.Select(p => new PacienteResponseDto
            {
                Id = p.Id,
                Nombre = p.Nombre,
                Documento = p.Documento,
                Telefono = p.Telefono,
                Correo = p.Correo,
                FechaNacimiento = p.FechaNacimiento,
                Genero = p.Genero.ToString() // Convert enum to string
            }).ToList();
        }

        public async Task<PacienteResponseDto> GetByIdAsync(int id)
        {
            var p = await _context.Pacientes.FindAsync(id);
            if (p == null) return null;

            return new PacienteResponseDto
            {
                Id = p.Id,
                Nombre = p.Nombre,
                Documento = p.Documento,
                Telefono = p.Telefono,
                Correo = p.Correo,
                FechaNacimiento = p.FechaNacimiento,
                Genero = p.Genero.ToString() // Convert enum to string
            };
        }

        public async Task<PacienteResponseDto> CreateAsync(PacienteCreateDto dto)
        {
            var paciente = new Paciente
            {
                Nombre = dto.Nombre,
                Documento = dto.Documento,
                Telefono = dto.Telefono,
                Correo = dto.Correo,
                FechaNacimiento = dto.FechaNacimiento,
                Genero = dto.Genero
            };

            _context.Pacientes.Add(paciente);
            await _context.SaveChangesAsync();

            return new PacienteResponseDto
            {
                Id = paciente.Id,
                Nombre = paciente.Nombre,
                Documento = paciente.Documento,
                Telefono = paciente.Telefono,
                Correo = paciente.Correo,
                FechaNacimiento = paciente.FechaNacimiento,
                Genero = paciente.Genero.ToString() // Convert enum to string
            };
        }

        public async Task<bool> UpdateAsync(PacienteUpdateDto dto)
        {
            var paciente = await _context.Pacientes.FindAsync(dto.Id);
            if (paciente == null) return false;

            paciente.Nombre = dto.Nombre;
            paciente.Documento = dto.Documento;
            paciente.Telefono = dto.Telefono;
            paciente.Correo = dto.Correo;
            paciente.FechaNacimiento = dto.FechaNacimiento;
            paciente.Genero = Enum.Parse<Genero>(dto.Genero, true);

            _context.Pacientes.Update(paciente);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var paciente = await _context.Pacientes.FindAsync(id);
            if (paciente == null) return false;

            _context.Pacientes.Remove(paciente);
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
