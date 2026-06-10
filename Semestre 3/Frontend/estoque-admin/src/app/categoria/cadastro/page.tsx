'use client';

import { useEffect, useState } from "react";
import { CategoriaService } from "@/app/services";
import { ICategoriaProduto } from "@/app/interfaces";

export default function ListaCategorias() {
  const [categorias, setCategorias] = useState<ICategoriaProduto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await CategoriaService.listar();
        setCategorias(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      {categorias.map((cat) => (
        <div key={cat.id}>
          <h3>{cat.nome}</h3>
          <p>{cat.descricao}</p>
        </div>
      ))}
    </div>
  );
}