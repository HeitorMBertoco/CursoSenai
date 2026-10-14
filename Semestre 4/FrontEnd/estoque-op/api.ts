import {
  IProduto,
  ICategoriaProduto,
  IUnidadeMedida,
  IOperacaoEstoque,
  IOperacaoEstoqueDetalhe,
  ICriarProdutoPayload,
  IRegistrarOperacaoPayload
} from './interfaces';

let baseUrl = 'http://localhost:3000';

export function setApiBaseUrl(url: string) {
  baseUrl = url.endsWith('/') ? url.slice(0, -1) : url;
}

export function getApiBaseUrl(): string {
  return baseUrl;
}

export function getImagemUrl(nomeArquivo?: string): string {
  if (!nomeArquivo) return '';
  if (nomeArquivo.startsWith('http://') || nomeArquivo.startsWith('https://')) {
    return nomeArquivo;
  }
  return `${baseUrl}/uploads/${nomeArquivo}`;
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const url = `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {})
    }
  });

  if (!response.ok) {
    let errorMsg = `Erro na requisição (${response.status}): ${response.statusText}`;
    try {
      const errJson = await response.json();
      if (errJson?.error) {
        errorMsg = errJson.error;
      }
    } catch {
      // resposta não é JSON
    }
    throw new Error(errorMsg);
  }

  if (response.status === 204) {
    return undefined as unknown as T;
  }

  return response.json();
}

/* =========================================================
   PRODUTOS (GET, POST, PATCH, DELETE /produtos)
========================================================= */
export const ProdutoApi = {
  listar: async (nome?: string): Promise<IProduto[]> => {
    const query = nome && nome.trim() !== '' ? `?nome=${encodeURIComponent(nome.trim())}` : '';
    return request<IProduto[]>(`/produtos${query}`);
  },

  obterPorId: async (id: number | string): Promise<IProduto | null> => {
    const produtos = await request<IProduto[]>('/produtos');
    const encontrado = produtos.find((p) => String(p.id) === String(id));
    return encontrado || null;
  },

  criar: async (dados: ICriarProdutoPayload): Promise<IProduto> => {
    return request<IProduto>('/produtos', {
      method: 'POST',
      body: JSON.stringify(dados)
    });
  },

  alterar: async (
    id: number | string,
    dados: Partial<Pick<IProduto, 'nome' | 'nomearquivofoto' | 'descricao' | 'quantidadeAtual'>>
  ): Promise<IProduto> => {
    return request<IProduto>(`/produtos?id=${id}`, {
      method: 'PATCH',
      body: JSON.stringify(dados)
    });
  },

  deletar: async (id: number | string): Promise<void> => {
    return request<void>(`/produtos?id=${id}`, {
      method: 'DELETE'
    });
  }
};

/* =========================================================
   CATEGORIAS (GET, POST, PATCH, DELETE /categorias)
========================================================= */
export const CategoriaApi = {
  listar: async (nome?: string): Promise<ICategoriaProduto[]> => {
    const query = nome && nome.trim() !== '' ? `?nome=${encodeURIComponent(nome.trim())}` : '';
    return request<ICategoriaProduto[]>(`/categorias${query}`);
  },

  criar: async (dados: { nome: string; descricao?: string }): Promise<ICategoriaProduto> => {
    return request<ICategoriaProduto>('/categorias', {
      method: 'POST',
      body: JSON.stringify(dados)
    });
  },

  alterar: async (
    id: number | string,
    dados: { nome?: string; descricao?: string }
  ): Promise<ICategoriaProduto> => {
    return request<ICategoriaProduto>(`/categorias?id=${id}`, {
      method: 'PATCH',
      body: JSON.stringify(dados)
    });
  },

  deletar: async (id: number | string): Promise<void> => {
    return request<void>(`/categorias?id=${id}`, {
      method: 'DELETE'
    });
  }
};

/* =========================================================
   UNIDADES (GET, POST, PATCH, DELETE /unidades)
========================================================= */
export const UnidadeApi = {
  listar: async (): Promise<IUnidadeMedida[]> => {
    return request<IUnidadeMedida[]>('/unidades');
  },

  criar: async (dados: { sigla: string; descricao: string; fracionavel?: boolean }): Promise<IUnidadeMedida> => {
    return request<IUnidadeMedida>('/unidades', {
      method: 'POST',
      body: JSON.stringify(dados)
    });
  },

  alterar: async (
    id: number | string,
    dados: { sigla?: string; descricao?: string; fracionavel?: boolean }
  ): Promise<IUnidadeMedida> => {
    return request<IUnidadeMedida>(`/unidades?id=${id}`, {
      method: 'PATCH',
      body: JSON.stringify(dados)
    });
  },

  deletar: async (id: number | string): Promise<void> => {
    return request<void>(`/unidades?id=${id}`, {
      method: 'DELETE'
    });
  }
};

/* =========================================================
   DETALHES (GET, POST, PATCH, DELETE /detalhes)
========================================================= */
export const DetalheApi = {
  listar: async (id?: number | string): Promise<IOperacaoEstoqueDetalhe[]> => {
    const query = id ? `?id=${id}` : '';
    return request<IOperacaoEstoqueDetalhe[]>(`/detalhes${query}`);
  },

  criarComItem: async (dados: {
    operacaoEstoqueId: number;
    quantidade: number;
    precoCusto: number;
    produtoId: number;
  }): Promise<IOperacaoEstoqueDetalhe> => {
    return request<IOperacaoEstoqueDetalhe>('/detalhes', {
      method: 'POST',
      body: JSON.stringify(dados)
    });
  },

  adicionarProdutoAoDetalhe: async (dados: {
    operacaoEstoqueDetalheId: number;
    quantidade: number;
    precoCusto: number;
    produtoId: number;
  }): Promise<any> => {
    return request<any>('/detalhes/produto', {
      method: 'POST',
      body: JSON.stringify(dados)
    });
  },

  alterar: async (
    id: number | string,
    dados: { quantidade?: number; precoCusto?: number }
  ): Promise<any> => {
    return request<any>(`/detalhes?id=${id}`, {
      method: 'PATCH',
      body: JSON.stringify(dados)
    });
  },

  deletar: async (id: number | string): Promise<void> => {
    return request<void>(`/detalhes?id=${id}`, {
      method: 'DELETE'
    });
  }
};

/* =========================================================
   OPERAÇÕES DE ESTOQUE (GET, POST, PATCH, DELETE /operacoes)
========================================================= */
export const OperacaoApi = {
  listar: async (id?: number | string): Promise<IOperacaoEstoque[]> => {
    const query = id ? `?id=${id}` : '';
    return request<IOperacaoEstoque[]>(`/operacoes${query}`);
  },

  criar: async (motivo: string, entradasaida: 'E' | 'S' | string): Promise<IOperacaoEstoque> => {
    return request<IOperacaoEstoque>('/operacoes', {
      method: 'POST',
      body: JSON.stringify({ motivo, entradasaida })
    });
  },

  alterar: async (
    id: number | string,
    dados: { motivo?: string; entradasaida?: string }
  ): Promise<IOperacaoEstoque> => {
    return request<IOperacaoEstoque>(`/operacoes?id=${id}`, {
      method: 'PATCH',
      body: JSON.stringify(dados)
    });
  },

  deletar: async (id: number | string): Promise<void> => {
    return request<void>(`/operacoes?id=${id}`, {
      method: 'DELETE'
    });
  },

  /**
   * Registra a operação completa (cria operação, adiciona detalhes/itens
   * e atualiza o estoque dos produtos no EstoqueJS)
   */
  registrarOperacaoComItens: async ({
    motivo,
    entradasaida,
    itens,
    atualizarEstoqueProduto = true
  }: IRegistrarOperacaoPayload): Promise<IOperacaoEstoque> => {
    // 1. Cria a operação de estoque básica
    const novaOperacao = await OperacaoApi.criar(motivo, entradasaida);

    // 2. Se houver itens, cria o detalhe e os itens vinculados
    if (itens && itens.length > 0) {
      const primeiro = itens[0];
      const detalheCriado = await DetalheApi.criarComItem({
        operacaoEstoqueId: novaOperacao.id,
        quantidade: primeiro.quantidade,
        precoCusto: primeiro.precoCusto,
        produtoId: primeiro.produtoId
      });

      for (let i = 1; i < itens.length; i++) {
        const item = itens[i];
        await DetalheApi.adicionarProdutoAoDetalhe({
          operacaoEstoqueDetalheId: detalheCriado.id,
          quantidade: item.quantidade,
          precoCusto: item.precoCusto,
          produtoId: item.produtoId
        });
      }

      // 3. Atualiza a quantidade em estoque de cada produto (Entrada soma, Saída subtrai)
      if (atualizarEstoqueProduto) {
        for (const item of itens) {
          const produtoAtual = await ProdutoApi.obterPorId(item.produtoId);
          if (produtoAtual) {
            const estoqueAnterior = Number(produtoAtual.quantidadeAtual) || 0;
            const qtdNum = Number(item.quantidade) || 0;
            const isEntrada = entradasaida === 'E' || String(entradasaida).toUpperCase().startsWith('E');
            const delta = isEntrada ? qtdNum : -qtdNum;
            const novoEstoque = Math.max(0, estoqueAnterior + delta);

            await ProdutoApi.alterar(item.produtoId, {
              quantidadeAtual: novoEstoque
            });
          }
        }
      }
    }

    return novaOperacao;
  }
};

/* =========================================================
   IMAGENS (POST /imagens?id=)
========================================================= */
export const ImagemApi = {
  upload: async (produtoId: number | string, fileFormData: FormData): Promise<any> => {
    const url = `${baseUrl}/imagens?id=${produtoId}`;
    const response = await fetch(url, {
      method: 'POST',
      body: fileFormData
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar imagem (${response.status})`);
    }

    return response.json();
  },

  getUrl: getImagemUrl
};