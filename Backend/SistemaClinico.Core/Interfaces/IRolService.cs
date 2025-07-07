
using SistemaClinico.Core.DTOs.Auth;

namespace SistemaClinico.Core.Interfaces
{
    public interface IRolService
    {
        Task AsignarPermisosAsync(AsignarPermisosRolDto dto);
        Task ActualizarPermisosRolAsync(ActualizarPermisosRolDto dto);

        Task<IEnumerable<RolResponseDto>> GetAllAsync();
        Task<RolResponseDto> GetByIdAsync(int id);
        Task<RolResponseDto> CreateAsync(RolCreateDto dto);
        Task UpdateAsync(RolUpdateDto dto);
        Task DeleteAsync(int id);
    }
}