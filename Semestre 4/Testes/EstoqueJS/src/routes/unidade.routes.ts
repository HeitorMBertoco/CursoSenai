import { Router } from "express";
import { ListAllUnidade, CriarUnidade, AlterarUnidadeMedida, DeletarUnidade } from "../controller/unidade.controller";

const router = Router();

router.get("/", ListAllUnidade)

router.post("/", CriarUnidade)

router.patch("/", AlterarUnidadeMedida)

router.delete("/", DeletarUnidade)
export default router;