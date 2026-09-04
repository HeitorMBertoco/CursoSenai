'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { api } from "@/api";
import { IProduto, ICategoriaProduto, IUnidadeMedida, IOperacao } from "@/interfaces";

type AllowedEndpoints = "produtos" | "unidades" | "operacoes" | "categorias";

export default function CrudPage() {
    const router = useRouter();
    const params = useSearchParams();    
    const pageParams = params.get("pg") as AllowedEndpoints | null;

    const [dados, setDados] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        if (!pageParams) return;

        const validEndpoints: AllowedEndpoints[] = ["produtos", "unidades", "operacoes", "categorias"];
        if (!validEndpoints.includes(pageParams)) {
            setErro("Pagina ou endpoint invalido");
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

    const handleContent = () => {
        if (!pageParams) {
            return <p className="text-zinc-500 font-medium">Nenhum parametro informado na URL.</p>;
        }
        if (loading) return <p className="text-zinc-500 animate-pulse">Carregando dados da API...</p>;
        if (erro) return <p className="text-red-500 font-medium">{erro}</p>;
        if (dados.length === 0) return <p className="text-zinc-400">Nenhum registro encontrado.</p>;

        switch (pageParams) {
            case "produtos":
                return (
                    <div className="w-full max-w-md bg-white border rounded-xl p-4 shadow-sm">
                        <h2 className="text-lg font-bold mb-3 text-zinc-800">Lista de Produtos</h2>
                        <ul className="divide-y divide-zinc-100">
                            {dados.map((prod: IProduto) => (
                                <li key={prod.id} className="py-2 flex justify-between text-sm">
                                    <span className="font-medium text-zinc-700">{prod.nome}</span>
                                    <span className="text-zinc-500">Qtd: {prod.quantidadeAtual}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );

            case "unidades":
                return (
                    <div className="w-full max-w-md bg-white border rounded-xl p-4 shadow-sm">
                        <h2 className="text-lg font-bold mb-3 text-zinc-800">Unidades de Medida</h2>
                        <ul className="flex flex-wrap gap-2">
                            {dados.map((un: IUnidadeMedida) => (
                                <span key={un.id} className="bg-zinc-100 text-zinc-800 text-xs font-semibold px-3 py-1.5 rounded-md border border-zinc-200">
                                    {un.descricao} ({un.sigla})
                                </span>
                            ))}
                        </ul>
                    </div>
                );

            case "operacoes":
                return (
                    <div className="w-full max-w-md bg-white border rounded-xl p-4 shadow-sm">
                        <h2 className="text-lg font-bold mb-3 text-zinc-800">Operacoes de Estoque</h2>
                        <ul className="divide-y divide-zinc-100">
                            {dados.map((op: IOperacao) => (
                                <li key={op.id} className="py-2 flex justify-between text-sm items-center">
                                    <span className="font-medium text-zinc-700">{op.motivo}</span>
                                    <span className={`text-xs px-2 py-0.5 font-bold rounded-full ${op.entradasaida === 'entrada' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {op.entradasaida.toUpperCase()}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );

            case "categorias":
                return (
                    <div className="w-full max-w-md bg-white border rounded-xl p-4 shadow-sm">
                        <h2 className="text-lg font-bold mb-3 text-zinc-800">Categorias de Produtos</h2>
                        <ul className="list-disc list-inside text-sm text-zinc-600 space-y-1">
                            {dados.map((cat: ICategoriaProduto) => (
                                <li key={cat.id} className="font-medium">{cat.nome}</li>
                            ))}
                        </ul>
                    </div>
                );
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 gap-6 w-full min-h-screen bg-zinc-50/50">
            <main className="w-full flex justify-center mt-4">
                {handleContent()}
            </main>
        </div>
    );
}