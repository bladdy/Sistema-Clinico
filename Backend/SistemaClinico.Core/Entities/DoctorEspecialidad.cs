using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.Entities
{
    public class DoctorEspecialidad
    {
        public int id { get; set; }
        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; } = null!;
        
        public int EspecialidadId { get; set; }
        public Especialidad Especialidad { get; set; } = null!;
    }
}