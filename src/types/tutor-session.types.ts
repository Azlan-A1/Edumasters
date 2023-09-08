import type { User } from './auth.types'

export enum TutorSessionPlatform {
	ZOOM = 'ZOOM',
	GOOGLE_MEET = 'GOOGLE_MEET',
	MICROSOFT_TEAMS = 'MICROSOFT_TEAMS',
	SKYPE = 'SKYPE',
}

export type TutorSession = {
	id: string
	studentId: string
	student: User
	tutorId?: string
	tutor?: User
	type: string
	platform: TutorSessionPlatform
	date: Date
	createdAt: Date
	updatedAt: Date
}
