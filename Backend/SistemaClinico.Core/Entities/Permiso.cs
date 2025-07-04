using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.Entities
{
    public class Permiso
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty; // Crear, Leer, Editar, Eliminar, PermitirTodo
        public ICollection<RolPermisoModulo> RolesModulos { get; set; } = new List<RolPermisoModulo>();
    }
}