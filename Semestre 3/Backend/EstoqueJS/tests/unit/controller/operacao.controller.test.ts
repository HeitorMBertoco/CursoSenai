import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Request, Response } from 'express';
import { 
  ListAllOperacaoEstoque, 
  CriarOperacaoEstoque, 
  AlterarOperacaoEstoque, 
  DeletarOperacaoEstoque 
} from '../../../src/controller/operacao.controller';

// 1. Mock do Prisma apontando para o modelo real: operacaoEstoque
vi.mock('../../../src/db', () => {
  return {
    default: {
      operacaoEstoque: {
        findMany: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
        delete: vi.fn(),
      },
    },
  };
});

import prisma from '../../../src/db';

describe('Operacao Estoque Controller - Unit Tests', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: any;
  let statusMock: any;

  beforeEach(() => {
    vi.clearAllMocks();

    // Silencia os console.error do catch para manter o terminal limpo
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
  // TESTES: LISTAR OPERAÇÕES
  // ==========================================
  describe('ListAllOperacaoEstoque', () => {
    it('deve listar todas as operações se o ID não for informado na query', async () => {
      req = { query: {} };
      const mockOperacoes = [{ id: 1, motivo: 'Inventário', entradasaida: 'E' }];
      vi.mocked(prisma.operacaoEstoque.findMany).mockResolvedValue(mockOperacoes as any);

      await ListAllOperacaoEstoque(req as Request, res as Response);

      expect(prisma.operacaoEstoque.findMany).toHaveBeenCalledWith({
        where: {},
        include: expect.any(Object) // Valida que enviou a estrutura profunda de include
      });
      expect(jsonMock).toHaveBeenCalledWith(mockOperacoes);
    });

    it('deve filtrar as operações por ID caso ele seja enviado na query', async () => {
      req = { query: { id: '5' } };
      vi.mocked(prisma.operacaoEstoque.findMany).mockResolvedValue([] as any);

      await ListAllOperacaoEstoque(req as Request, res as Response);

      expect(prisma.operacaoEstoque.findMany).toHaveBeenCalledWith({
        where: { id: 5 },
        include: expect.any(Object)
      });
    });

    it('deve retornar status 500 se houver falha na busca', async () => {
      req = { query: {} };
      vi.mocked(prisma.operacaoEstoque.findMany).mockRejectedValue(new Error('Falha no Postgres'));

      await ListAllOperacaoEstoque(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Falha ao buscar operacao estoque' });
    });
  });

  // ==========================================
  // TESTES: CRIAR OPERAÇÃO
  // ==========================================
  describe('CriarOperacaoEstoque', () => {
    it('deve cadastrar uma operação com sucesso e retornar status 201', async () => {
      req = {
        body: { motivo: 'Ajuste Manual', entradasaida: 'S' }
      };
      const operacaoCriada = { id: 10, motivo: 'Ajuste Manual', entradasaida: 'S', operacaoEstoqueDetalhe: [] };
      vi.mocked(prisma.operacaoEstoque.create).mockResolvedValue(operacaoCriada as any);

      await CriarOperacaoEstoque(req as Request, res as Response);

      expect(prisma.operacaoEstoque.create).toHaveBeenCalledWith({
        data: { motivo: 'Ajuste Manual', entradasaida: 'S' },
        include: expect.any(Object)
      });
      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(operacaoCriada);
    });

    it('deve retornar status 400 se o motivo ou entradasaida estiverem ausentes', async () => {
      req = {
        body: { motivo: 'Falta o outro campo' } // entradasaida ausente
      };

      await CriarOperacaoEstoque(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Campos obrigatórios ausentes' });
      expect(prisma.operacaoEstoque.create).not.toHaveBeenCalled();
    });

    it('deve retornar status 500 se o bloco catch disparar na criação', async () => {
      req = { body: { motivo: 'Ok', entradasaida: 'E' } };
      vi.mocked(prisma.operacaoEstoque.create).mockRejectedValue(new Error('Erro interno'));

      await CriarOperacaoEstoque(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Falha ao Criar operacao estoque' });
    });
  });

  // ==========================================
  // TESTES: ALTERAR OPERAÇÃO
  // ==========================================
  describe('AlterarOperacaoEstoque', () => {
    it('deve atualizar uma operação enviando o id numérico na query', async () => {
      req = {
        query: { id: '2' },
        body: { motivo: 'Novo Motivo' }
      };
      const operacaoAtualizada = { id: 2, motivo: 'Novo Motivo', entradasaida: 'E' };
      vi.mocked(prisma.operacaoEstoque.update).mockResolvedValue(operacaoAtualizada as any);

      await AlterarOperacaoEstoque(req as Request, res as Response);

      expect(prisma.operacaoEstoque.update).toHaveBeenCalledWith({
        where: { id: 2 },
        data: { motivo: 'Novo Motivo' },
        include: expect.any(Object)
      });
      expect(jsonMock).toHaveBeenCalledWith(operacaoAtualizada);
    });

    it('deve retornar status 400 se o id não for fornecido na query ao alterar', async () => {
      req = { query: {}, body: { motivo: 'Teste' } };

      await AlterarOperacaoEstoque(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'ID não fornecido na query' });
    });

    it('deve retornar status 500 se falhar na query de atualização', async () => {
      req = { query: { id: '1' }, body: { motivo: 'Erro' } };
      vi.mocked(prisma.operacaoEstoque.update).mockRejectedValue(new Error('Inexistente'));

      await AlterarOperacaoEstoque(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'erro ao aplicar atualização' });
    });
  });

  // ==========================================
  // TESTES: DELETAR OPERAÇÃO
  // ==========================================
  describe('DeletarOperacaoEstoque', () => {
    it('deve deletar a operação com sucesso e retornar status 204', async () => {
      req = { query: { id: '7' } };
      vi.mocked(prisma.operacaoEstoque.delete).mockResolvedValue({ id: 7 } as any);

      await DeletarOperacaoEstoque(req as Request, res as Response);

      expect(prisma.operacaoEstoque.delete).toHaveBeenCalledWith({
        where: { id: 7 }
      });
      expect(statusMock).toHaveBeenCalledWith(204);
    });

    it('deve retornar status 400 se o id não for enviado na query de deleção', async () => {
      req = { query: {} }; // Sem ID

      await DeletarOperacaoEstoque(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'ID não fornecido na query' });
    });

    it('deve retornar status 500 se houver falha física ao deletar', async () => {
      req = { query: { id: '9' } };
      vi.mocked(prisma.operacaoEstoque.delete).mockRejectedValue(new Error('Foreign key restriction'));

      await DeletarOperacaoEstoque(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(500);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Erro ao Deletar objeto' });
    });
  });
});