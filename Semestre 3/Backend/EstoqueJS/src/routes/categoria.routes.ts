import { Router } from "express";
import { ListAllCategoria, CriarCategoria, AlterarCategoria, DeletarCategoria } from "../controller/categoria.controller";

const router = Router();

router.get("/", ListAllCategoria)

router.post("/", CriarCategoria)

router.patch("/", AlterarCategoria)

router.delete("/", DeletarCategoria)
export default router;