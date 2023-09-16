// Enums

// Next
import { NextResponse } from 'next/server'

// Prisma
import { prisma } from '@/lib/prisma'
import { TutorSessionStatus } from '@prisma/client'

const azlanTutorId = 'efa0bb3d-0dc8-4aa2-97c9-5177c8b4b926'
const defaultTutorId = 'd2693d5f-58be-400f-8eca-f7aae4992b08'

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
			tutor: {
				connect: {
					id: defaultTutorId,
				},
			},
		},
	})

	return NextResponse.json(newTutorSession)
}
