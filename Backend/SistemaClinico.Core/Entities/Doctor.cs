using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.Entities
{
    public class Doctor
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public string Apellido { get; set; } = string.Empty;
        public string Documento { get; set; } = string.Empty;
        public string Telefono { get; set; } = string.Empty;
        public string Correo { get; set; } = string.Empty;
        public string Exequatur { get; set; } = string.Empty;
        public ICollection<DoctorEspecialidad> DoctorEspecialidades { get; set; } = new List<DoctorEspecialidad>();
        public ICollection<HistoriaClinica> HistoriasClinicas { get; set; } = new List<HistoriaClinica>();
        //public int UsuarioId { get; set; }
        //public Usuario Usuario { get; set; }
        
    }    
}