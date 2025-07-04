using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.Entities
{
    public class RolPermisoModulo
    {
        public int RolId { get; set; }
        public Rol Rol { get; set; } = null!;
        public int PermisoId { get; set; }
        public Permiso Permiso { get; set; } = null!;
        public int ModuloId { get; set; }
        public Modulo Modulo { get; set; } = null!;
    }
}