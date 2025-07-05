using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.Entities
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public string Correo { get; set; } = string.Empty;
        public string ClaveHash { get; set; } = string.Empty;

        // Relación con Rol
        public int RolId { get; set; }
        public Rol Rol { get; set; }
    }
}