using SistemaClinico.Core.DTOs.Pacientes;
using SistemaClinico.Core.Entities;

namespace SistemaClinico.Core.Interfaces
{
    public interface IPacienteService
    {
        Task<List<PacienteResponseDto>> GetAllAsync();
        Task<PacienteResponseDto?> GetByIdAsync(int id);
        Task<PacienteResponseDto> CreateAsync(PacienteCreateDto dto);
        Task<bool> UpdateAsync(PacienteUpdateDto dto);
        Task<bool> DeleteAsync(int id);
    }
}