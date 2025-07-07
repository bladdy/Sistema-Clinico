using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.DTOs.Auth
{
    public class PermisoModuloDto
    {
        public int ModuloId { get; set; }
        public List<int> PermisoIds { get; set; } = new(); // Ids: Crear=1, Editar=2, Eliminar=3, Ver=4, PermitirTodo=5...
    }
}