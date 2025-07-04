using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SistemaClinico.Core.Interfaces;

namespace SistemaClinico.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class PacientesController : ControllerBase
    {
        private readonly IPermisoService _permisoService;

        public PacientesController(IPermisoService permisoService)
        {
            _permisoService = permisoService;
        }
        [HttpPost]
        public async Task<IActionResult> CrearPaciente()
        {
            int usuarioId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            bool autorizado = await _permisoService.TienePermisoAsync(usuarioId, "Pacientes", "Crear");
            if (!autorizado)
                return Forbid("No tiene permiso para crear pacientes.");

            // Lógica para crear paciente
            return Ok();
        }
    }
}