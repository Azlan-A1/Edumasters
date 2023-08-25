// Next
import Image from 'next/image'
import Link from 'next/link'

// Styles
import styles from './Navigation.module.scss'

// Assets
import logo from '@/assets/brand/edumasters_logo.svg'

const Navigation = () => {
	const links = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Services',
			path: '/services',
		},
		{
			name: 'Pricing',
			path: '/pricing',
		},
		{
			name: 'Testimonials',
			path: '/testimonials',
		},
		{
			name: 'Contact',
			path: '/contact',
		},
		{
			name: 'Product Page',
			path: '/product',
		},
	]

	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<Link href='/'>
					<div className={styles.logo}>
						<Image src={logo} alt='Edumasters Logo' fill />
					</div>
				</Link>
				<ul>
					{links.map((link, index) => (
						<li key={index}>
							<Link href={link.path}>{link.name}</Link>
						</li>
					))}
				</ul>
				<div className={styles.cta}>
					<button>Contact Us</button>
				</div>
			</div>
		</div>
	)
}

export default Navigation
