import { IAluno } from "./interface";

export const Listar = async function (name?: string, genero?: string): Promise<IAluno[]> {
    try {
        const params = new URLSearchParams();
        
        
        if (name) params.append("nome", name); 
        if (genero) params.append("genero", genero);

        const queryString = params.toString() ? `?${params.toString()}` : "";
        const response = await fetch(`http://localhost:3000/api/alunos${queryString}`);
        
        if (!response.ok) {
            throw new Error("erro ao puxar dados: " + response.status + " " + response.statusText);
        }
        
        return response.json();
    }
    catch (err) {
        console.error("Erro ao puxar dados: ", err);
        throw err; 
    }
}