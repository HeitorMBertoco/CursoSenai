import { Router } from "express";
import { ListAllAluno, CreateAluno } from "../Controller/user.controller";

const router = Router();

router.get("/", ListAllAluno);
router.post("/", CreateAluno )

export default router;