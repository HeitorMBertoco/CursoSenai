import { Response, Request } from "express";
import prisma from "../db";

export const ListAllOperacaoEstoque = async function (req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.query;

        const where = id ? { id: Number(id) } : {};

        const operacoes = await prisma.operacaoEstoque.findMany({
            where,
            include: {
                operacaoEstoqueDetalhe: {
                    include: {
                        itens: {
                            include: {
                                produto: {

                                    include: {

                                        unidadeMedida: {
                                            select: {
                                                id: true,
                                                sigla: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        const responseData = JSON.parse(
            JSON.stringify(operacoes, (key, value) =>
                typeof value === 'bigint' ? value.toString() : value
            )
        );
        res.json(responseData);
    }
    catch (err: any) {
        console.error("Erro na busca:\n", err.stack || err.message);
        res.status(500).json({ error: "Falha ao buscar operacao estoque" });
    }
};

export const CriarOperacaoEstoque = async function (req: Request, res: Response): Promise<void> {
    try {
        const { motivo, entradasaida } = req.body;

        if (!motivo || !entradasaida) {
            res.status(400).json({ error: "Campos obrigatórios ausentes" });
            return;
        }

        const NewOperacao = await prisma.operacaoEstoque.create({
            data: {
                motivo,
                entradasaida
            },
            include: {
                operacaoEstoqueDetalhe: {
                    include: {
                        itens: {
                            include: {
                                produto: true
                            }
                        }
                    }
                }
            }
        });

        res.status(201).json(NewOperacao);
    }
    catch (err: any) {
        console.error("Erro ao criar operacao estoque:\n", err.stack || err.message);
        res.status(500).json({ error: "Falha ao Criar operacao estoque" });
    }
};

export const AlterarOperacaoEstoque = async function (req: Request, res: Response): Promise<void> {
    const { id } = req.query;
    const { motivo, entradasaida } = req.body;

    try {
        if (!id) {
            res.status(400).json({ error: "ID não fornecido na query" });
            return;
        }

        const updatedOperacao = await prisma.operacaoEstoque.update({
            where: { id: Number(id) },
            data: {
                ...(motivo && { motivo }),
                ...(entradasaida && { entradasaida })
            },
            include: {
                operacaoEstoqueDetalhe: {
                    include: {
                        itens: {
                            include: {
                                produto: true
                            }
                        }
                    }
                }
            }
        });

        res.json(updatedOperacao);
    }
    catch (err: any) {
        console.error("Erro Ao Aplicar Atualização: \n", err.stack || err.message);
        res.status(500).json({ error: "erro ao aplicar atualização" });
    }
};

export const DeletarOperacaoEstoque = async function (req: Request, res: Response): Promise<void> {
    const query = req.query || {};
    const id = query.id;

    try {
        if (!id) {
            res.status(400).json({ error: "ID não fornecido na query" });
            return;
        }

        const deletedOperacao = await prisma.operacaoEstoque.delete({
            where: { id: Number(id) }
        });

        res.status(204).json(deletedOperacao);
    }
    catch (err: any) {
        console.error("Erro ao deletar Objeto: \n", err.stack || err.message);
        res.status(500).json({ error: "Erro ao Deletar objeto" });
    }
};