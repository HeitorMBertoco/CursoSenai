import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Request, Response } from 'express';
import { 
  ListAllUnidade, 
  CriarUnidade, 
  AlterarUnidadeMedida, 
  DeletarUnidade 
} from '../../../src/controller/unidade.controller';

// 1. Mock do Prisma mapeando o modelo exato: unidadeMedida
vi.mock('../../../src/db', () => {
  return {
    default: {
      unidadeMedida: {
        findMany: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
        delete: vi.fn(),
      },
    },
  };
});

import prisma from '../../../src/db';

describe('Unidade Medida Controller - Unit Tests', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: any;
  let statusMock: any;

  beforeEach(() => {
    vi.clearAllMocks();

    // Silencia os console.error do catch para o terminal do Vitest ficar limpo
    vi.spyOn(console, 'error').mockImplementation(() => {});

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
  // TESTES: LISTAR UNIDADES
  // ==========================================
  describe('ListAllUnidade', () => {
    it('deve listar todas as unidades trazendo os produtos relacionados', async () => {
      req = {};
      const mockUnidades = [{ id: 1, sigla: 'KG', fracionavel: true, produtos: [] }];
      vi.mocked(prisma.unidadeMedida.findMany).mockResolvedValue(mockUnidades as any);

      await ListAllUnidade(req as Request, res as Response);

      expect(prisma.unidadeMedida.findMany).toHaveBeenCalledWith({
        where: {},
        include: { produtos: true }
      });
      expect(jsonMock).toHaveBeenCalledWith(mockUnidades);
    });

    it('deve retornar status 500 com erro específico se a listagem falhar', async () => {
      req = {};
      vi.mocked(prisma.unidadeMedida.findMany).mockRejectedValue(new Error('Falha Postgres'));

      await ListAllUnidade(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Falha ao buscar unidade' });
    });
  });

  // ==========================================
  // TESTES: CRIAR UNIDADE
  // ==========================================
  describe('CriarUnidade', () => {
    it('deve criar uma unidade de medida e retornar status 201', async () => {
      req = {
        body: {
          sigla: 'UN',
          fracionavel: false,
          descricao: 'Unidade'
        }
      };

      const unidadeCriada = { id: 2, ...req.body };
      vi.mocked(prisma.unidadeMedida.create).mockResolvedValue(unidadeCriada as any);

      await CriarUnidade(req as Request, res as Response);

      expect(prisma.unidadeMedida.create).toHaveBeenCalledWith({
        data: {
          descricao: 'Unidade',
          fracionavel: false,
          sigla: 'UN'
        }
      });
      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(unidadeCriada);
    });

    it('deve retornar status 500 se o bloco catch for acionado na criação', async () => {
      req = { body: {} };
      vi.mocked(prisma.unidadeMedida.create).mockRejectedValue(new Error('Erro de inserção'));

      await CriarUnidade(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Falha ao Criar unidade' });
    });
  });

  // ==========================================
  // TESTES: ALTERAR UNIDADE MEDIDA
  // ==========================================
  describe('AlterarUnidadeMedida', () => {
    it('deve atualizar os campos informados convertendo o id para número', async () => {
      req = {
        query: { id: '3' },
        body: { sigla: 'LT', fracionavel: true }
      };

      const unidadeAtualizada = { id: 3, sigla: 'LT', fracionavel: true, descricao: 'Litros' };
      vi.mocked(prisma.unidadeMedida.update).mockResolvedValue(unidadeAtualizada as any);

      await AlterarUnidadeMedida(req as Request, res as Response);

      expect(prisma.unidadeMedida.update).toHaveBeenCalledWith({
        where: { id: 3 },
        data: { sigla: 'LT', fracionavel: true } // Não passa a descrição porque veio vazia no body
      });
      expect(jsonMock).toHaveBeenCalledWith(unidadeAtualizada);
    });

    it('deve retornar status 500 se falhar na atualização', async () => {
      req = { query: { id: '1' }, body: {} };
      vi.mocked(prisma.unidadeMedida.update).mockRejectedValue(new Error('Erro'));

      await AlterarUnidadeMedida(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'erro ao aplicar atualização' });
    });
  });

  // ==========================================
  // TESTES: DELETAR UNIDADE
  // ==========================================
  describe('DeletarUnidade', () => {
    it('deve remover a unidade de medida e retornar status 204', async () => {
      req = {
        query: { id: '10' }
      };

      vi.mocked(prisma.unidadeMedida.delete).mockResolvedValue({ id: 10 } as any);

      await DeletarUnidade(req as Request, res as Response);

      expect(prisma.unidadeMedida.delete).toHaveBeenCalledWith({
        where: { id: 10 }
      });
      expect(statusMock).toHaveBeenCalledWith(204);
    });

    it('deve retornar status 500 se o bloco catch for acionado na deleção', async () => {
      req = { query: { id: '999' } };
      vi.mocked(prisma.unidadeMedida.delete).mockRejectedValue(new Error('Chave vinculada'));

      await DeletarUnidade(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Erro ao Deletar objeto' });
    });
  });
});