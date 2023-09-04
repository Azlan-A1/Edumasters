// Types
import type { Metadata } from 'next'

// Next
import Link from 'next/link'

// Fonts
import { Heebo, Lalezar } from 'next/font/google'

// Components
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

// Styles
import '@/styles/main.scss'
import classNames from 'classnames'
import RootProvider from './providers'

const heebo = Heebo({ subsets: ['latin'] })
const lexend = Lalezar({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-lexend',
})

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
			<body className={classNames(heebo.className, lexend.variable)}>
				<RootProvider>
					<Banner>
						<p>
							Are you a private tutor looking for a partnership?{' '}
							<Link href='/contact'>Get in touch!</Link>
						</p>
					</Banner>
					<Navigation />
					{children}
					<Footer />
					<div id='navigation_portal' />
				</RootProvider>
			</body>
		</html>
	)
}
