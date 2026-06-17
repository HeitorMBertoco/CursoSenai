import { Router } from "express";
import { ListAllOperacaoEstoque, CriarOperacaoEstoque, AlterarOperacaoEstoque, DeletarOperacaoEstoque } from "../controller/operacao.controller";

const router = Router();

router.get("/", ListAllOperacaoEstoque);

router.post("/", CriarOperacaoEstoque);

router.patch("/", AlterarOperacaoEstoque);

router.delete("/", DeletarOperacaoEstoque);
export default router;