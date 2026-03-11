import axios from "axios";
import ICartao from "./cartaoInterface";

export const api = axios.create({
    baseURL: "http://aledocs.runasp.net/api",
    timeout: 5000,
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

export const AtualizarCartao = async (
    id: string,
    cartao: ICartao
) => {
    try {
        const response = await api.put(`/cie/${id}`, cartao);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar cartão ${id}:`, error);
        throw error;
    }
};

export const DeletarCartao = async (
    id: string,
) => {
    try { 
        const res = await api.delete(`/cie/${id}`)
        return res.data;


    }
    catch (err){
        console.error(`Erro ao Deletar Cartão de id ${id}:`, err)
    }


};

