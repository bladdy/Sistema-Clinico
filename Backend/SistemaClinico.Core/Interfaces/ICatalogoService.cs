using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SistemaClinico.Core.Entities;

namespace SistemaClinico.Core.Interfaces
{
    public interface ICatalogoService
    {

        Task<IEnumerable<Diagnostico>> GetDiagnosticosAsync();
        Task<IEnumerable<MotivoConsulta>> GetMotivosConsultaAsync();
        Task<IEnumerable<Especialidad>> GetEspecialidadesAsync();
        Task<IEnumerable<Modulo>> GetModulosAsync();

        Task<Diagnostico> GetDiagnosticoByIdAsync(int id);
        Task<MotivoConsulta> GetMotivoConsultaByIdAsync(int id);
        Task<Especialidad> GetEspecialidadByIdAsync(int id);
        Task<Modulo> GetModuloByIdAsync(int id);

        Task<Diagnostico> CreateDiagnosticoAsync(Diagnostico diagnostico);
        Task<MotivoConsulta> CreateMotivoConsultaAsync(MotivoConsulta motivoConsulta);
        Task<Especialidad> CreateEspecialidadAsync(Especialidad especialidad);
        Task<Modulo> CreateModuloAsync(Modulo modulo);
        Task<Diagnostico> UpdateDiagnosticoAsync(Diagnostico diagnostico);
        Task<MotivoConsulta> UpdateMotivoConsultaAsync(MotivoConsulta motivoConsulta);
        Task<Especialidad> UpdateEspecialidadAsync(Especialidad especialidad);
        Task<Modulo> UpdateModuloAsync(Modulo modulo);
        Task<bool> DeleteDiagnosticoAsync(int id);
        Task<bool> DeleteMotivoConsultaAsync(int id);
        Task<bool> DeleteEspecialidadAsync(int id);
        Task<bool> DeleteModuloAsync(int id);
    }
}