
namespace SistemaClinico.Core.DTOs.Doctores
{
    public class DoctorCreateDto
    {
        public string Nombre { get; set; } = string.Empty;
        public string Apellido { get; set; } = string.Empty;
        public string Documento { get; set; } = string.Empty;
        public string Telefono { get; set; } = string.Empty;
        public ICollection<DoctorEspecialidadDto> Especialidades { get; set; } = new List<DoctorEspecialidadDto>();
        public string Correo { get; set; } = string.Empty;
        public string Exequatur { get; set; } = string.Empty;
        
    }
}