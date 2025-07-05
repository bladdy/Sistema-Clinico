
using SistemaClinico.Core.DTOs.Doctores;

namespace SistemaClinico.Core.Interfaces
{
    public interface IDotoresService
    {
        Task<IEnumerable<DoctorResponseDto>> GetDoctorsAsync();
        Task<DoctorResponseDto> GetDoctorByIdAsync(int id);
        Task<DoctorResponseDto> CreateDoctorAsync(DoctorCreateDto doctor);
        Task<DoctorResponseDto> UpdateDoctorAsync(int id, DoctorCreateDto doctor);
        Task<bool> DeleteDoctorAsync(int id);
    }
}