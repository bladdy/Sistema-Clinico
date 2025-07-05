
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaClinico.Core.Entities;
using SistemaClinico.Core.Interfaces;
using SistemaClinico.Infrastructure.Data;

namespace SistemaClinico.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CatalogosController : ControllerBase
    {
        private readonly ICatalogoService _catalogoService;

        public CatalogosController(ICatalogoService catalogoService)
        {
            _catalogoService = catalogoService;
        }

        [HttpGet("diagnosticos")]
        public async Task<IActionResult> GetDiagnosticos()
        {
            var lista = await _catalogoService.GetDiagnosticosAsync();
            return Ok(lista);
        }

        [HttpGet("motivos-consulta")]
        public async Task<IActionResult> GetMotivosConsulta()
        {
            var lista = await _catalogoService.GetMotivosConsultaAsync();
            return Ok(lista);
        }

        [HttpGet("especialidades")]
        public async Task<IActionResult> GetEspecialidades()
        {
            var lista = await _catalogoService.GetEspecialidadesAsync();
            return Ok(lista);
        }

        [HttpGet("modulos")]
        public async Task<IActionResult> GetModulos()
        {
            var lista = await _catalogoService.GetModulosAsync();
            return Ok(lista);
        }
        [HttpPost("diagnosticos")]
        public async Task<IActionResult> CreateDiagnostico([FromBody] Diagnostico diagnostico)
        {
            if (diagnostico == null) return BadRequest();
            var nuevoDiagnostico = await _catalogoService.CreateDiagnosticoAsync(diagnostico);
            return Ok($"Diagnóstico creado correctamente: {nuevoDiagnostico.Nombre}");
        }
        [HttpPost("motivos-consulta")]
        public async Task<IActionResult> CreateMotivoConsulta([FromBody] MotivoConsulta motivoConsulta)
        {
            if (motivoConsulta == null) return BadRequest();
            var nuevoMotivoConsulta = await _catalogoService.CreateMotivoConsultaAsync(motivoConsulta);
            return Ok($"Motivo de consulta creado correctamente: {nuevoMotivoConsulta.Nombre}");
        }
        [HttpPost("especialidades")]
        public async Task<IActionResult> CreateEspecialidad([FromBody] Especialidad especialidad)
        {
            if (especialidad == null) return BadRequest();
            var nuevaEspecialidad = await _catalogoService.CreateEspecialidadAsync(especialidad);
            return Ok($"Especialidad creada correctamente: {nuevaEspecialidad.Nombre}");
        }
        [HttpPost("modulos")]
        public async Task<IActionResult> CreateModulo([FromBody] Modulo modulo)
        {
            if (modulo == null) return BadRequest();
            var nuevoModulo = await _catalogoService.CreateModuloAsync(modulo);
            return Ok($"Módulo creado correctamente: {nuevoModulo.Nombre}");
        }
        [HttpPut("diagnosticos")]
        public async Task<IActionResult> UpdateDiagnostico([FromBody] Diagnostico diagnostico)
        {
            if (diagnostico == null) return BadRequest();
            var actualizado = await _catalogoService.UpdateDiagnosticoAsync(diagnostico);
            if (actualizado == null) return NotFound();
            return Ok($"Diagnóstico actualizado correctamente: {actualizado.Nombre}");
        }
        [HttpPut("motivos-consulta")]
        public async Task<IActionResult> UpdateMotivoConsulta([FromBody] MotivoConsulta motivoConsulta)
        {
            if (motivoConsulta == null) return BadRequest();
            var actualizado = await _catalogoService.UpdateMotivoConsultaAsync(motivoConsulta);
            if (actualizado == null) return NotFound();
            return Ok($"Motivo de consulta actualizado correctamente: {actualizado.Nombre}");
        }
        [HttpPut("especialidades")]
        public async Task<IActionResult> UpdateEspecialidad([FromBody] Especialidad especialidad)
        {
            if (especialidad == null) return BadRequest();
            var actualizado = await _catalogoService.UpdateEspecialidadAsync(especialidad);
            if (actualizado == null) return NotFound();
            return Ok($"Especialidad actualizada correctamente: {actualizado.Nombre}");
        }
    }
}