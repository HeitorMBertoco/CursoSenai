
using Microsoft.AspNetCore.Mvc;

namespace Atividades_Api.pokemon
{
    [ApiController]
    [Route("[controller]")]
    public class pokemonsController : ControllerBase
    {
        [HttpGet("/pokemon")]
        public List<pokemonsModel> Get()
        {
            return PokemonMock.GetPokemons();
        }
    }
}