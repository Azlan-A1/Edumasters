// Types
import type { Metadata } from 'next'

// Next
import Link from 'next/link'
import Script from 'next/script'

// Providers
import RootProvider from './providers'

// Fonts
import { Heebo, Lalezar } from 'next/font/google'

// Components
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

// Styles
import '@/styles/main.scss'

// Packages
import classNames from 'classnames'

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
			<Script
				async
				src='https://www.googletagmanager.com/gtag/js?id=G-SPGVMK95DC'
			/>

			<Script id='google-analytics'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
				
					gtag('config', 'G-SPGVMK95DC');
				`}
			</Script>

			<Script
				async
				src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1992672346794145'
				crossOrigin='anonymous'
				strategy='beforeInteractive'
			/>

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
