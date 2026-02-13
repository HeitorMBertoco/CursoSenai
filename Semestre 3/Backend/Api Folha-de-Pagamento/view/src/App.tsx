import { useEffect, useState } from "react";
import { CardHeader, CardMedia, Paper, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./App.css"; 

function App() {
  const [apiAssalariado, setApiAssalariado] = useState<number | null>(null);
  const [apiHorista, setApiHorista] = useState<number | null>(null);
  const [apiComissionado, setApiComissionado] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await fetch("http://localhost:5055/assalariado/jonas/70/5000/500");
        const data1 = await res1.json();
        setApiAssalariado(data1.pagamento);

        const res2 = await fetch("http://localhost:5055/horista/luis/45/160/20");
        const data2 = await res2.json();
        setApiHorista(data2.pagamento);

        const res3 = await fetch("http://localhost:5055/comissionado/dimas/23/10000/0.1");
        const data3 = await res3.json();
        setApiComissionado(data3.pagamento);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  const card = (
    title: string,
    role: string,
    desc: string,
    numFoto: string
  ) => (
    <div className="containerCard">
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

        <CardContent
          sx={{ margin: -1, backgroundColor: "#f2f2f2" }}
        >
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

  return (
    <div className="mainContainer">
      <header>
        <h1>API Folha de Pagamento</h1>
      </header>

      <div className="Cards">
        {card(
          "Jonas Assalariado",
          "Funcionário Assalariado",
          apiAssalariado !== null
            ? `A pagar R$ ${apiAssalariado} todo mês`
            
            : "Carregando...",
          "70"
        )}

        {card(
          "Luis Horista",
          "Funcionário Horista",
          apiHorista !== null
            ? `A pagar R$ ${apiHorista} por hora`
            : "Carregando...",
          "45"
        )}

        {card(
          "Dimas Comissionado",
          "Funcionário Comissionado",
          apiComissionado !== null
            ? `A pagar R$ ${apiComissionado} por comissão`
            : "Carregando...",
          "23"
        )}
      </div>
    </div>
  );
}

export default App;
