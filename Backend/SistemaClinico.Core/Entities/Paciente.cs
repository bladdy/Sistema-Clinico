using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.Entities
{
    public class Paciente
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public string Documento { get; set; } = string.Empty;
        public DateTime FechaNacimiento { get; set; }
    }
}