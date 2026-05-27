// src/interfaces/IProduto.ts

export interface IProduto {
    id: string;


    nome: string;
    descricao: string;

    quantidadeAtual: number;
}
// src/interfaces/ICategoriaProduto.ts

export interface ICategoriaProduto {
  id: string;

  nome?: string;

  descricao?: string;
}


// src/interfaces/IUnidadeMedida.ts

export interface IUnidadeMedida {
  id: string;

  sigla: string;

  descricao: string;

  
}