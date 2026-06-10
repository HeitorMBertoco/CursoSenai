'use client';

import { useEffect, useState } from "react";
import { ProdutoService, CategoriaService, UnidadeService } from "@/app/services";
import { IProdutoCriar, ICategoriaProduto, IUnidadeMedida } from "@/app/interfaces";

export default function CadastroProduto() {
  const [produto, setProduto] = useState<IProdutoCriar>({
    unidadeMedidaId: "",
    categoriaId: "",
    nome: "",
    descricao: "",
    quantidadeAtual: 0,
  });

  const [categorias, setCategorias] = useState<ICategoriaProduto[]>([]);
  const [unidades, setUnidades] = useState<IUnidadeMedida[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function load() {
      try {
        const [cats, unids] = await Promise.all([
          CategoriaService.listar(),
          UnidadeService.listar(),
        ]);

        setCategorias(cats);
        setUnidades(unids);
      } catch (err) {
        console.error("Erro ao carregar selects:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);


  function handleChange(field: keyof IProdutoCriar, value: any) {
    setProduto((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

 
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!produto.categoriaId || !produto.unidadeMedidaId) {
      alert("Selecione categoria e unidade");
      return;
    }

    try {
      const result = await ProdutoService.criar(produto);
      console.log("Produto criado:", result);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="container">

      
      <input
        placeholder="Nome"
        value={produto.nome}
        onChange={(e) => handleChange("nome", e.target.value)}
      />

     
     
      <input
        placeholder="Descrição"
        value={produto.descricao}
        onChange={(e) => handleChange("descricao", e.target.value)}
      />

    
      <select
        value={produto.categoriaId}
        onChange={(e) => handleChange("categoriaId", e.target.value)}
      >
        <option value="">Selecione categoria</option>

        {categorias.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.nome}
          </option>
        ))}
      </select>

     
      <select
        value={produto.unidadeMedidaId}
        onChange={(e) => handleChange("unidadeMedidaId", e.target.value)}
      >
        <option value="">Selecione unidade</option>

        {unidades.map((u) => (
          <option key={u.id} value={u.id}>
            {u.sigla}
          </option>
        ))}
      </select>

     
      <input
        type="number"
        placeholder="Quantidade"
        value={produto.quantidadeAtual}
        onChange={(e) =>
          handleChange("quantidadeAtual", Number(e.target.value))
        }
      />

      <button type="submit">
        Salvar
      </button>
    </form>
  );
}