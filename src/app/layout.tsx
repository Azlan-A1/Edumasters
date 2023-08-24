// Next
import type { Metadata } from 'next'

// Fonts
import { Inter } from 'next/font/google'

// Styles
import '@/styles/main.scss'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Tutor Website',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navigation />
				{children}
			</body>
		</html>
	)
}