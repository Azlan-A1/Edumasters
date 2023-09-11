export type Service = {
	title: string
	slug: string
	description: string
	headerImage: {
		url: string
	}
	pricingTable: ServicePricingItem[]
	frequentlyAskedQuestions: [
		{
			question: string
			answer: string
		}
	]
}

export type ServicePricingItem = {
	title: string
	sku: string
	tagline: string
	delivery: 'ONLINE' | 'IN_PERSON' | 'BOTH'
	stripePriceId: string
	featured: boolean
}
