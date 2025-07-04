namespace SistemaClinico.Core.DTOs.Auth;

public class RegisterRequestDto
{
    public string Nombre { get; set; } = string.Empty;
    public string Correo { get; set; } = string.Empty;
    public string Clave { get; set; } = string.Empty;
    public string Rol { get; set; } = "Usuario";
}