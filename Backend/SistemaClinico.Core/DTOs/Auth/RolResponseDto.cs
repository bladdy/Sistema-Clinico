using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.DTOs.Auth
{
    public class RolResponseDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
    }
}