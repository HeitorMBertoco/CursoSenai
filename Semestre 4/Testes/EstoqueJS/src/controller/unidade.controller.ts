import { Response, Request } from "express";
import prisma from "../db";

export const ListAllUnidade = async function (req: Request, res: Response): Promise<void> {
    try {
        const unidadeMed = await prisma.unidadeMedida.findMany({
            where: {},
            include:{
                produtos: true
            }
    });
        res.json(unidadeMed)
    }
    catch (err: any) {
        console.error("Erro na busca:\n", err.stack || err.message);
        res.status(500).json({ error: "Falha ao buscar unidade" })
    }
}
export const CriarUnidade = async function (req: Request, res: Response): Promise<void> {
    try {
        const { sigla, fracionavel, descricao } = req.body
        const NewUnidade = await prisma.unidadeMedida.create({
            data: {

                descricao: descricao,
                fracionavel: fracionavel,
                sigla: sigla,
            }
        });
        res.status(201).json(NewUnidade);
    }
    catch (err: any) {
        console.error("Erro ao criar unidade:\n", err.stack || err.message)
        res.status(500).json({ error: "Falha ao Criar unidade" })
    }


};
export const AlterarUnidadeMedida = async function (req: Request, res: Response): Promise<void> {
    const { id } = req.query
    const { sigla, fracionavel, descricao } = req.body
    try {
        const updatedUser = await prisma.unidadeMedida.update({
            where: { id: Number(id) },
            data: {
                ...(sigla && { sigla }),
                ...(fracionavel && { fracionavel }),
                ...(descricao && { descricao }),
            }
        });
        res.json(updatedUser)
    }
    catch (err: any) {
        console.error("Erro Ao Aplicar Atualização: \n", err.stack || err.message)
        res.status(500).json({ error: "erro ao aplicar atualização" })
    }

};
export const DeletarUnidade = async function (req: Request, res: Response): Promise<void> {
    const query = req.query || {}
    const id = query.id
    try {
        const deletedUser = await prisma.unidadeMedida.delete({
            where: { id: Number(id) }
        });
        res.status(204).json(deletedUser)
    }
    catch (err: any) {
        console.error("Erro ao deletar Objeto: \n", err.stack || err.message)
        res.status(500).json({ error: "Erro ao Deletar objeto" })
    }


}
