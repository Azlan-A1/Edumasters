// Lib
import { sendEmail } from '@/lib/email'

// React Email
import { render } from '@react-email/render'

// Email Template
import WelcomeEmail from '@/emails/WelcomeEmail'

export async function POST() {
	await sendEmail({
		to: 'hello@brandonrbridges.com',
		subject: 'Hello from your API',
		html: render(WelcomeEmail()),
	})

	console.log('Email sent!')
}
