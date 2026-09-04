import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Request, Response } from 'express';
import { 
  ListAllCategoria, 
  CriarCategoria, 
  AlterarCategoria, 
  DeletarCategoria 
} from '../../../src/controller/categoria.controller';

// 1. Mock do Prisma respeitando o "export default" e o modelo correto (categoriaProduto)
vi.mock('../../../src/db', () => {
  return {
    default: {
      categoriaProduto: {
        findMany: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
        delete: vi.fn(),
      },
    },
  };
});

import prisma from '../../../src/db';

describe('Categoria Controller - Unit Tests', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: any;
  let statusMock: any;

  beforeEach(() => {
    vi.clearAllMocks();

    jsonMock = vi.fn();
    statusMock = vi.fn().mockImplementation(() => ({
      json: jsonMock
    }));

    res = {
      status: statusMock,
      json: jsonMock,
    };
  });

  // ==========================================
  // TESTES: LISTAR CATEGORIA
  // ==========================================
  describe('ListAllCategoria', () => {
    it('deve listar categorias aplicando o filtro insensível por nome', async () => {
      req = {
        query: { nome: ' alimentos ' }, // Espaços para testar o trim()
      };

      const mockCategorias = [{ id: 1, nome: 'Alimentos', produtos: [] }];
      vi.mocked(prisma.categoriaProduto.findMany).mockResolvedValue(mockCategorias as any);

      await ListAllCategoria(req as Request, res as Response);

      expect(prisma.categoriaProduto.findMany).toHaveBeenCalledWith({
        where: {
          nome: {
            contains: 'alimentos',
            mode: 'insensitive',
          },
        },
        include: { produtos: true },
      });
      expect(jsonMock).toHaveBeenCalledWith(mockCategorias);
    });

    it('deve retornar status 500 com a mensagem de erro específica se a busca falhar', async () => {
      req = { query: {} };
      vi.mocked(prisma.categoriaProduto.findMany).mockRejectedValue(new Error('Erro de banco'));

      await ListAllCategoria(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Falha ao buscar usuario' });
    });
  });

  // ==========================================
  // TESTES: CRIAR CATEGORIA
  // ==========================================
  describe('CriarCategoria', () => {
    it('deve criar uma nova categoria com sucesso e retornar 201', async () => {
      req = {
        body: {
          nome: 'Bebidas',
          descricao: 'Sucos, refrigerantes e águas',
        },
      };

      const categoriaCriada = { id: 2, ...req.body };
      vi.mocked(prisma.categoriaProduto.create).mockResolvedValue(categoriaCriada as any);

      await CriarCategoria(req as Request, res as Response);

      expect(prisma.categoriaProduto.create).toHaveBeenCalledWith({
        data: {
          nome: 'Bebidas',
          descricao: 'Sucos, refrigerantes e águas',
        },
      });
      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(categoriaCriada);
    });

    it('deve retornar status 500 se falhar ao criar categoria', async () => {
      req = { body: {} };
      vi.mocked(prisma.categoriaProduto.create).mockRejectedValue(new Error('Postgres offline'));

      await CriarCategoria(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Falha ao Criar categoria' });
    });
  });

  // ==========================================
  // TESTES: ALTERAR CATEGORIA
  // ==========================================
  describe('AlterarCategoria', () => {
    it('deve atualizar a categoria usando o id convertido para número', async () => {
      req = {
        query: { id: '5' },
        body: { nome: 'Bebidas Alcoólicas' },
      };

      const categoriaAtualizada = { id: 5, nome: 'Bebidas Alcoólicas', descricao: 'Antiga descrição' };
      vi.mocked(prisma.categoriaProduto.update).mockResolvedValue(categoriaAtualizada as any);

      await AlterarCategoria(req as Request, res as Response);

      expect(prisma.categoriaProduto.update).toHaveBeenCalledWith({
        where: { id: 5 },
        data: { nome: 'Bebidas Alcoólicas' }, // Apenas o nome pois a descrição não foi enviada no body
      });
      expect(jsonMock).toHaveBeenCalledWith(categoriaAtualizada);
    });

    it('deve retornar status 500 se falhar na atualização', async () => {
      req = { query: { id: '1' }, body: {} };
      vi.mocked(prisma.categoriaProduto.update).mockRejectedValue(new Error('ID inexistente'));

      await AlterarCategoria(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'erro ao aplicar atualização' });
    });
  });

  // ==========================================
  // TESTES: DELETAR CATEGORIA
  // ==========================================
  describe('DeletarCategoria', () => {
    it('deve deletar a categoria e retornar status 204', async () => {
      req = {
        query: { id: '12' },
      };

      vi.mocked(prisma.categoriaProduto.delete).mockResolvedValue({ id: 12 } as any);

      await DeletarCategoria(req as Request, res as Response);

      expect(prisma.categoriaProduto.delete).toHaveBeenCalledWith({
        where: { id: 12 },
      });
      expect(statusMock).toHaveBeenCalledWith(204);
    });

    it('deve retornar status 500 se falhar ao deletar', async () => {
      req = { query: { id: '999' } };
      vi.mocked(prisma.categoriaProduto.delete).mockRejectedValue(new Error('Chave estrangeira ativa'));

      await DeletarCategoria(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Erro ao Deletar objeto' });
    });
  });
});