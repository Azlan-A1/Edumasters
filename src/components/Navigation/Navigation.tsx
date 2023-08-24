// Next
import Link from 'next/link'

// Styles
import styles from './Navigation.module.scss'

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
				<ul>
					{links.map((link, index) => (
						<li key={index}>
							<Link href={link.path}>{link.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Navigation
