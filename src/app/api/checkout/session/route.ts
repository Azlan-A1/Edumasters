// create a stripe checkout session and return the session id

// Next
import { NextResponse } from 'next/server'

// Stripe
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

// Prisma
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
	const data = await req.json()

	// get url we came from
	const origin = req.headers.get('origin')

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
		success_url: `${origin}/book-now/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${origin}/book-now/canceled`,
	}

	const session = await stripe.checkout.sessions.create(params, {
		apiKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
	})

	return NextResponse.json(session)
}
