using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SistemaClinico.Core.DTOs.Doctores;
using SistemaClinico.Core.Interfaces;
using SistemaClinico.Core.Response;

namespace SistemaClinico.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DoctoresController : ControllerBase
    {
        private readonly IDotoresService _doctoresService;
        public DoctoresController(IDotoresService doctoresService)
        {
            _doctoresService = doctoresService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var doctores = await _doctoresService.GetDoctorsAsync();
            return Ok(new ApiResponse<IEnumerable<DoctorResponseDto>>(doctores, "Listado de doctores"));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var doctor = await _doctoresService.GetDoctorByIdAsync(id);
            if (doctor == null)
                return NotFound(new ApiResponse<object>(404, "Doctor no encontrado"));

            return Ok(new ApiResponse<DoctorResponseDto>(doctor, "Doctor obtenido"));
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] DoctorCreateDto dto)
        {
            var created = await _doctoresService.CreateDoctorAsync(dto);
            return Ok(new ApiResponse<DoctorResponseDto>(created, "Doctor creado correctamente"));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] DoctorCreateDto dto)
        {
            var updated = await _doctoresService.UpdateDoctorAsync(id, dto);
            if (updated == null)
                return NotFound(new ApiResponse<object>(404, "Doctor no encontrado"));

            return Ok(new ApiResponse<DoctorResponseDto>(updated, "Doctor actualizado correctamente"));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var eliminado = await _doctoresService.DeleteDoctorAsync(id);
            if (!eliminado)
                return NotFound(new ApiResponse<object>(404, "Doctor no encontrado"));

            return Ok(new ApiResponse<object>(200, "Doctor eliminado correctamente"));
        }
    }
}