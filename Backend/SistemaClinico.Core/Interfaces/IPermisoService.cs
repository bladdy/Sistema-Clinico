
namespace SistemaClinico.Core.Interfaces
{
    public interface IPermisoService
    {
        Task<bool> TienePermisoAsync(int usuarioId, string moduloNombre, string permisoNombre);
    }
}