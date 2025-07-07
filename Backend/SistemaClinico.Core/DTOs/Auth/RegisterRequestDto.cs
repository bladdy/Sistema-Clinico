namespace SistemaClinico.Core.DTOs.Auth;

public class RegisterRequestDto
{
    public string Nombre { get; set; }
    public string Correo { get; set; }
    public string Clave { get; set; }

    public int RolId { get; set; }

    // Datos opcionales si el usuario es Doctor
    public bool EsDoctor { get; set; } = false;
    public string Apellido { get; set; } = string.Empty;
    public string Documento { get; set; } = string.Empty;
    public string Telefono { get; set; } = string.Empty;
    public string Exequatur { get; set; } = string.Empty;
    public List<int> EspecialidadIds { get; set; } = new();
}
