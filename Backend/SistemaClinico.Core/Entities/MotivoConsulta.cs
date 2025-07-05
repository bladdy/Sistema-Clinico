using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaClinico.Core.Entities
{
    public class MotivoConsulta
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public ICollection<HistoriaClinica> HistoriasClinicas { get; set; } = new List<HistoriaClinica>();
        //public ICollection<Consulta> Consultas { get; set; } = new List<Consulta>();
    }
}