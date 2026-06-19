import { Request, Response } from "express";
import prisma from "../db";

export const adicionarImagem = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.query;

  if (!req.file) {
    res.status(400).json({ error: "Arquivo não enviado" });
    return;
  }

  const imagem = await prisma.imagemProduto.create({
    data: {
      url: req.file.filename,
      produtoId: Number(id)
    }
  });

  res.json(imagem);
};