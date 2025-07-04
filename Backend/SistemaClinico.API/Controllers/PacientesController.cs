using Microsoft.AspNetCore.Mvc;
using SistemaClinico.Core.DTOs.Pacientes;
using SistemaClinico.Core.Interfaces;

namespace SistemaClinico.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PacientesController : ControllerBase
{
    private readonly IPacienteService _pacienteService;

    public PacientesController(IPacienteService pacienteService)
    {
        _pacienteService = pacienteService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
        => Ok(await _pacienteService.GetAllAsync());

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var paciente = await _pacienteService.GetByIdAsync(id);
        return paciente == null ? NotFound() : Ok(paciente);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] PacienteCreateDto dto)
    {
        var result = await _pacienteService.CreateAsync(dto);
        return CreatedAtAction(nameof(Get), new { id = result.Id }, result);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] PacienteUpdateDto dto)
    {
        if (id != dto.Id) return BadRequest("ID en URL y DTO no coinciden.");
        var updated = await _pacienteService.UpdateAsync(dto);
        return updated ? NoContent() : NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _pacienteService.DeleteAsync(id);
        return deleted ? NoContent() : NotFound();
    }
}
