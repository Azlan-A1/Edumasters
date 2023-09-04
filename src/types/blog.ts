export type Blog = {
	title: string
	slug: string
	content: string
	createdBy: {
		name: string
		picture: string
	}
	createdAt: Date
}
