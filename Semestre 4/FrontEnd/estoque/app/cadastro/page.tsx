"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import { api} from "@/api";

import {
    ICategoriaProduto,
    IUnidadeMedida,
    IProduto,
    IOperacaoEstoquePayload,
    IOperacao,
} from "@/interfaces";

interface ItemOperacao {
  id: string;
  produtoId: string | number;
  quantidade: number;
  precoCusto: number;
  produto?: IProduto;
}

type AllowedEndpoints =
    | "produtos"
    | "unidades"
    | "operacoes"
    | "categorias";

const titles: Record<AllowedEndpoints, string> = {
    produtos: "Cadastrar Produto",
    unidades: "Cadastrar Unidade de Medida",
    operacoes: "Registrar Operação de Estoque",
    categorias: "Cadastrar Categoria",
};

export default function CadastroPage() {
    const router = useRouter();
    const params = useSearchParams();

    const pageParams = params.get("pg") as AllowedEndpoints | null;

    const [form, setForm] = useState<Record<string, any>>({});

    const [categorias, setCategorias] = useState<ICategoriaProduto[]>([]);
    const [unidades, setUnidades] = useState<IUnidadeMedida[]>([]);
    const [produtos, setProdutos] = useState<IProduto[]>([]);

    const [itensOperacao, setItensOperacao] = useState<ItemOperacao[]>([]);
    const [itemAtual, setItemAtual] = useState<Partial<ItemOperacao>>({
        quantidade: 1,
        precoCusto: 0,
    });

    const [loading, setLoading] = useState(false);
    const [loadingRelacionamentos, setLoadingRelacionamentos] =
        useState(false);

    const [erro, setErro] = useState<string | null>(null);
    const [sucesso, setSucesso] = useState(false);

    useEffect(() => {
        if (pageParams !== "produtos" && pageParams !== "operacoes") return;

        const buscarRelacionamentos = async () => {
            setLoadingRelacionamentos(true);

            try {
                if (pageParams === "produtos") {
                    const [categoriasResult, unidadesResult] = await Promise.all([
                        api<ICategoriaProduto>("categorias").get(),
                        api<IUnidadeMedida>("unidades").get(),
                    ]);

                    setCategorias(categoriasResult);
                    setUnidades(unidadesResult);
                }

                if (pageParams === "operacoes") {
                    const produtosResult = await api<IProduto>("produtos").get();
                    setProdutos(produtosResult);
                }
            } catch (err: any) {
                setErro(
                    err.message ||
                    "Erro ao carregar dados relacionados."
                );
            } finally {
                setLoadingRelacionamentos(false);
            }
        };

        buscarRelacionamentos();
    }, [pageParams]);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleItemChange = (
        field: keyof ItemOperacao,
        value: any
    ) => {
        setItemAtual((prev) => ({
            ...prev,
            [field]: field === "quantidade" || field === "precoCusto" 
                ? Number(value) 
                : value,
        }));
    };

    const adicionarItem = () => {
        if (!itemAtual.produtoId) {
            setErro("Selecione um produto");
            return;
        }

        if (!itemAtual.quantidade || itemAtual.quantidade <= 0) {
            setErro("Quantidade deve ser maior que 0");
            return;
        }

        if (itemAtual.precoCusto === undefined || itemAtual.precoCusto < 0) {
            setErro("Preço de custo não pode ser negativo");
            return;
        }

        const produtoSelecionado = produtos.find(
            (p) => p.id === itemAtual.produtoId
        );

        const novoItem: ItemOperacao = {
            id: Date.now().toString(),
            produtoId: itemAtual.produtoId,
            quantidade: itemAtual.quantidade,
            precoCusto: itemAtual.precoCusto,
            produto: produtoSelecionado,
        };

        setItensOperacao((prev) => [...prev, novoItem]);
        setItemAtual({ quantidade: 1, precoCusto: 0 });
        setErro(null);
    };

    const removerItem = (id: string) => {
        setItensOperacao((prev) => prev.filter((item) => item.id !== id));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!pageParams) return;

        setLoading(true);
        setErro(null);
        setSucesso(false);

        try {
            let dados: any = {
                ...form,
            };

            if (pageParams === "produtos") {
                dados = {
                    nome: form.nome,
                    descricao: form.descricao,
                    quantidadeAtual: Number(form.quantidadeAtual),
                    categoriaId: Number(form.categoriaId),
                    unidadeMedidaId: Number(form.unidadeMedidaId),
                    nomearquivofoto: String(form.nomearquivofoto || ""),
                };

                await api<any>(pageParams).post(dados);
            }

            if (pageParams === "categorias") {
                dados = {
                    nome: form.nome,
                    descricao: form.descricao,
                };

                await api<any>(pageParams).post(dados);
            }

            if (pageParams === "unidades") {
                dados = {
                    sigla: form.sigla,
                    fracionavel: form.fracionavel === "true" || form.fracionavel === true,
                    descricao: form.descricao,
                };

                await api<any>(pageParams).post(dados);
            }

            if (pageParams === "operacoes") {
                if (itensOperacao.length === 0) {
                    setErro("Adicione pelo menos um produto à operação");
                    setLoading(false);
                    return;
                }

                const payload: IOperacaoEstoquePayload = {
                    motivo: form.motivo,
                    entradasaida: form.entradasaida,
                    itens: itensOperacao.map((item) => ({
                        produtoId: item.produtoId,
                        quantidade: item.quantidade,
                        precoCusto: item.precoCusto,
                    })),
                };

                await api<IOperacaoEstoquePayload>("operacoes").post(payload);
            }

            setSucesso(true);
            setForm({});
            setItensOperacao([]);
            setItemAtual({ quantidade: 1, precoCusto: 0 });

            setTimeout(() => {
                router.push(`/crudpage?pg=${pageParams}`);
            }, 800);
        } catch (err: any) {
            setErro(err.message || "Erro ao cadastrar registro.");
        } finally {
            setLoading(false);
        }
    };

    const renderFields = () => {
        if (!pageParams) return null;

        switch (pageParams) {
            case "produtos":
                if (loadingRelacionamentos) {
                    return (
                        <div className="py-6 text-center text-sm text-zinc-500">
                            Carregando categorias e unidades...
                        </div>
                    );
                }

                return (
                    <>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Nome
                            </label>

                            <input
                                type="text"
                                name="nome"
                                value={form.nome || ""}
                                onChange={handleChange}
                                placeholder="Digite o nome do produto"
                                required
                                className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-gray outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Descrição
                            </label>

                            <textarea
                                name="descricao"
                                value={form.descricao || ""}
                                onChange={handleChange}
                                placeholder="Digite a descrição do produto"
                                rows={4}
                                required
                                className="w-full resize-none rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-gray outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Quantidade atual
                            </label>

                            <input
                                type="number"
                                name="quantidadeAtual"
                                value={form.quantidadeAtual ?? ""}
                                onChange={handleChange}
                                placeholder="0"
                                min="0"
                                required
                                className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-gray outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Nome do arquivo da foto
                            </label>

                            <input
                                type="text"
                                name="nomearquivofoto"
                                value={form.nomearquivofoto ?? ""}
                                onChange={handleChange}
                                placeholder="Digite o nome da foto"
                                required
                                className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-gray outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Categoria
                            </label>

                            <select
                                name="categoriaId"
                                value={form.categoriaId || ""}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                            >
                                <option value="" className="text-black">
                                    Selecione uma categoria
                                </option>

                                {categorias.map((categoria) => (
                                    <option
                                        key={categoria.id}
                                        value={categoria.id}
                                    >
                                        {categoria.nome}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Unidade de medida
                            </label>

                            <select
                                name="unidadeMedidaId"
                                value={form.unidadeMedidaId || ""}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                            >
                                <option value="" className="text-black">
                                    Selecione uma unidade
                                </option>

                                {unidades.map((unidade) => (
                                    <option
                                        key={unidade.id}
                                        value={unidade.id}
                                    >
                                        {unidade.descricao} (
                                        {unidade.sigla})
                                    </option>
                                ))}
                            </select>
                        </div>
                    </>
                );

            case "unidades":
                return (
                    <>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Sigla
                            </label>

                            <input
                                type="text"
                                name="sigla"
                                value={form.sigla || ""}
                                onChange={handleChange}
                                placeholder="Ex: KG"
                                maxLength={10}
                                required
                                className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm uppercase text-zinc-900 placeholder-gray outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Fracionável
                            </label>

                            <select
                                name="fracionavel"
                                value={form.fracionavel ?? "false"}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                            >
                                <option value="false">Não</option>
                                <option value="true">Sim</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Descrição
                            </label>

                            <input
                                type="text"
                                name="descricao"
                                value={form.descricao || ""}
                                onChange={handleChange}
                                placeholder="Ex: Kilogramas - Peso"
                                required
                                className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-gray outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                            />
                        </div>
                    </>
                );

            case "categorias":
                return (
                    <>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Nome
                            </label>

                            <input
                                type="text"
                                name="nome"
                                value={form.nome || ""}
                                onChange={handleChange}
                                placeholder="Digite o nome da categoria"
                                required
                                className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-gray outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Descrição
                            </label>

                            <textarea
                                name="descricao"
                                value={form.descricao || ""}
                                onChange={handleChange}
                                placeholder="Digite a descrição da categoria"
                                rows={4}
                                className="w-full resize-none rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-gray outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                            />
                        </div>
                    </>
                );

            case "operacoes":
                if (loadingRelacionamentos) {
                    return (
                        <div className="py-6 text-center text-sm text-zinc-500">
                            Carregando produtos...
                        </div>
                    );
                }

                return (
                    <>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Motivo da operação
                            </label>

                            <input
                                type="text"
                                name="motivo"
                                value={form.motivo || ""}
                                onChange={handleChange}
                                placeholder="Ex: Compra de mercadoria, Ajuste de estoque"
                                required
                                className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-gray outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Tipo de operação
                            </label>

                            <select
                                name="entradasaida"
                                value={form.entradasaida || ""}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                            >
                                <option value="" className="text-black">
                                    Selecione uma opção
                                </option>

                                <option value="E">
                                     Entrada (E) - Recebimento de produtos
                                </option>

                                <option value="S">
                                     Saída (S) - Retirada de produtos
                                </option>
                            </select>
                        </div>

                       
                        <div className="rounded-lg bg-zinc-50 p-4">
                            <h3 className="mb-4 font-medium text-zinc-900">
                                Adicionar produtos à operação
                            </h3>

                            <div className="space-y-3">
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                        Produto
                                    </label>

                                    <select
                                        value={itemAtual.produtoId || ""}
                                        onChange={(e) =>
                                            handleItemChange(
                                                "produtoId",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                                    >
                                        <option value="">
                                            Selecione um produto
                                        </option>

                                        {produtos.map((produto) => (
                                            <option
                                                key={produto.id}
                                                value={produto.id}
                                            >
                                                {produto.nome}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                            Quantidade
                                        </label>

                                        <input
                                            type="number"
                                            value={itemAtual.quantidade ?? ""}
                                            onChange={(e) =>
                                                handleItemChange(
                                                    "quantidade",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="0"
                                            min="1"
                                            className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-gray outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                            Preço de custo
                                        </label>

                                        <input
                                            type="number"
                                            value={itemAtual.precoCusto ?? ""}
                                            onChange={(e) =>
                                                handleItemChange(
                                                    "precoCusto",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="0.00"
                                            min="0"
                                            step="0.01"
                                            className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 placeholder-gray outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={adicionarItem}
                                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
                                >
                                    + Adicionar produto
                                </button>
                            </div>
                        </div>

                        {/* Lista de itens adicionados */}
                        {itensOperacao.length > 0 && (
                            <div className="rounded-lg border border-zinc-200 bg-white">
                                <div className="divide-y divide-zinc-200">
                                    {itensOperacao.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center justify-between p-4"
                                        >
                                            <div className="flex-1">
                                                <p className="font-medium text-zinc-900">
                                                    {item.produto?.nome ||
                                                        `Produto ${item.produtoId}`}
                                                </p>

                                                <p className="text-sm text-zinc-500">
                                                    Qtd: {item.quantidade} |
                                                    Custo: R${" "}
                                                    {item.precoCusto.toFixed(2)}
                                                    | Total: R${" "}
                                                    {(item.quantidade *
                                                        item.precoCusto).toFixed(
                                                        2
                                                    )}
                                                </p>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removerItem(item.id)
                                                }
                                                className="ml-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
                                            >
                                                Remover
                                            </button>
                                        </div>
                                    ))}

                                    <div className="flex items-center justify-between bg-zinc-50 p-4 font-medium">
                                        <span>Total:</span>

                                        <span className="text-lg text-zinc-900">
                                            R${" "}
                                            {itensOperacao
                                                .reduce(
                                                    (acc, item) =>
                                                        acc +
                                                        item.quantidade *
                                                            item.precoCusto,
                                                    0
                                                )
                                                .toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                );

            default:
                return null;
        }
    };

    if (!pageParams || !titles[pageParams]) {
        return (
            <div className="min-h-screen w-full bg-zinc-50 px-4 py-8">
                <main className="mx-auto w-full max-w-3xl">
                    <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
                        <h1 className="text-lg font-semibold text-zinc-900">
                            Página inválida
                        </h1>

                        <p className="mt-1 text-sm text-zinc-500">
                            Nenhum tipo de cadastro foi informado.
                        </p>

                        <div className="mt-6 flex justify-center">
                            <Button
                                text="Voltar"
                                type="dark"
                                size="s"
                                onClick="/"
                            />
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-zinc-50 px-4 py-8">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-center gap-8 lg:flex-row">

                {/* Conteúdo Principal / Formulário */}
                <main className="w-full flex-1 max-w-3xl">
                    <div className="mb-6">
                        <button
                            type="button"
                            onClick={() =>
                                router.push(`/crudpage?pg=${pageParams}`)
                            }
                            className="mb-4 text-sm text-zinc-500 hover:text-zinc-800"
                        >
                            ← Voltar
                        </button>

                        <h1 className="text-2xl font-semibold text-zinc-900">
                            {titles[pageParams]}
                        </h1>

                        <p className="mt-1 text-sm text-zinc-500">
                            Preencha os dados abaixo para realizar o cadastro.
                        </p>
                    </div>

                    <section className="rounded-xl border border-zinc-200 bg-white shadow-sm">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-5 p-6">
                                {renderFields()}

                                {erro && (
                                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                                        {erro}
                                    </div>
                                )}

                                {sucesso && (
                                    <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
                                        Cadastro realizado com sucesso!
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-end gap-2 border-t border-zinc-200 bg-zinc-50/50 px-6 py-4">
                                <button
                                    type="button"
                                    onClick={() =>
                                        router.push(
                                            `/crudpage?pg=${pageParams}`
                                        )
                                    }
                                    disabled={loading}
                                    className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    Cancelar
                                </button>

                                <button
                                    type="submit"
                                    disabled={
                                        loading ||
                                        loadingRelacionamentos
                                    }
                                    className="rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {loading
                                        ? "Cadastrando..."
                                        : "Cadastrar"}
                                </button>
                            </div>
                        </form>
                    </section>
                </main>


                <aside className="sticky top-8 w-full shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-black shadow-lg lg:w-72 xl:w-80">
                    <div className="relative aspect-[9/16] w-full overflow-hidden bg-zinc-900">
                        <iframe
                            src="https://www.youtube.com/embed/jk5z8ZYp1sU?autoplay=1&loop=1&playlist=jk5z8ZYp1sU&controls=0&mute=1&playsinline=1&disablekb=1"
                            title="Siren Head Gangnam Style"
                            className="h-full w-full border-0 pointer-events-none scale-125"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </div>
                </aside>

            </div>
        </div>
    );
}