using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SistemaClinico.Core.DTOs.Auth;
using SistemaClinico.Core.Interfaces;

namespace SistemaClinico.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequestDto dto)
    {
        try
        {
            var token = await _authService.LoginAsync(dto);
            return Ok(new { token });
        }
        catch
        {
            return Unauthorized(new { message = "Correo o contraseña incorrectos." });
        }
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequestDto dto)
    {
        var result = await _authService.RegisterAsync(dto);
        if (!result)
            return BadRequest(new { message = "El correo ya está registrado o el rol no existe." });

        return Ok(new { message = "Usuario creado exitosamente." });
    }
    [Authorize]
    [HttpGet("current")]
    public async Task<IActionResult> GetCurrentUser()
    {
        try
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userIdClaim) || !int.TryParse(userIdClaim, out int userId))
                return Unauthorized();

            var token = await _authService.GenerateTokenByUserIdAsync(userId);

            return Ok(new { token });
        }
        catch
        {
            return Unauthorized();
        }
    }
    //[Authorize]
    [HttpGet("users")]
    public async Task<IActionResult> GetUsuarios()
    {
        var usuarios = await _authService.GetUsuariosAsync();
        return Ok(usuarios);
    }
}
