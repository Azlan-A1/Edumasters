export type Exam = {
	title: string
	slug: string
	description: string
	headerImage: {
		url: string
	}
	pricingTable: {
		title: string
		tagline: string
		delivery: 'ONLINE' | 'IN_PERSON' | 'BOTH'
		stripePriceId: string
		featured: boolean
	}
	frequentlyAskedQuestions: [
		{
			question: string
			answer: string
		}
	]
}
