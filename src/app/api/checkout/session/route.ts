// create a stripe checkout session and return the session id

// Next
import { NextResponse } from 'next/server'

// Stripe
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

// Prisma
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
	const data = await request.json()

	// get url we came from
	const origin = request.headers.get('origin')

	const params: Stripe.Checkout.SessionCreateParams = {
		mode: 'payment',
		submit_type: 'pay',
		payment_method_types: ['card'],
		line_items: [
			{
				price: 'price_1NmKbqL86JTlvHk0Z0lqZaD3',
				quantity: data.sessions,
			},
		],
		success_url: `${origin}/account/session/${data.tutorSessionId}?payment=success`,
		cancel_url: `${origin}/book-now`,
	}

	const session = await stripe.checkout.sessions.create(params, {
		apiKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
	})

	return NextResponse.json(session)
}
