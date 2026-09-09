"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { api } from "@/api";
import {
    IProduto,
    ICategoriaProduto,
    IUnidadeMedida,
    IOperacao,
} from "@/interfaces";

type AllowedEndpoints =
    | "produtos"
    | "unidades"
    | "operacoes"
    | "categorias";

const titles: Record<AllowedEndpoints, string> = {
    produtos: "Produtos",
    unidades: "Unidades de Medida",
    operacoes: "Operações de Estoque",
    categorias: "Categorias de Produtos",
};

export default function CrudPage() {
    const router = useRouter();
    const params = useSearchParams();
    const pageParams = params.get("pg") as AllowedEndpoints | null;

    const [dados, setDados] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        if (!pageParams) return;

        const validEndpoints: AllowedEndpoints[] = [
            "produtos",
            "unidades",
            "operacoes",
            "categorias",
        ];

        if (!validEndpoints.includes(pageParams)) {
            setErro("Página ou endpoint inválido");
            return;
        }

        const buscarDados = async () => {
            setLoading(true);
            setErro(null);

            try {
                const resultado = await api<any>(pageParams).get();
                setDados(resultado);
            } catch (err: any) {
                setErro(err.message || "Erro ao carregar dados.");
                setDados([]);
            } finally {
                setLoading(false);
            }
        };

        buscarDados();
    }, [pageParams]);

    const handleDelete = async (id: number | string) => {
    if (!pageParams) return;

    const confirmacao = window.confirm(
        "Tem certeza de que deseja excluir este registro?"
    );

    if (!confirmacao) return;

    try {
        
        await api(pageParams).delete(id);
        
        setDados((prev) => prev.filter((item) => item.id !== id));
    } catch (err: any) {
        alert(err.message || "Erro ao excluir registro.");
    }
};

    const handleContent = () => {
        if (!pageParams) {
            return (
                <div className="p-8 text-center text-sm text-zinc-500">
                    Nenhum parâmetro informado na URL.
                </div>
            );
        }

        if (loading) {
            return (
                <div className="p-8 text-center text-sm text-zinc-500">
                    Carregando dados...
                </div>
            );
        }

        if (erro) {
            return (
                <div className="p-8 text-center text-sm text-red-500">
                    {erro}
                </div>
            );
        }

        if (dados.length === 0) {
            return (
                <div className="p-8 text-center text-sm text-zinc-400">
                    Nenhum registro encontrado.
                </div>
            );
        }

        switch (pageParams) {
            case "produtos":
                return (
                    <div className="divide-y divide-zinc-100">
                        {dados.map((prod: IProduto) => (
                            <div
                                key={prod.id}
                                className="flex items-center justify-between px-5 py-4 hover:bg-zinc-50"
                            >
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-zinc-800">
                                        {prod.nome}
                                    </span>
                                    <span className="text-xs text-zinc-500">
                                        {prod.quantidadeAtual} em estoque
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => handleDelete(prod.id)}
                                    className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-100"
                                >
                                    Excluir
                                </button>
                            </div>
                        ))}
                    </div>
                );

            case "unidades":
                return (
                    <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2">
                        {dados.map((un: IUnidadeMedida) => (
                            <div
                                key={un.id}
                                className="flex items-center justify-between rounded-lg border border-zinc-200 p-4"
                            >
                                <div>
                                    <p className="text-sm font-medium text-zinc-800">
                                        {un.descricao}
                                    </p>
                                    <p className="mt-1 text-xs text-zinc-500">
                                        Sigla:{" "}
                                        <span className="font-semibold text-zinc-700">
                                            {un.sigla}
                                        </span>
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => handleDelete(un.id)}
                                    className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-100"
                                >
                                    Excluir
                                </button>
                            </div>
                        ))}
                    </div>
                );

            case "operacoes":
                return (
                    <div className="divide-y divide-zinc-100">
                        {dados.map((op: IOperacao) => {
                            const entrada = op.entradasaida === "entrada";

                            return (
                                <div
                                    key={op.id}
                                    className="flex items-center justify-between px-5 py-4 hover:bg-zinc-50"
                                >
                                    <span className="text-sm font-medium text-zinc-800">
                                        {op.motivo}
                                    </span>

                                    <div className="flex items-center gap-3">
                                        <span
                                            className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                                                entrada
                                                    ? "bg-green-50 text-green-700"
                                                    : "bg-red-50 text-red-700"
                                            }`}
                                        >
                                            {op.entradasaida.toUpperCase()}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() => handleDelete(op.id)}
                                            className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-100"
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );

            case "categorias":
                return (
                    <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2">
                        {dados.map((cat: ICategoriaProduto) => (
                            <div
                                key={cat.id}
                                className="flex items-center justify-between rounded-lg border border-zinc-200 px-4 py-3"
                            >
                                <p className="text-sm font-medium text-zinc-800">
                                    {cat.nome}
                                </p>

                                <button
                                    type="button"
                                    onClick={() => handleDelete(cat.id)}
                                    className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-100"
                                >
                                    Excluir
                                </button>
                            </div>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen w-full bg-zinc-50 px-4 py-8">
            <div className="mb-6">
                <button
                    type="button"
                    onClick={() => router.push("/")}
                    className="mb-4 text-sm text-zinc-500 hover:text-zinc-800"
                >
                    ← Voltar
                </button>
            </div>

            <main className="mx-auto w-full max-w-3xl">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold text-zinc-900">
                            {pageParams
                                ? titles[pageParams]
                                : "Gerenciamento"}
                        </h1>

                        <p className="mt-1 text-sm text-zinc-500">
                            Consulte os registros cadastrados no sistema.
                        </p>
                    </div>

                    {pageParams && (
                        <Button
                            text="Cadastrar"
                            type="dark"
                            size="s"
                            onClick={`/cadastro?pg=${pageParams}`}
                        />
                    )}
                </div>

                <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
                    {pageParams && (
                        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
                            <div>
                                <h2 className="text-sm font-semibold text-zinc-800">
                                    Registros
                                </h2>

                                {!loading && !erro && (
                                    <p className="mt-0.5 text-xs text-zinc-400">
                                        {dados.length}{" "}
                                        {dados.length === 1
                                            ? "registro encontrado"
                                            : "registros encontrados"}
                                    </p>
                                )}
                            </div>

                            {!loading && !erro && dados.length > 0 && (
                                <span className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600">
                                    {dados.length}
                                </span>
                            )}
                        </div>
                    )}

                    {handleContent()}
                </section>
            </main>
        </div>
    );
}