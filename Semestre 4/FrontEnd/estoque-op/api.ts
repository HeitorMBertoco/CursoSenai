import { IProduto, ICategoriaProduto, IUnidadeMedida } from "./interfaces";



function api<T>(endpoint: string) {
  return {
    listar: async (): Promise<T[]> => {
      const response = await fetch(
        `http://localhost:3000/${endpoint}`
      );

      if (!response.ok) {
        throw new Error(
          `Erro ao buscar ${endpoint}: ${response.status}`
        );
      }

      const data: T[] = await response.json();
      return data;
    },
  };
}



export const ProdutoApi =
  api<IProduto>("produtos");

export const CategoriaApi =
  api<ICategoriaProduto>("categorias");

export const UnidadeApi =
  api<IUnidadeMedida>("unidades");