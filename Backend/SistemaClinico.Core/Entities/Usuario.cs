
namespace SistemaClinico.Core.Entities
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public string Correo { get; set; } = string.Empty;
        public string ClaveHash { get; set; } = string.Empty;
        public int RolId { get; set; }
        public Rol Rol { get; set; }
        public Doctor Doctor { get; set; } // Relación inversa (uno a uno)
        public DateTime FechaCreacion { get; set; }
        public bool Status { get; set; } = true;
    }
}