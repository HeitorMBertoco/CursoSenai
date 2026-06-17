import { PrismaClient } from "./generated/prisma/client";
import prismaConfig from "../prisma.config";
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
const pool = new Pool({
    connectionString: prismaConfig.datasource?.url
}) ;
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter });


export default prisma;