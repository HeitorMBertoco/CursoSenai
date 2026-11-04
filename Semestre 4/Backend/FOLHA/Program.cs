using Microsoft.Data.SqlClient;


Console.WriteLine("Circo App");


SqlConnection conexao = new();
conexao.ConnectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=CIRCO;Integrated Security=True;";


string opcao = "";


while (opcao != "9")
{
    Console.WriteLine("1 - Criar Colaborador");
    Console.WriteLine("2 - Criar Atração");
    Console.WriteLine("3 - Excluir Colaborador");
    Console.WriteLine("4 - Excluir Atracao");
    Console.WriteLine("5 - Listar Colaborador");
    Console.WriteLine("6 - Listar Atracao");
    Console.WriteLine("0 - Sair");
    Console.WriteLine(" ");


    Console.WriteLine("Selecione a opção desejada: ");
    opcao = Console.ReadLine() ?? 0;
    

switch (opcao)
    {
        case "1":
            ListarColaboradores();
            break;
        case "2":
            CriarColaborador();
            break;
        case "3":
            AtualizarColaborador();
            break;
        case "4":
            ExcluirColaborador();
            break;
        case "5":
            ListarAtracoes();
            break;
        case "6":
            CriarAtracao();
            break;
        case "7":
            AtualizarAtracao();
            break;
        case "8":
            ExcluirAtracao();
            break;
        case "9":
            break;
        default:
            Console.WriteLine("Opção inválida!");
            Console.WriteLine("Pressione qualquer tecla para prosseguir...");
            Console.ReadKey();
            break;
    }
};






void ListarColaboradores(string nome, int idade)
{
    conexao.Open();


    SqlCommand comando = new();
    comando.Connection = conexao;

    comando.CommandText = "SELECT * FROM COLABORADORES";
    
    comando.ExecuteReader();


    conexao.Close();
};

void ListarAtracao(string nome, int idade)
{
    conexao.Open();


    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "SELECT * FROM ATRACOES"; 
    
    comando.ExecuteReader();


    conexao.Close();
};


void CriarColaborador(string nome, int idade)
{
    conexao.Open();


    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "INSERT INTO COLABORADORES (NOME, IDADE) VALUES (@NOME, @IDADE)";
    comando.Parameters.AddWithValue("@NOME", nome);
    comando.Parameters.AddWithValue("@IDADE", idade);
    comando.ExecuteNonQuery();


    conexao.Close();
};

void ExcluirColaborador(int id)
{
    conexao.Open();


    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "DELETE FROM COLABORADORES WHERE ID = @ID)";
    comando.Parameters.AddWithValue("@ID", id);
    comando.ExecuteNonQuery();


    conexao.Close();
};


void CriarAtracao(string nome, string descricao, int colaboradorId)
{
    conexao.Open();


    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "INSERT INTO ATRACOES (NOME, DESCRICAO_LONGA, COLABORADOR_ID) VALUES (@NOME, @DESCRICAO, @COLABORADOR_ID)";
    comando.Parameters.AddWithValue("@NOME", nome);
    comando.Parameters.AddWithValue("@DESCRICAO", descricao);
    comando.Parameters.AddWithValue("@COLABORADOR_ID", colaboradorId);
    comando.ExecuteNonQuery();


    conexao.Close();
};


void ExcluirAtracao(int id)
{
    conexao.Open();


    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "DELETE FROM ATRACOES WHERE ID = @ID)";
    comando.Parameters.AddWithValue("@ID", id);
    comando.ExecuteNonQuery();


    conexao.Close();
};