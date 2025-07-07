
using SistemaClinico.Core.DTOs.Catalogos;

namespace SistemaClinico.Core.DTOs.Doctores
{
    public class DoctorResponseDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Documento { get; set; }
        public string Telefono { get; set; }
        public string Correo { get; set; }
        public string Exequatur { get; set; }
        public List<EspecialidadDto> Especialidades { get; set; } = new();
    }
}