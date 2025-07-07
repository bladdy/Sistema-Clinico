
using SistemaClinico.Core.DTOs.Auth;

namespace SistemaClinico.Core.Interfaces
{
    public interface IAuthService
    {
        Task<string> LoginAsync(LoginRequestDto dto);
        Task<bool> RegisterAsync(RegisterRequestDto dto);
        Task<string> GenerateTokenByUserIdAsync(int userId);
        Task<bool> ValidateTokenAsync(string token);
        Task<IEnumerable<UsuarioDto>> GetUsuariosAsync();

        Task<bool> UpdateUsuarioAsync(int id, UpdateUsuarioRequestDto dto);
        Task<bool> CambiarEstadoUsuarioAsync(int id, bool estado);

    }
}