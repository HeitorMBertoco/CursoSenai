import { IProduto, ICategoriaProduto, IUnidadeMedida, IOperacao } from "./interfaces";
const url = "http://localhost:3000/";

export function api<T>(endpoint: "produtos" | "unidades" | "operacoes" | "categorias") {
    return {
        get: async (): Promise<T[]> => {
            const res = await fetch(url + endpoint);

            if (!res.ok) {
                throw new Error("Erro ao buscar dados de " + endpoint + ": " + res.status);
            }
            return await res.json();
        },

        post: async (body: Omit<T, 'id'> | T): Promise<T> => {
            const res = await fetch(url + endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            if (!res.ok) {
                throw new Error("Erro ao criar dados em " + endpoint + ": " + res.status);
            }
            return await res.json();
        },

        patch: async (id: number | string, body: Partial<T>): Promise<T> => {
            const res = await fetch(`${url}${endpoint}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            if (!res.ok) {
                throw new Error("Erro ao modificar dados em " + endpoint + ": " + res.status);
            }
            return await res.json();
        },

        delete: async (id: number | string): Promise<void> => {
            const res = await fetch(`${url}${endpoint}/${id}`, {
                method: "DELETE"
            });

            if (!res.ok) {
                throw new Error("Erro ao deletar dados em " + endpoint + ": " + res.status);
            }
        }
    }
}
