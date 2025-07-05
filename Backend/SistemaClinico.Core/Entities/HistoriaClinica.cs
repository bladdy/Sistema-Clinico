
namespace SistemaClinico.Core.Entities
{
    public class HistoriaClinica
    {
        public int Id { get; set; }

        public int PacienteId { get; set; }
        public Paciente Paciente { get; set; }

        public int MotivoConsultaId { get; set; }
        public MotivoConsulta MotivoConsulta { get; set; }
        public int EspecialidadId { get; set; }
        public Especialidad Especialidad { get; set; }
        public int DiagnosticoId { get; set; }
        public Diagnostico Diagnostico { get; set; }
        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }
        public int UsuarioCreatedId { get; set; }
        public Usuario UsuarioCreated { get; set; }

        public int UsuarioModifiedId { get; set; }
        public Usuario UsuarioModified { get; set; }

        public string Tratamiento { get; set; } = string.Empty;
        public DateTime FechaRegistro { get; set; } = DateTime.UtcNow;
        
        
        //public ICollection<Consulta> Consultas { get; set; } = new List<Consulta>();
    }
}