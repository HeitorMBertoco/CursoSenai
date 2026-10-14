export interface ICategoriaProduto {
  id: number;
  nome: string;
  descricao?: string;
}

export interface IUnidadeMedida {
  id: number;
  sigla: string;
  descricao: string;
  fracionavel?: boolean;
}

export interface IImagemProduto {
  id?: number;
  url: string;
  produtoId: number;
}

export interface IProduto {
  id: number;
  nome: string;
  habilitado?: boolean;
  nomearquivofoto?: string;
  descricao?: string;
  quantidadeAtual: number;
  categoriaId?: number;
  unidadeMedidaId?: number;
  categoria?: ICategoriaProduto;
  unidadeMedida?: IUnidadeMedida;
  imagens?: IImagemProduto[];
}

export interface IOperacaoEstoqueDetalheItem {
  id?: number;
  quantidade: number;
  precoCusto: number;
  operacaoEstoqueDetalheId?: number;
  produtoId: number;
  produto?: IProduto;
}

export interface IOperacaoEstoqueDetalhe {
  id: number;
  operacaoEstoqueId: number;
  itens?: IOperacaoEstoqueDetalheItem[];
  operacaoEstoque?: IOperacaoEstoque;
}

export interface IOperacaoEstoque {
  id: number;
  hora: string | Date;
  motivo: string;
  entradasaida: 'E' | 'S' | string;
  operacaoEstoqueDetalhe?: IOperacaoEstoqueDetalhe | null;
}

// Payload interfaces para interações com a API
export interface ICriarProdutoPayload {
  nome: string;
  nomearquivofoto?: string;
  descricao: string;
  quantidadeAtual: number;
  categoriaId: number;
  unidadeMedidaId: number;
}

export interface IItemOperacaoPayload {
  produtoId: number;
  quantidade: number;
  precoCusto: number;
}

export interface IRegistrarOperacaoPayload {
  motivo: string;
  entradasaida: 'E' | 'S';
  itens: IItemOperacaoPayload[];
  atualizarEstoqueProduto?: boolean;
}