// Enums

// Next
import { NextResponse } from 'next/server'

// Prisma
import { prisma } from '@/lib/prisma'
import { TutorSessionStatus } from '@prisma/client'

export async function POST(req: Request) {
	const data = await req.json()

	console.log({ data })

	const newTutorSession = await prisma.tutorSession.create({
		data: {
			type: data.type,
			package: data.package,
			date: data.date,
			platform: data.platform,
			status: TutorSessionStatus.PENDING,
			student: {
				connect: {
					id: data.user_id,
				},
			},
		},
	})

	return NextResponse.json(newTutorSession)
}
