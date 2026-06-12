export interface IAluno {
    id: bigint; 
    nome: string;
    genero: string;
    idade: number;
}


export interface ICreateAlunoInput {
    nome: string;
    genero: string;
    idade: number;
}


export interface IAlunoQueryFilter {
    nome?: string;
    genero?: string;
}