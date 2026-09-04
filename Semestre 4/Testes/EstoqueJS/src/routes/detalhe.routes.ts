import { Router } from "express";
import { ListAllDetalhe, CriarDetalheComItem, AdicionarProdutoAoDetalhe, AlterarDetalhe, DeletarDetalhe } from "../controller/detalhe.controller";

const router = Router();

router.get("/", ListAllDetalhe);
router.post("/", CriarDetalheComItem);
router.post("/produto/", AdicionarProdutoAoDetalhe);
router.patch("/", AlterarDetalhe);
router.delete("/", DeletarDetalhe);

export default router;