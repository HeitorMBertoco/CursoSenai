namespace Atividades_Api.pokemon
{
    public static class PokemonMock
    {
        public static List<pokemonsModel> GetPokemons()
        {
            List<pokemonsModel> pokemons = [
                new(1, "Bulbasaur", "Grass/Poison", "Ivysaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/1.png"),
                new(2, "Ivysaur", "Grass/Poison", "Venusaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/2.png"),
                new(3, "Venusaur", "Grass/Poison", "None", "https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/3.png"),
                new(4, "Charmander", "Fire", "Charmeleon", "https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/4.png"),
                new(5, "Charmeleon", "Fire", "Charizard", "https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/5.png"),
                new(6, "Charizard", "Fire/Flying", "None", "https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/6.png"),
                new(7, "Squirtle", "Water", "Wartortle", "https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/7.png"),
                new(8, "Wartortle", "Water", "Blastoise", "https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/8.png"),
                new(9, "Blastoise", "Water", "None", "https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/official-artwork/9.png")
            ];
            return pokemons;
        }
    }
}
