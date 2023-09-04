// Prisma
import { PrismaClient } from '@prisma/client'

const globalPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
	globalPrisma.prisma ||
	new PrismaClient({
		log: ['query'],
		datasources: {
			db: {
				url:
					process.env.NODE_ENV === 'development'
						? process.env.NEXT_PUBLIC_DATABASE_URL
						: process.env.POSTGRES_PRISMA_URL,
			},
		},
	})

if (process.env.NODE_ENV === 'development') globalPrisma.prisma = prisma
