export enum Role {
	USER = 'USER',
	TUTOR = 'TUTOR',
	ADMIN = 'ADMIN',
}

export type User = {
	id: string
	name: string
	email: string
	role: Role[]
}
