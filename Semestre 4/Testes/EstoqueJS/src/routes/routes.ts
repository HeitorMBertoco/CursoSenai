import { Router } from 'express'
import categoriaRoutes from './categoria.routes' 
import produtoRoutes from './produto.routes'
import unidadeRoutes from './unidade.routes'
import operacaoRoutes from './operacao.routes'
import detalheRoutes from './detalhe.routes'
import imagemRoutes from './imagem.routes'

const router = Router()
router.use('/imagens', imagemRoutes)
router.use('/categorias', categoriaRoutes)
router.use('/operacoes', operacaoRoutes)
router.use('/produtos', produtoRoutes)
router.use('/unidades', unidadeRoutes)
router.use('/detalhes', detalheRoutes)

export default router