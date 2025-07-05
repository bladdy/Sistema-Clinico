using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.DTOs.HistorialClinica
{
    public class HistoriaClinicaRequestDto
    {
        public int PacienteId { get; set; }
        public int DoctorId { get; set; }
        public DateTime FechaConsulta { get; set; }
    }
}