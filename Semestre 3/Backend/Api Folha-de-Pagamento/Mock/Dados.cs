using Api_Folha_de_Pagamento.Models;
namespace Api_Folha_de_Pagamento.Mock
{
    public class Dados
    {

        public static List<FuncionarioModel> GerarDados()
        {
            ComissionadoModel comissionado1 = new ComissionadoModel("João", "foto1.jpg", 1200, 10);
            AssalariadoModel assalariado1 = new AssalariadoModel("Maria", "foto2.jpg", 3000, 500);
            HoristaModel horista1 = new HoristaModel("Carlos", "foto3.jpg", 20, 160);


            return new List<FuncionarioModel> { comissionado1, assalariado1, horista1 };

        }

    }
}