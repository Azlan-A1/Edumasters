// Types
import { Role } from '@/types/auth.types'

// Next
import { NextResponse } from 'next/server'

// Next Auth
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// Prisma
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
	const session = await getServerSession(authOptions)

	if (!session?.user?.id || !session?.user?.roles?.includes(Role['ADMIN'])) {
		return NextResponse.json({
			message: 'Not authenticated',
		})
	}

	const tutorSessions = await prisma.tutorSession.findMany({
		orderBy: {
			date: 'desc',
		},
	})

	return NextResponse.json(tutorSessions)
}
