// Next
import { NextResponse } from 'next/server'

// Prisma
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
	const data = await req.json()

	console.log({ data })

	const newTutorSession = await prisma.tutorSession.create({
		data: {
			type: data.type,
			date: data.date,
			platform: data.platform,
			student: {
				connect: {
					id: data.user_id,
				},
			},
		},
	})

	return NextResponse.json(newTutorSession)
}
