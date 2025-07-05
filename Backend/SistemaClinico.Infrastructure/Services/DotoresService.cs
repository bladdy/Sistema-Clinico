using Microsoft.EntityFrameworkCore;
using SistemaClinico.Core.DTOs.Catalogos;
using SistemaClinico.Core.DTOs.Doctores;
using SistemaClinico.Core.Entities;
using SistemaClinico.Core.Interfaces;
using SistemaClinico.Infrastructure.Data;

namespace SistemaClinico.Infrastructure.Services
{
    public class DotoresService : IDotoresService
    {
        private readonly AppDbContext _context;
        public DotoresService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<DoctorResponseDto> CreateDoctorAsync(DoctorCreateDto doctor)
        {
            var newDoctor = new Doctor          
            {
                Nombre = doctor.Nombre,
                Apellido = doctor.Apellido,
                Especialidades = new List<Especialidad>(), // Assuming you will handle specialties separately
                Correo = doctor.Correo,
                Exequatur = doctor.Exequatur,
                Documento = doctor.Documento, // Assuming Documento is the same as NumeroColegiado
                Telefono = doctor.Telefono
            };
            _context.Doctores.Add(newDoctor);
            await _context.SaveChangesAsync();  

            // Map the entity to the response DTO
            var response = new DoctorResponseDto
            {
                Id = newDoctor.Id,
                Nombre = newDoctor.Nombre,
                Apellido = newDoctor.Apellido,
                Especialidades = newDoctor.Especialidades?.Select(e => new EspecialidadDto
                {
                    Id = e.Id,
                    Nombre = e.Nombre
                }).ToList() ?? new List<EspecialidadDto>(),
                Correo = newDoctor.Correo,
                Exequatur = newDoctor.Exequatur,
                Documento = newDoctor.Documento, // Assuming Documento is the same as NumeroColegiado
                Telefono = newDoctor.Telefono
            };

            return response;
        }

        public async Task<bool> DeleteDoctorAsync(int id)
        {
            var doctor = await _context.Doctores.FindAsync(id);
            if (doctor == null) return false;
            _context.Doctores.Remove(doctor);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<DoctorResponseDto> GetDoctorByIdAsync(int id)
        {
            var doctor = await _context.Doctores.FindAsync(id);
            if (doctor == null) return null;

            var response = new DoctorResponseDto
            {
                Id = doctor.Id,
                Nombre = doctor.Nombre,
                Apellido = doctor.Apellido,
                Especialidades = doctor.Especialidades?.Select(e => new EspecialidadDto
                {
                    Id = e.Id,
                    Nombre = e.Nombre
                }).ToList() ?? new List<EspecialidadDto>(),
                Correo = doctor.Correo,
                Exequatur = doctor.Exequatur,
                Documento = doctor.Documento,
                Telefono = doctor.Telefono
            };

            return response;
        }

        public async Task<IEnumerable<DoctorResponseDto>> GetDoctorsAsync()
        {
            var doctors = await Task.Run(() => _context.Doctores.ToListAsync());
            return doctors.Select(doctor => new DoctorResponseDto
            {
                Id = doctor.Id,
                Nombre = doctor.Nombre,
                Apellido = doctor.Apellido,
                Especialidades = doctor.Especialidades?.Select(e => new EspecialidadDto
                {
                    Id = e.Id,
                    Nombre = e.Nombre
                }).ToList() ?? new List<EspecialidadDto>(),
                Correo = doctor.Correo,
                Exequatur = doctor.Exequatur,
                Documento = doctor.Documento,
                Telefono = doctor.Telefono
            }).ToList();
        }

        public async Task<DoctorResponseDto> UpdateDoctorAsync(int id, DoctorCreateDto doctorDto)
        {
            var doctor = await _context.Doctores.FindAsync(id);
            if (doctor == null) return null;

            doctor.Nombre = doctorDto.Nombre;
            doctor.Apellido = doctorDto.Apellido;
            doctor.Correo = doctorDto.Correo;
            doctor.Exequatur = doctorDto.Exequatur;
            doctor.Documento = doctorDto.Documento;
            doctor.Telefono = doctorDto.Telefono;
            doctor.Especialidades = doctorDto.Especialidades;

            _context.Doctores.Update(doctor);
            await _context.SaveChangesAsync();

            return new DoctorResponseDto
            {
                Id = doctor.Id,
                Nombre = doctor.Nombre,
                Apellido = doctor.Apellido,
                Especialidades = doctor.Especialidades?.Select(e => new EspecialidadDto
                {
                    Id = e.Id,
                    Nombre = e.Nombre
                }).ToList() ?? new List<EspecialidadDto>(),
                Correo = doctor.Correo,
                Exequatur = doctor.Exequatur,
                Documento = doctor.Documento,
                Telefono = doctor.Telefono
            };
        }
    }
}