using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.DTOs.Auth
{
    public class UpdateUsuarioRequestDto
    {
        public string Nombre { get; set; }
        public string Correo { get; set; }
        public int RolId { get; set; }
    }
}