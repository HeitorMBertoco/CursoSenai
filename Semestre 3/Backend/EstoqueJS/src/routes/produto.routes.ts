import { Router } from "express";
import { ListAllProdutos, CriarProduto, AlterarProduto, DeletarProduto } from "../controller/produto.controller";

const router = Router();

router.get("/", ListAllProdutos)

router.post("/", CriarProduto)

router.patch("/", AlterarProduto)

router.delete("/", DeletarProduto)

export default router;