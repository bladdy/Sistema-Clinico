using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.DTOs.Auth
{
    public class ActualizarPermisosRolDto
    {
        public int RolId { get; set; }

        public List<PermisoModuloDto> PermisosPorModulo { get; set; } = new();
    }
}