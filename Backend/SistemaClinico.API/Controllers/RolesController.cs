using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SistemaClinico.Core.DTOs.Auth;
using SistemaClinico.Core.Interfaces;

namespace SistemaClinico.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RolesController : ControllerBase
    {
        private readonly IRolService _rolService;

        public RolesController(IRolService rolService)
        {
            _rolService = rolService;
        }

        [HttpPost("asignar-permisos")]
        public async Task<IActionResult> AsignarPermisos([FromBody] AsignarPermisosRolDto dto)
        {
            await _rolService.AsignarPermisosAsync(dto);
            return Ok(new { message = "Permisos asignados correctamente." });
        }
        [HttpPut("actualizar-permisos")]
        public async Task<IActionResult> ActualizarPermisos([FromBody] ActualizarPermisosRolDto dto)
        {
            try
            {
                await _rolService.ActualizarPermisosRolAsync(dto);
                return Ok(new { message = "Permisos actualizados correctamente." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var roles = await _rolService.GetAllAsync();
            return Ok(roles);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var rol = await _rolService.GetByIdAsync(id);
            return Ok(rol);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] RolCreateDto dto)
        {
            var created = await _rolService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] RolUpdateDto dto)
        {
            if (id != dto.Id) return BadRequest("Id en URL y cuerpo no coinciden");
            await _rolService.UpdateAsync(dto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _rolService.DeleteAsync(id);
            return NoContent();
        }
    }
}