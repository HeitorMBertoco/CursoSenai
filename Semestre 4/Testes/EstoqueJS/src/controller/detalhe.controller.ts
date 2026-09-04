import { Response, Request } from "express";
import prisma from "../db";

export const ListAllDetalhe = async function (req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.query;
        
        const where = id ? { id: Number(id) } : {};
        
        const detalhes = await prisma.operacaoEstoqueDetalhe.findMany({
            where,
            include: {
                itens: {
                    include: {
                        produto: true
                    }
                },
                operacaoEstoque: true
            }
        });

        const responseData = JSON.parse(
            JSON.stringify(detalhes, (key, value) =>
                typeof value === 'bigint' ? value.toString() : value
            )
        );
        res.json(responseData);
    }
    catch (err: any) {
        console.error("Erro na busca:\n", err.stack || err.message);
        res.status(500).json({ error: "Falha ao buscar detalhe" });
    }
};

export const CriarDetalheComItem = async function (req: Request, res: Response): Promise<void> {
    try {
         console.log("Body recebido:", req.body);
        const { operacaoEstoqueId, quantidade, precoCusto, produtoId } = req.body;

        if (!operacaoEstoqueId || !quantidade || !precoCusto || !produtoId) {
            console.log("Validação falhou!");
            res.status(400).json({ error: "Campos obrigatórios ausentes" });
            return;
        }

        const newDetalhe = await prisma.operacaoEstoqueDetalhe.create({
            data: {
                operacaoEstoqueId: Number(operacaoEstoqueId),
                itens: {
                    create: {
                        quantidade: Number(quantidade),
                        precoCusto: Number(precoCusto),
                        produtoId: Number(produtoId)
                    }
                }
            },
            include: {
                itens: {
                    include: {
                        produto: true
                    }
                },
                operacaoEstoque: true
            }
        });

        res.status(201).json(newDetalhe);
    }
    catch (err: any) {
        console.error("Erro ao criar detalhe:\n", err.stack || err.message);
        res.status(500).json({ error: "Falha ao criar detalhe" });
    }
};

export const AdicionarProdutoAoDetalhe = async function (req: Request, res: Response): Promise<void> {
    try {
        const { operacaoEstoqueDetalheId, quantidade, precoCusto, produtoId } = req.body;

        if (!operacaoEstoqueDetalheId || !quantidade || !precoCusto || !produtoId) {
            res.status(400).json({ error: "Campos obrigatórios ausentes" });
            return;
        }

        const novoItem = await prisma.operacaoEstoqueDetalheItem.create({
            data: {
                operacaoEstoqueDetalheId: Number(operacaoEstoqueDetalheId),
                quantidade: Number(quantidade),
                precoCusto: Number(precoCusto),
                produtoId: Number(produtoId)
            },
            include: {
                produto: true
            }
        });

        res.status(201).json(novoItem);
    }
    catch (err: any) {
        console.error("Erro ao adicionar produto:\n", err.stack || err.message);
        if (err.code === "P2002") {
            res.status(400).json({ error: "Produto já adicionado a este detalhe" });
            return;
        }
        res.status(500).json({ error: "Falha ao adicionar produto" });
    }
};

export const AlterarDetalhe = async function (req: Request, res: Response): Promise<void> {
    const { id } = req.query;
    const { quantidade, precoCusto } = req.body;

    try {
        if (!id) {
            res.status(400).json({ error: "ID não fornecido na query" });
            return;
        }

        if (!quantidade && !precoCusto) {
            res.status(400).json({ error: "Nenhum campo para atualizar" });
            return;
        }

        const updatedDetalhe = await prisma.operacaoEstoqueDetalheItem.update({
            where: { id: Number(id) },
            data: {
                ...(quantidade && { quantidade: Number(quantidade) }),
                ...(precoCusto && { precoCusto: Number(precoCusto) })
            },
            include: {
                produto: true
            }
        });

        res.json(updatedDetalhe);
    }
    catch (err: any) {
        console.error("Erro ao atualizar detalhe:\n", err.stack || err.message);
        res.status(500).json({ error: "Falha ao atualizar detalhe" });
    }
};

export const DeletarDetalhe = async function (req: Request, res: Response): Promise<void> {
    const query = req.query || {};
    const id = query.id;

    try {
        if (!id) {
            res.status(400).json({ error: "ID não fornecido na query" });
            return;
        }

        const deletedDetalhe = await prisma.operacaoEstoqueDetalheItem.delete({
            where: { id: Number(id) }
        });

        res.status(204).json(deletedDetalhe);
    }
    catch (err: any) {
        console.error("Erro ao deletar detalhe:\n", err.stack || err.message);
        res.status(500).json({ error: "Falha ao deletar detalhe" });
    }
};