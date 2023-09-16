import * as nodemailer from 'nodemailer'

type EmailPayload = {
	to: string
	subject: string
	html: string
}

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.NEXT_PUBLIC_GMAIL_USER,
		pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
	},
})

export const sendEmail = async (data: EmailPayload) => {
	await transporter.sendMail({
		from: `"${process.env.NEXT_PUBLIC_GMAIL_NAME}" <${process.env.NEXT_PUBLIC_GMAIL_USER}>`,
		to: data.to,
		subject: data.subject,
		html: data.html,
	})
}
