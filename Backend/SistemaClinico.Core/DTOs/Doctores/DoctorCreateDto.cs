
namespace SistemaClinico.Core.DTOs.Doctores
{
    public class DoctorCreateDto
    {
        public string Nombre { get; set; } = string.Empty;
        public string Apellido { get; set; } = string.Empty;
        public string Documento { get; set; } = string.Empty;
        public string Telefono { get; set; } = string.Empty;
        public string Correo { get; set; } = string.Empty;
        public string Exequatur { get; set; } = string.Empty;

        public List<int> EspecialidadIds { get; set; } = new();

        // Opción 1: Asociar usuario ya existente
        public int? UsuarioId { get; set; }

        // Opción 2: Crear usuario nuevo
        public string UsuarioNombre { get; set; }
        public string UsuarioCorreo { get; set; }
        public string Clave { get; set; }
        public int? RolId { get; set; } // Rol del nuevo usuario
    }
}