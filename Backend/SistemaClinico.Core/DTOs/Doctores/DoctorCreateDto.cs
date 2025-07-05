using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SistemaClinico.Core.Entities;

namespace SistemaClinico.Core.DTOs.Doctores
{
    public class DoctorCreateDto
    {
        public string Nombre { get; set; } = string.Empty;
        public string Apellido { get; set; } = string.Empty;
        public string Documento { get; set; } = string.Empty;
        public string Telefono { get; set; } = string.Empty;
        public ICollection<Especialidad> Especialidades { get; set; } = new List<Especialidad>();
        public string Correo { get; set; } = string.Empty;
        public string Exequatur { get; set; } = string.Empty;
    }
}