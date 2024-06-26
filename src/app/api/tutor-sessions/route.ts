// Next
import { NextResponse } from 'next/server'

// Next Auth
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// Prisma
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
	const session = await getServerSession(authOptions)

	if (!session?.user?.id) {
		return NextResponse.json({
			message: 'Not authenticated',
		})
	}

	const tutorSessions = await prisma.tutorSession.findMany({
		where: {
			student: {
				id: session.user.id,
			},
		},
		orderBy: {
			date: 'desc',
		},
	})

	if (!tutorSessions) {
		return NextResponse.json({
			message: 'No sessions found',
		})
	}

	return NextResponse.json(tutorSessions)
}
