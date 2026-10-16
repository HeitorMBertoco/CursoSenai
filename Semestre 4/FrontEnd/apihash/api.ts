const baseUrl = "http://localhost:5046/api/Logins";


export const apiDoMal = {
  
  get: async () => {
    const res = await fetch(baseUrl);

    if (!res.ok) {
      throw new Error("Erro ao buscar logins");
    }

    return res.json();
  },

  post: async (dados: {
    id?: string;
    nome: string;
    cpf: string;
    senha: string;
  }) => {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!res.ok) {
      throw new Error("Erro ao cadastrar login");
    }

    return res.json();
  },
  
validar: async (dados: { cpf: number; senha: string }) => {
  const res = await fetch(`${baseUrl}/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cpf: dados.cpf,
      senha: dados.senha
    }),
  });

  if (!res.ok) {
    throw new Error(res.status === 401 ? "Senha incorreta" : "Erro ao validar");
  }

  return res.text();
},}
