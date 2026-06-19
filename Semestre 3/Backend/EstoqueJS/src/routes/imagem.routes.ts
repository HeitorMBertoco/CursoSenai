import { Router } from "express";
import { upload } from "../middleware/upload";
import { adicionarImagem } from "../controller/imagem.controller";

const router = Router();

router.post('/',  upload.single("imagem"), adicionarImagem)

export default router