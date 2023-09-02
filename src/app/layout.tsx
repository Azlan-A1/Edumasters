// Next
import type { Metadata } from 'next'

// Fonts
import { Heebo } from 'next/font/google'

// Components
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

// Styles
import '@/styles/main.scss'

const heebo = Heebo({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Edumasters',
	description: 'No matter the exam, score higher with Edumasters.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={heebo.className}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	)
}
