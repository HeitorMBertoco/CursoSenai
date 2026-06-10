
import { Listar, Criar } from "./api";
import {
  IProduto,
  IProdutoCriar,
  IUnidadeMedida,
  ICategoriaProduto,
} from "@/app/interfaces";

export const ProdutoService = {
  listar: Listar<IProduto>("ProdutoModels").listar,
  criar: Criar<IProduto, IProdutoCriar>("ProdutoModels").criar,
};

export const CategoriaService =
  Listar<ICategoriaProduto>("CategoriaProdutoes");


export const UnidadeService =
  Listar<IUnidadeMedida>("UnidadeMedidas");
  