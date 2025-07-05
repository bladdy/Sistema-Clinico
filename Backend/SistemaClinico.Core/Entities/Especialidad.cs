using System.Text.Json.Serialization;

namespace SistemaClinico.Core.Entities
{
    public class Especialidad
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;

        public ICollection<Doctor> Doctores { get; set; } = new List<Doctor>();

        public ICollection<HistoriaClinica> HistoriasClinicas { get; set; } = new List<HistoriaClinica>();
        //public ICollection<Consulta> Consultas { get; set; } = new List<Consulta>();
                
    }
}