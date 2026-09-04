import { vi } from 'vitest';

// Simula o arquivo onde você exporta o seu Prisma Client (ex: src/db.ts)
vi.mock('../../../src/db', () => ({
  prisma: {
    produto: {
      create: vi.fn(),
      findMany: vi.fn(),
      findUnique: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  },
}));