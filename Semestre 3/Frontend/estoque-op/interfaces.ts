

export interface IProduto {
  id: string;


  nome: string;
  descricao: string;

  quantidadeAtual: number;
}


export interface ICategoriaProduto {
  id: string;

  nome?: string;

  descricao?: string;
}




export interface IUnidadeMedida {
  id: string;

  sigla: string;

  descricao: string;


}