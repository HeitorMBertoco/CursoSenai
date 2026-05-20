'use client'

import { useEffect, useState } from "react";

import { CategoriaApi } from "../api";
import { ICategoriaProduto } from "../interfaces" ;

export default function ListaCat() {
  const [categorias, setCategorias] = useState<
    ICategoriaProduto[]
  >([]);

  useEffect(() => {
  async function carregar() {
    try {
      const response =
        await CategoriaApi.listar();

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  carregar();
}, []);

  return (
    <>
      {categorias.map((categoria) => (
        <div key={categoria.id}>
          <h1>{categoria.nome}</h1>
          <p>{categoria.descricao}</p>
        </div>
      ))}
    </>
  );
}