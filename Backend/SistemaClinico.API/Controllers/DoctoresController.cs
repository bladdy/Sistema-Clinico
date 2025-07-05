using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SistemaClinico.Core.DTOs.Doctores;
using SistemaClinico.Core.Interfaces;

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
        public async Task<IActionResult> GetDoctorsAsync()
        {
            var doctores = await _doctoresService.GetDoctorsAsync();
            return Ok(doctores);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDoctorByIdAsync(int id)
        {
            var doctor = await _doctoresService.GetDoctorByIdAsync(id);
            if (doctor == null)
            {
                return NotFound();
            }
            return Ok(doctor);
        }
        [HttpPost]
        public async Task<IActionResult> CreateDoctorAsync([FromBody] DoctorCreateDto doctor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdDoctor = await _doctoresService.CreateDoctorAsync(doctor);
            return CreatedAtAction(nameof(GetDoctorByIdAsync), new { id = createdDoctor.Id }, createdDoctor);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDoctorAsync(int id, [FromBody] DoctorCreateDto doctor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var updatedDoctor = await _doctoresService.UpdateDoctorAsync(id, doctor);
            if (updatedDoctor == null)
            {
                return NotFound();
            }

            return Ok(updatedDoctor);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoctorAsync(int id)
        {
            var deleted = await _doctoresService.DeleteDoctorAsync(id);
            if (!deleted)
            {
                return NotFound();
            }
            return NoContent();
        }

    }
}