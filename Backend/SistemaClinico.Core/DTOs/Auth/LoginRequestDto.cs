using System.ComponentModel.DataAnnotations;

namespace SistemaClinico.Core.DTOs.Auth
{
    public class LoginRequestDto
    {
        [Required]
        public string Correo { get; set; } = string.Empty;

        [Required]
        public string Clave { get; set; } = string.Empty;
    }
}
