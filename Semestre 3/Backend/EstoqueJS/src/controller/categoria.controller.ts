import { Response, Request } from "express";
import prisma from "../db";

export const ListAllCategoria = async function (req: Request, res: Response): Promise<void> {
    try {

        const { nome } = req.query

        let filtro: any = {};

        if (nome && typeof nome === 'string' && nome.trim() != '') {
            filtro.nome = {
                contains: nome.trim(),
                mode: "insensitive"
            }
        }


        const categoria = await prisma.categoriaProduto.findMany({
            where: filtro,
            include: {
                produtos: true
            }
        });

        const resposeData = JSON.parse(
            JSON.stringify(categoria, (key, value) =>
                typeof value === 'bigint' ? value.toString() : value
            )

        );

        res.json(resposeData)

    }
    catch (err: any) {
        console.error("Erro na busca:\n", err.stack || err.message);
        res.status(500).json({ error: "Falha ao buscar usuario" })
    }
}
export const CriarCategoria = async function (req: Request, res: Response): Promise<void> {
    try {
        const { nome, descricao } = req.body
        const NewCategoria = await prisma.categoriaProduto.create({
            data: {
                nome: nome,

                descricao: descricao,

            }
        });
        res.status(201).json(NewCategoria);
    }
    catch (err: any) {
        console.error("Erro ao criar categoria:\n", err.stack || err.message)
        res.status(500).json({ error: "Falha ao Criar categoria" })
    }


};
export const AlterarCategoria = async function (req: Request, res: Response): Promise<void> {
    const { id } = req.query
    const { nome, descricao } = req.body
    try {
        const updatedUser = await prisma.categoriaProduto.update({
            where: { id: Number(id) },
            data: {
                ...(nome && { nome }), 
                ...(descricao && { descricao }),
            }
        });
        res.json(updatedUser)
    }
    catch (err: any) {
        console.error("Erro Ao Aplicar Atualização: \n", err.stack || err.message)
        res.status(500).json({error: "erro ao aplicar atualização"})
    }

}

export const DeletarCategoria = async function(req: Request, res: Response): Promise<void> {
    const query = req.query || {}
        const id = query.id
    try {
        const deletedUser = await prisma.categoriaProduto.delete({
            where: {id: Number(id)}
        });
        res.status(204).json(deletedUser)
    }
    catch(err: any){
        console.error("Erro ao deletar Objeto: \n", err.stack || err.message)
        res.status(500).json({error: "Erro ao Deletar objeto"})
    }


}

