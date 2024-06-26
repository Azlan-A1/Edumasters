// Next
import { NextResponse } from 'next/server'

// Prisma
import { prisma } from '@/lib/prisma'

// Packages
import { hash } from 'bcryptjs'

export async function POST(request: Request) {
	const data = await request.json()

	const { email, password, name, roles } = data

	const existingUser = await prisma.user.findUnique({
		where: {
			email,
		},
	})

	if (existingUser) {
		return NextResponse.json({
			message: 'User already exists',
		})
	}

	const hashedPassword = await hash(password, 10)

	const newUser = await prisma.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
			roles: roles || ['USER'],
		},
	})

	return NextResponse.json(newUser)
}
