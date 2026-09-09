"use client";

import Button from "@/components/ui/button";

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-zinc-50 px-4 py-8">
            <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-3xl items-center justify-center">
                <section className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <div className="mb-6">
                        <h1 className="text-2xl font-semibold text-zinc-900">
                            Estoque
                        </h1>

                        <p className="mt-1 text-sm text-zinc-500">
                            Selecione uma opção para acessar os registros.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Button
                            text="Operações de Estoque"
                            onClick="/crudpage?pg=operacoes"
                            type="white"
                        />

                        <Button
                            text="Unidades de Medida"
                            onClick="/crudpage?pg=unidades"
                            type="white"
                        />

                        <Button
                            text="Categorias"
                            onClick="/crudpage?pg=categorias"
                            type="white"
                        />

                        <Button
                            text="Produtos"
                            onClick="/crudpage?pg=produtos"
                            type="white"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}