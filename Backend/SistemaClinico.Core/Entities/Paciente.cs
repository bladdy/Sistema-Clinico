
namespace SistemaClinico.Core.Entities
{
    public class Paciente
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public string Documento { get; set; } = string.Empty; // DNI / CURP
        public string Telefono { get; set; } = string.Empty;
        public string Correo { get; set; } = string.Empty;
        public DateTime FechaNacimiento { get; set; }
        public Genero Genero { get; set; } = Genero.Otro; // Valor por defecto
        public ICollection<HistoriaClinica> HistoriasClinicas { get; set; } = new List<HistoriaClinica>();

        // Relaciones
        /*public ICollection<Cita> Citas { get; set; } = new List<Cita>();
        public ICollection<Receta> Recetas { get; set; } = new List<Receta>();
        public ICollection<Caso> Casos { get; set; } = new List<Caso>();*/
        // Constructor
        public Paciente() { }
        public Paciente(string nombre, string documento, string telefono, string correo, DateTime fechaNacimiento, string genero)
        {
            Nombre = nombre;
            Documento = documento;
            Telefono = telefono;
            Correo = correo;
            FechaNacimiento = fechaNacimiento;
            Genero = genero switch
            {
                "Masculino" => Genero.Masculino,
                "Femenino" => Genero.Femenino,
                _ => Genero.Otro
            };
        }
    }
    public enum Genero
    {
        Masculino,
        Femenino,
        Otro
    }   
}