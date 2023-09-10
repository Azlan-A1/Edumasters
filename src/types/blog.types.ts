export type Blog = {
	title: string
	slug: string
	content: string
	dateOverride?: Date
	headerImage: {
		url: string
	}
	createdBy: {
		name: string
		picture: string
	}
	createdAt: Date
}
