import axios from "axios";
import ICartao from "./cartaoInterface";

export const api = axios.create({
    baseURL: "http://aledocs.runasp.net/api",
    timeout: 1000,
});

export const ListarCartoes = async (): Promise<ICartao[]> => {
    try {
        const response = await api.get("/cie");

        return response.data;
    } catch (error) {
        console.error("Erro ao listar cartões:", error);
        throw error;
    }
};

export const ObterCartaoPorId = async (id: string) => {
    try {
        const response = await api.get(`/cie/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao obter cartão com id ${id}:`, error);
        throw error;
    }
};

export const CriarCartao = async (cartao: Omit<ICartao, "id">) => {
    try {
        const response = await api.post("/cie", cartao);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar cartão:", error);
        throw error;
    }};


