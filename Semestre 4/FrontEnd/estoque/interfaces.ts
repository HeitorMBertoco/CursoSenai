

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
export interface IOperacao {
  id: number;
  hora: Date;
  motivo: string;
  entradasaida: string;
}

export interface IOperacaoEstoqueDetalhe {
  id: number;
  operacaoEstoqueId: number;
}

export interface IOperacaoEstoqueDetalheItem {
  id: number;
  quantidade: number;
  precoCusto: number;
  operacaoEstoqueDetalheId: number;
  produtoId: number;
}

export interface IOperacaoEstoqueCompleta extends IOperacao {
  operacaoEstoqueDetalhe?: IOperacaoEstoqueDetalheComItens | null;
}

export interface IOperacaoEstoqueDetalheComItens extends IOperacaoEstoqueDetalhe {
  itens: IOperacaoEstoqueDetalheItemComProduto[];
}

export interface IOperacaoEstoqueDetalheItemComProduto extends IOperacaoEstoqueDetalheItem {
  produto?: any; 
}
