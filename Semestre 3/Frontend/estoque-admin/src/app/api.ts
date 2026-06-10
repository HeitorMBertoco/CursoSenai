
const BASE_URL = "http://clona-debito2026.runasp.net/api";

export function Listar<T>(endpoint: string) {
  return {
    listar: async (): Promise<T[]> => {
      const res = await fetch(`${BASE_URL}/${endpoint}`);

      if (!res.ok) {
        throw new Error(`Erro ao listar ${endpoint}`);
      }

      return res.json();
    },
  };
}

export function Criar<T, D = unknown>(endpoint: string) {
  return {
    criar: async (dados: D): Promise<T> => {
      const res = await fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      if (!res.ok) {
        throw new Error(`Erro ao criar ${endpoint}`);
      }

      return res.json();
    },
  };
}