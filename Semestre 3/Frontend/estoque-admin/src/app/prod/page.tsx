'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ProdutoService } from "@/app/services";
import { IProduto } from "@/app/interfaces";

export default function Produto() {
  const router = useRouter();

  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await ProdutoService.listar();
        setProdutos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const produtosFiltrados = produtos.filter((p) =>
    `${p.nome} ${p.descricao}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main>

      {/* SEARCH */}
      <div className="container mt-20">
        <h1 className="text-center">Pesquisar Produtos</h1>

        <select>
          <option value="">Todos</option>
        </select>

        <input
          type="text"
          placeholder="Nome ou descrição"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <hr className="mt-20" />

      {/* LIST */}
      <div className="container mt-20">

        {/* CREATE CARD */}
        <div
          className="card-create"
          onClick={() => router.push("/produto/cadastro")}
        >
          Criar +
        </div>

        {/* LOADING */}
        {loading && (
          <p className="loading">
            Carregando produtos...
          </p>
        )}

        {/* EMPTY */}
        {!loading && produtosFiltrados.length === 0 && (
          <p className="empty">
            Nenhum produto encontrado
          </p>
        )}

        {/* PRODUCTS */}
        {!loading &&
          produtosFiltrados.map((produto) => (
            <div key={produto.id} className="card">
              <h3>{produto.nome}</h3>
              <p>{produto.descricao}</p>
              <strong>
                Quantidade: {produto.quantidadeAtual}
              </strong>
            </div>
          ))}
      </div>

    </main>
  );
}