import { useEffect, useState } from "react";
import { CardHeader, CardMedia, Paper, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./App.css";

interface Funcionario {
  nome: string;
  foto: string;
  pagamento: number;
  tipo: string;
}

function App() {
  const [apiFuncionario, setApiFuncionario] = useState<Funcionario[] | null>(
    null,
  );
  const [Pagina, setPagina] = useState(0);

  const ItensMaximoPagina = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await fetch("http://localhost:5055/funcionarios");
        const data1 = await res1.json();
        setApiFuncionario(data1);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  const card = (title: string, role: string, desc: string, numFoto: string) => (
    <div className="containerCard" key={title}>
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: "#c2c2c2",
          borderRadius: 1.5,
        }}
      >
        <Paper elevation={1}>
          <CardHeader title={title} />
        </Paper>

        <CardContent sx={{ margin: -1, backgroundColor: "#f2f2f2" }}>
          {role}
        </CardContent>

        <CardMedia
          sx={{ height: 140 }}
          image={`https://randomuser.me/api/portraits/men/${numFoto}.jpg`}
        />

        <Paper elevation={1}>
          <CardContent>
            <Typography variant="h6" component="h2">
              {desc}
            </Typography>
          </CardContent>
        </Paper>
      </Card>
    </div>
  );

  const totalPaginas = apiFuncionario
    ? Math.ceil(apiFuncionario.length / ItensMaximoPagina)
    : 0;

  const FuncionariosPaginados = apiFuncionario
    ? apiFuncionario.slice(
        Pagina * ItensMaximoPagina,
        (Pagina + 1) * ItensMaximoPagina,
      )
    : [];

  return (
    <>
      <div className="mainContainer">
        <header>
          <h1>API Folha de Pagamento</h1>
        </header>

        <div className="Cards">
          {FuncionariosPaginados.map((funcionario, index) =>
            card(
              funcionario.nome,
              `Tipo: ${funcionario.tipo}`,
              `A pagar R$ ${funcionario.pagamento}`,
              `${index + 56}`,
            ),
          )}
        </div>

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => setPagina((prev) => Math.max(prev - 1, 0))}
            disabled={Pagina === 0}
          >
            Anterior
          </button>

          <span style={{ margin: "0 10px" }}>
            Página {Pagina + 1} de {totalPaginas}
          </span>

          <button
            onClick={() =>
              setPagina((prev) => Math.min(prev + 1, totalPaginas - 1))
            }
            disabled={Pagina === totalPaginas - 1}
          >
            Próxima
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
