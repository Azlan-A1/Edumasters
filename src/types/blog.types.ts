export type Blog = {
	title: string
	slug: string
	content: string
	dateOverride?: Date
	createdBy: {
		name: string
		picture: string
	}
	createdAt: Date
}
