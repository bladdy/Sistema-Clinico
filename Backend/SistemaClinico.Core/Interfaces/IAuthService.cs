using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

    }
}