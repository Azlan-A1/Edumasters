export type Grade = {
	title: string
	slug: string
	description: string
	headerImage: {
		url: string
	}
	frequentlyAskedQuestions: [
		{
			question: string
			answer: string
		}
	]
}
