export type Exam = {
	title: string
	slug: string
	description: string
	headerImage: {
		url: string
	}
	pricingTable: ExamPricingItem[]
	frequentlyAskedQuestions: [
		{
			question: string
			answer: string
		}
	]
}

export type ExamPricingItem = {
	title: string
	tagline: string
	delivery: 'ONLINE' | 'IN_PERSON' | 'BOTH'
	stripePriceId: string
	featured: boolean
}
