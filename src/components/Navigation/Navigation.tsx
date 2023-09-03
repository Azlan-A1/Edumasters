// Next
import Image from 'next/image'
import Link from 'next/link'

// Styles
import styles from './Navigation.module.scss'

// Assets
import logo from '@/assets/brand/edumasters_horizontal.svg'

// Icons
import { IconSearch } from '@tabler/icons-react'

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
	]

	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<Link href='/'>
					<div className={styles.logo}>
						<Image src={logo} alt='Edumasters Logo' fill />
					</div>
				</Link>
				<ul className={styles.links}>
					{links.map((link, index) => (
						<li key={index}>
							<Link href={link.path}>{link.name}</Link>
						</li>
					))}
				</ul>
				<div className={styles.cta}>
					<button id={styles.search}>
						<IconSearch size={20} />
					</button>
					<Link href='/account'>
						<button id={styles.account}>Login/Register</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navigation
