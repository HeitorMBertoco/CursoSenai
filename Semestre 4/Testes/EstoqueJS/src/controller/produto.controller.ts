import { Response, Request } from "express";
import prisma from "../db";

export const ListAllProdutos = async function (req: Request, res: Response,): Promise<void> {
    try {
        const { nome } = req.query;

        let filtro: any = {};
        if (nome && typeof nome === "string" && nome.trim() != "") {
            filtro.nome = {
                contains: nome.trim(),
                mode: "insensitive",
            };
        }

        const produtos = await prisma.produtoModel.findMany({
            where: filtro,
            include: {
                categoria: true,
                unidadeMedida: true,
            },
        });

        const resposeData = JSON.parse(
            JSON.stringify(produtos, (key, value) =>
                typeof value === "bigint" ? value.toString() : value,
            ),
        );

        res.json(resposeData);
    } catch (err: any) {
        console.error("Erro na busca:\n", err.stack || err.message);
        res.status(500).json({ error: "Falha ao buscar produto" });
    }
};

export const CriarProduto = async function (req: Request, res: Response,): Promise<void> {
    try {
        const {
            nome,
            nomearquivofoto,
            descricao,
            quantidadeAtual,
            categoriaId,
            unidadeMedidaId,
        } = req.body;

        const NewProduto = await prisma.produtoModel.create({
            data: {
                nome: nome,
                nomearquivofoto: nomearquivofoto,
                descricao: descricao,
                quantidadeAtual: quantidadeAtual,
                categoriaId: Number(categoriaId),
                unidadeMedidaId: Number(unidadeMedidaId),
            },
        });

        res.status(201).json(NewProduto);
    } catch (err: any) {
        console.error("Erro ao criar produto:\n", err.stack || err.message);
        res.status(500).json({ error: "Falha ao Criar Produto" });
    }
};

export const AlterarProduto = async function (
    req: Request,
    res: Response,
): Promise<void> {
    const { id } = req.query;
    const { nome, nomearquivofoto, descricao, quantidadeAtual } = req.body;
    try {
        const updatedProduto = await prisma.produtoModel.update({
            where: { id: Number(id) || 0 },
            data: {
                ...(nome && { nome }),
                ...(nomearquivofoto && { nomearquivofoto }),
                ...(quantidadeAtual && { quantidadeAtual: Number(quantidadeAtual) }),
                ...(descricao && { descricao }),
            },
        });
        res.json(updatedProduto);
    } catch (err: any) {
        console.error("Erro Ao Aplicar Atualização: \n", err.stack || err.message);
        res.status(500).json({ error: "erro ao aplicar atualização" });
    }
};

export const DeletarProduto = async function (
    req: Request,
    res: Response,
): Promise<void> {
    try {
        const query = req.query || {};
        const id = query.id;
        const deletedUser = await prisma.produtoModel.delete({
            where: { id: Number(id) || 0 },
        });
        res.status(204).json(deletedUser);
    } catch (err: any) {
        console.error("Erro ao deletar Objeto: \n", err.stack || err.message);
        res.status(500).json({ error: "Erro ao Deletar objeto" });
    }
};
