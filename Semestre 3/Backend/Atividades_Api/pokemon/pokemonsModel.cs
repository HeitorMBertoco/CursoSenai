namespace Atividades_Api.pokemon
{
    public class pokemonsModel
    {
        public int NumeroDex { get; set; }
        public string Nome { get; set; }
        public string Tipo { get; set; }
        public string Evolucao { get; set; }
        public string ImageUrl { get; set; }

        public pokemonsModel(int numeroDex, string nome, string tipo, string evolucao, string imageUrl)
        {
            NumeroDex = numeroDex;
            Nome = nome;
            Tipo = tipo;
            Evolucao = evolucao;
            ImageUrl = imageUrl;
        }
    }
}