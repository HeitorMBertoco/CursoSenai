import { IProduto, ICategoriaProduto, IUnidadeMedida } from "./interfaces";

/* =========================
   API GENÉRICA (FETCH)
========================= */

function api<T>(endpoint: string) {
  return {
    listar: async (): Promise<T[]> => {
      const response = await fetch(
        `http://clona-debito2026.runasp.net/api/${endpoint}`
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

/* =========================
   APIS
========================= */

export const ProdutoApi =
  api<IProduto>("ProdutoModels");

export const CategoriaApi =
  api<ICategoriaProduto>("CategoriaProdutoes");

export const UnidadeApi =
  api<IUnidadeMedida>("UnidadeMedidas");