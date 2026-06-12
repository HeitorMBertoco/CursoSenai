import { Response, Request } from "express";
import prisma from "../db";

export const ListAllAluno = async function (req: Request, res: Response): Promise<void> {
    try {
        const { nome, genero } = req.query;

        let filtroWhere: any = {};

        if (nome && typeof nome === 'string' && nome.trim() !== '') {
            filtroWhere.nome = {
                contains: nome.trim(),  
                mode: 'insensitive'     
            };
        }

        if (genero && typeof genero === 'string' && genero.trim() !== '') {
            filtroWhere.genero = genero.trim(); 
        }

        const users = await prisma.aluno.findMany({
            where: filtroWhere
        });

        const responseData = JSON.parse(
            JSON.stringify(users, (key, value) =>
                typeof value === 'bigint' ? value.toString() : value
            )
        );

        res.json(responseData);
    }
    catch (err: any) {
        console.error("Erro real na busca:\n", err.stack || err.message);
        res.status(500).json({ error: "Falha ao buscar usuarios" });
    }
};

export const CreateAluno = async function (req: Request, res: Response): Promise<void> {
    try {
        const { nome, genero, idade } = req.body;
        const NewAluno = await prisma.aluno.create({
            data: {
                nome: nome,
                genero: genero,
                idade: Number(idade)
            }
        });
        res.status(201).json(NewAluno);
    }
    catch (err: any) {
        console.error(err);
        res.status(500).json({ error: "Falha ao criar usuario" });
    }
};
