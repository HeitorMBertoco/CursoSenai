import { IAluno } from "./interface";

// Definindo os parâmetros aceitos pela função
export const Listar = async function (name?: string, genero?: string): Promise<IAluno[]> {
    try {
        const params = new URLSearchParams();
        if (name) params.append("name", name);
        if (genero) params.append("genero", genero);

        const queryString = params.toString() ? `?${params.toString()}` : "";
        const urlCompleta = `http://localhost:3000/api/alunos${queryString}`;
        
        // 1. VEJA ISSO NO CONSOLE DO NAVEGADOR
        console.log("✈️ ENVIANDO REQUISIÇÃO PARA:", urlCompleta);

        const response = await fetch(urlCompleta);
        
        if (!response.ok) {
            throw new Error("erro ao puxar dados: " + response.status);
        }
        
        const dados = await response.json();
        
        // 2. VEJA SE O SERVIDOR COOPEROU
        console.log("📥 DADOS RETORNADOS PELA API:", dados);

        return dados;
    }
    catch (err) {
        console.error("Erro ao puxar dados: ", err);
        throw err; 
    }
}