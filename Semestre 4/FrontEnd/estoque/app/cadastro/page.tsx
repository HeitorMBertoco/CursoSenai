"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import { api } from "@/api";

import {
    ICategoriaProduto,
    IUnidadeMedida,
} from "@/interfaces";

type AllowedEndpoints =
    | "produtos"
    | "unidades"
    | "operacoes"
    | "categorias";

const titles: Record<AllowedEndpoints, string> = {
    produtos: "Cadastrar Produto",
    unidades: "Cadastrar Unidade de Medida",
    operacoes: "Cadastrar Operação",
    categorias: "Cadastrar Categoria",
};

export default function CadastroPage() {
    const router = useRouter();
    const params = useSearchParams();

    const pageParams = params.get("pg") as AllowedEndpoints | null;

    const [form, setForm] = useState<Record<string, any>>({});

    const [categorias, setCategorias] = useState<ICategoriaProduto[]>([]);
    const [unidades, setUnidades] = useState<IUnidadeMedida[]>([]);

    const [loading, setLoading] = useState(false);
    const [loadingRelacionamentos, setLoadingRelacionamentos] =
        useState(false);

    const [erro, setErro] = useState<string | null>(null);
    const [sucesso, setSucesso] = useState(false);

    useEffect(() => {
        if (pageParams !== "produtos") return;

        const buscarRelacionamentos = async () => {
            setLoadingRelacionamentos(true);

            try {
                const [categoriasResult, unidadesResult] = await Promise.all([
                    api<ICategoriaProduto>("categorias").get(),
                    api<IUnidadeMedida>("unidades").get(),
                ]);

                setCategorias(categoriasResult);
                setUnidades(unidadesResult);
            } catch (err: any) {
                setErro(
                    err.message ||
                    "Erro ao carregar categorias e unidades."
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
            }

            if (pageParams === "categorias") {
                dados = {
                    nome: form.nome,
                    descricao: form.descricao,
                };
            }

            if (pageParams === "unidades") {
                dados = {
                    sigla: form.sigla,
                    fracionavel: form.fracionavel === "true" || form.fracionavel === true,
                    descricao: form.descricao,
                };
            }

            if (pageParams === "operacoes") {
                dados = {
                    motivo: form.motivo,
                    entradasaida: form.entradasaida,
                };
            }

            await api<any>(pageParams).post(dados);

            setSucesso(true);
            setForm({});

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
                return (
                    <>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                                Motivo
                            </label>

                            <input
                                type="text"
                                name="motivo"
                                value={form.motivo || ""}
                                onChange={handleChange}
                                placeholder="Ex: Compra de mercadoria"
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
                                    Entrada (E)
                                </option>

                                <option value="S">
                                    Saída (S)
                                </option>
                            </select>
                        </div>
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