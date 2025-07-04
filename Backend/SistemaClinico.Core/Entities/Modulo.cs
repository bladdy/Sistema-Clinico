using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.Entities
{
    public class Modulo
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public ICollection<RolPermisoModulo> PermisosAsignados { get; set; } = new List<RolPermisoModulo>();
    }
}