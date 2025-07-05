
using SistemaClinico.Core.DTOs.Catalogos;

namespace SistemaClinico.Core.DTOs.Doctores
{
    public class DoctorResponseDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public string Apellido { get; set; } = string.Empty;
        public string Documento { get; set; } = string.Empty;
        public ICollection<EspecialidadDto> Especialidades { get; set; } = new List<EspecialidadDto>();
        public string Telefono { get; set; } = string.Empty;
        public string Correo { get; set; } = string.Empty;
        public string Exequatur { get; set; } = string.Empty;
    }
}