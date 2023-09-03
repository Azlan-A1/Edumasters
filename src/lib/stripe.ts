import Stripe from 'stripe'

const KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY_DEV as string

export const stripe = new Stripe(KEY, {
	apiVersion: '2023-08-16',
	typescript: true,
})
