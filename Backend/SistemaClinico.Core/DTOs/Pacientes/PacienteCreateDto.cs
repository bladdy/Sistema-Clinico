using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SistemaClinico.Core.Entities;

namespace SistemaClinico.Core.DTOs.Pacientes
{
    public class PacienteCreateDto
    {
        public string Nombre { get; set; } = string.Empty;
        public string Documento { get; set; } = string.Empty;
        public string Telefono { get; set; } = string.Empty;
        public string Correo { get; set; } = string.Empty;
        public DateTime FechaNacimiento { get; set; }
        public Genero Genero { get; set; } = Genero.Otro;
    }
}
        