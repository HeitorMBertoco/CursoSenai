// tests/unit/controller/produto.controller.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Request, Response } from 'express';
import { 
  ListAllProdutos, 
  CriarProduto, 
  AlterarProduto, 
  DeletarProduto 
} from '../../../src/controller/produto.controller';

vi.mock('../../../src/db', () => {
  return {
    default: {
      produtoModel: {
        findMany: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
        delete: vi.fn(),
      },
    },
  };
});

import prisma from '../../../src/db';

describe('Produto Controller - Unit Tests', () => {
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

  describe('CriarProduto', () => {
    it('deve criar um produto com sucesso e retornar status 201', async () => {
      req = {
        body: {
          nome: 'Teclado Mecânico',
          nomearquivofoto: 'teclado.jpg',
          descricao: 'Teclado RGB',
          quantidadeAtual: 15,
          categoriaId: '2',
          unidadeMedidaId: '4',
        },
      };

      const produtoCriado = { id: 1, ...req.body, categoriaId: 2, unidadeMedidaId: 4 };
      vi.mocked(prisma.produtoModel.create).mockResolvedValue(produtoCriado as any);

      await CriarProduto(req as Request, res as Response);

      expect(prisma.produtoModel.create).toHaveBeenCalledWith({
        data: {
          nome: 'Teclado Mecânico',
          nomearquivofoto: 'teclado.jpg',
          descricao: 'Teclado RGB',
          quantidadeAtual: 15,
          categoriaId: 2,
          unidadeMedidaId: 4,
        },
      });
      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(produtoCriado);
    });

    it('deve retornar status 500 em caso de erro interno', async () => {
      req = { body: {} };
      vi.mocked(prisma.produtoModel.create).mockRejectedValue(new Error('Erro de banco'));

      await CriarProduto(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Falha ao Criar Produto' });
    });
  });

  describe('ListAllProdutos', () => {
    it('deve listar produtos aplicando o filtro por nome', async () => {
      req = { query: { nome: ' mouse ' } };
      const mockProdutos = [{ id: 1, nome: 'Mouse Gamer', quantidadeAtual: 5 }];
      vi.mocked(prisma.produtoModel.findMany).mockResolvedValue(mockProdutos as any);

      await ListAllProdutos(req as Request, res as Response);

      expect(prisma.produtoModel.findMany).toHaveBeenCalledWith({
        where: {
          nome: { contains: 'mouse', mode: 'insensitive' },
        },
        include: { categoria: true, unidadeMedida: true },
      });
      expect(jsonMock).toHaveBeenCalledWith(mockProdutos);
    });

    it('deve retornar status 500 se a listagem falhar', async () => {
      req = { query: {} };
      vi.mocked(prisma.produtoModel.findMany).mockRejectedValue(new Error('Erro'));

      await ListAllProdutos(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Falha ao buscar produto' });
    });
  });

  describe('AlterarProduto', () => {
    it('deve atualizar o produto com base no ID da query', async () => {
      req = {
        query: { id: '10' },
        body: { nome: 'Novo Nome', quantidadeAtual: '30' },
      };

      const produtoAtualizado = { id: 10, nome: 'Novo Nome', quantidadeAtual: 30 };
      vi.mocked(prisma.produtoModel.update).mockResolvedValue(produtoAtualizado as any);

      await AlterarProduto(req as Request, res as Response);

      expect(prisma.produtoModel.update).toHaveBeenCalledWith({
        where: { id: 10 },
        data: { nome: 'Novo Nome', quantidadeAtual: 30 },
      });
      expect(jsonMock).toHaveBeenCalledWith(produtoAtualizado);
    });
  });

  describe('DeletarProduto', () => {
    it('deve deletar o produto e retornar status 204', async () => {
      req = { query: { id: '99' } };
      vi.mocked(prisma.produtoModel.delete).mockResolvedValue({ id: 99 } as any);

      await DeletarProduto(req as Request, res as Response);

      expect(prisma.produtoModel.delete).toHaveBeenCalledWith({ where: { id: 99 } });
      expect(statusMock).toHaveBeenCalledWith(204);
    });
  });
});