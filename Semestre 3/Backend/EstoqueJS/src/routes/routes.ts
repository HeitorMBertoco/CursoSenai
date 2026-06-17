import { Router } from 'express'
import categoriaRoutes from './categoria.routes' 
import produtoRoutes from './produto.routes'
import unidadeRoutes from './unidade.routes'
import operacaoRoutes from './operacao.routes'

const router = Router()

router.use('/categorias', categoriaRoutes)
router.use('/operacoes', operacaoRoutes)
router.use('/produtos', produtoRoutes)
router.use('/unidades', unidadeRoutes)

export default router