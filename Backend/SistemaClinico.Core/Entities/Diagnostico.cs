
namespace SistemaClinico.Core.Entities
{
    public class Diagnostico
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public ICollection<HistoriaClinica> HistoriasClinicas { get; set; } = new List<HistoriaClinica>();
        //public ICollection<Consulta> Consultas { get; set; } = new List<Consulta>();
    }
}