using Microsoft.EntityFrameworkCore;
using SistemaClinico.Core.Entities;
using SistemaClinico.Core.Interfaces;
using SistemaClinico.Infrastructure.Data;

namespace SistemaClinico.Infrastructure.Services
{
    public class CatalogoService : ICatalogoService
    {
        private readonly AppDbContext _context;

        public CatalogoService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Diagnostico> CreateDiagnosticoAsync(Diagnostico diagnostico)
        {
            var newDiagnostico = new Diagnostico
            {
                Nombre = diagnostico.Nombre
            };
            _context.Diagnosticos.Add(newDiagnostico);
            await _context.SaveChangesAsync();
            return newDiagnostico;
        }

        public async Task<Especialidad> CreateEspecialidadAsync(Especialidad especialidad)
        {
            var newEspecialidad = new Especialidad
            {
                Nombre = especialidad.Nombre
            };
            _context.Especialidades.Add(newEspecialidad);
            await _context.SaveChangesAsync();
            return newEspecialidad;
        }

        public async Task<Modulo> CreateModuloAsync(Modulo modulo)
        {
            var newModulo = new Modulo
            {
                Nombre = modulo.Nombre
            };
            _context.Modulos.Add(newModulo);
            await _context.SaveChangesAsync();
            return newModulo;
        }

        public async Task<MotivoConsulta> CreateMotivoConsultaAsync(MotivoConsulta motivoConsulta)
        {
            var newMotivoConsulta = new MotivoConsulta
            {
                Nombre = motivoConsulta.Nombre
            };
            _context.MotivosConsulta.Add(newMotivoConsulta);
            await _context.SaveChangesAsync();
            return newMotivoConsulta;
        }

        public async Task<bool> DeleteDiagnosticoAsync(int id)
        {
            var diagnostico = await _context.Diagnosticos.FindAsync(id);
            if (diagnostico == null) return false;

            _context.Diagnosticos.Remove(diagnostico);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteEspecialidadAsync(int id)
        {
            var especialidad = await _context.Especialidades.FindAsync(id);
            if (especialidad == null) return false;

            _context.Especialidades.Remove(especialidad);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteModuloAsync(int id)
        {
            var modulo = await _context.Modulos.FindAsync(id);
            if (modulo == null) return false;

            _context.Modulos.Remove(modulo);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteMotivoConsultaAsync(int id)
        {
            var motivoConsulta = await _context.MotivosConsulta.FindAsync(id);
            if (motivoConsulta == null) return false;

            _context.MotivosConsulta.Remove(motivoConsulta);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<Diagnostico> GetDiagnosticoByIdAsync(int id)
        {
            return await _context.Diagnosticos.FindAsync(id);
        }

        public async Task<IEnumerable<Diagnostico>> GetDiagnosticosAsync()
        {
            return await _context.Diagnosticos.ToListAsync();
        }

        public async Task<Especialidad> GetEspecialidadByIdAsync(int id)
        {
            return await _context.Especialidades.FindAsync(id);
        }

        public async Task<IEnumerable<Especialidad>> GetEspecialidadesAsync()
        {
            return await _context.Especialidades.ToListAsync();
        }

        public async Task<Modulo> GetModuloByIdAsync(int id)
        {
            return await _context.Modulos.FindAsync(id);
        }

        public async Task<IEnumerable<Modulo>> GetModulosAsync()
        {
            return await _context.Modulos.ToListAsync();
        }

        public async Task<MotivoConsulta> GetMotivoConsultaByIdAsync(int id)
        {
            return await _context.MotivosConsulta.FindAsync(id);
        }

        public async Task<IEnumerable<MotivoConsulta>> GetMotivosConsultaAsync()
        {
            return await _context.MotivosConsulta.ToListAsync();
        }

        public async Task<Diagnostico> UpdateDiagnosticoAsync(Diagnostico diagnostico)
        {
            var existingDiagnostico = await _context.Diagnosticos.FindAsync(diagnostico.Id);
            if (existingDiagnostico == null) return null;

            existingDiagnostico.Nombre = diagnostico.Nombre;

            await _context.SaveChangesAsync();
            return existingDiagnostico;
        }

        public async Task<Especialidad> UpdateEspecialidadAsync(Especialidad especialidad)
        {
            var existingEspecialidad = await _context.Especialidades.FindAsync(especialidad.Id);
            if (existingEspecialidad == null) return null;

            existingEspecialidad.Nombre = especialidad.Nombre;

            await _context.SaveChangesAsync();
            return existingEspecialidad;
        }

        public async Task<Modulo> UpdateModuloAsync(Modulo modulo)
        {
            var existingModulo = await _context.Modulos.FindAsync(modulo.Id);
            if (existingModulo == null) return null;

            existingModulo.Nombre = modulo.Nombre;

            await _context.SaveChangesAsync();
            return existingModulo;
        }

        public async Task<MotivoConsulta> UpdateMotivoConsultaAsync(MotivoConsulta motivoConsulta)
        {
            var existingMotivoConsulta = await _context.MotivosConsulta.FindAsync(motivoConsulta.Id);
            if (existingMotivoConsulta == null) return null;

            existingMotivoConsulta.Nombre = motivoConsulta.Nombre;

            await _context.SaveChangesAsync();
            return existingMotivoConsulta;
        }
    }
}