
namespace SistemaClinico.Core.Entities
{
    public class Consulta
    {
        public int Id { get; set; }
        public int MotivoConsultaId { get; set; }
        public MotivoConsulta MotivoConsulta { get; set; }
        public int DiagnosticoId { get; set; }
        public Diagnostico Diagnostico { get; set; }
        public int EspecialidadId { get; set; }
        public Especialidad Especialidad { get; set; }
        public string Observaciones{ get; set; }
        
    }
}