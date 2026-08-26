'use client'
import { Button, Rating, TextField, Box, Typography } from "@mui/material";
import { useState } from "react";
import { Switch } from "@mui/material";
import { BatteryFull, Battery0Bar } from '@mui/icons-material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const rows = [
  { id: 1, nome: 'João Silva', salario: 3500.00 },
  { id: 2, nome: 'Maria Santos', salario: 4200.00 },
  { id: 3, nome: 'Pedro Oliveira', salario: 3800.00 },
  { id: 4, nome: 'Ana Costa', salario: 4500.00 },
  { id: 5, nome: 'Carlos Souza', salario: 3900.00 },
  { id: 6, nome: 'Luiza Pereira', salario: 4100.00 },
  { id: 7, nome: 'Bruno Martins', salario: 3600.00 },
  { id: 8, nome: 'Fernanda Gomes', salario: 4300.00 },
  { id: 9, nome: 'Ricardo Alves', salario: 3750.00 },
];

const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 70,
    align: 'center',
    headerAlign: 'center',
  },
  { 
    field: 'nome', 
    headerName: 'Nome', 
    width: 200,
    flex: 1,
  },
  {
    field: 'salario',
    headerName: 'Salário',
    type: 'number',
    width: 150,
    align: 'right',
    headerAlign: 'right',
    valueFormatter: (value) => {
      if (value === null) return '';
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);
    },
  },
];



export default function Home() {
  const [estado, setEstado] = useState(false);
  const [Lol, setLol] = useState(false);
  const [amigos, setAmigos] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Filtrar linhas baseado na busca
  const filteredRows = rows.filter(row =>
    row.nome.toLowerCase().includes(searchValue.toLowerCase()) ||
    row.id.toString().includes(searchValue)
  );

  const handleLolChange = () => {
    const novoLol = !Lol;
    setLol(novoLol);

    if (novoLol && estado && amigos) {
      setAmigos(false);
    }
  };

  const handleAmigosChange = () => {
    const novoAmigos = !amigos;
    setAmigos(novoAmigos);

    if (novoAmigos && Lol && estado) {
      setEstado(false);
    }
  };

  const handleEstadoChange = () => {
    const novoEstado = !estado;
    setEstado(novoEstado);

    if (novoEstado && Lol && amigos) {
      setLol(false);
    }
  };

  return (
    <>
      <main className="flex flex-col gap-8 p-8 items-center justify-center min-h-screen">
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
          <Button sx={{ width: 288 }} variant="text">Text</Button>
          <Button sx={{ width: 288 }} variant="contained" color="success">Contained</Button>
          <Button sx={{ width: 288 }} variant="outlined" disabled>Outlined</Button>
          <Button sx={{ width: 288 }} variant="outlined" color="error">Outlined</Button>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <label>Cs2 / CsGo: </label>
            <Switch checked={Lol} onChange={handleLolChange} aria-label="LOL Switch" />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <label>Amigos: </label>
            <Switch checked={amigos} onChange={handleAmigosChange} aria-label="Amigos Switch" />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <label>Sanidade Mental: </label>
            <Switch checked={estado} onChange={handleEstadoChange} aria-label="Estado Switch" />
          </Box>

          <Rating
            className="rating"
            icon={<BatteryFull />}
            emptyIcon={<Battery0Bar />}
            max={62}
            precision={2}
          />
        </Box>

       
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', width: '100%' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Funcionário
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <TextField
              placeholder="Pesquisar por nome ou ID..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              sx={{ maxWidth: 400 }}
              size="small"
              variant="outlined"
            />
            <Button variant="contained" color="primary">
              Pesquisar
            </Button>
          </Box>

          
          <Paper sx={{ height: 450, width: '100%', maxWidth: 700 }}>
            <DataGrid
              rows={filteredRows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10, 20]}
              checkboxSelection
              sx={{ border: 0 }}
            />
          </Paper>
        </Box>
      </main>
    </>
  );
}