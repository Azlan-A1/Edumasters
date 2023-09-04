// Next
import Image from 'next/image'
import Link from 'next/link'

// Styles
import styles from './Navigation.module.scss'

// Components
import { MobileNavigation } from './Navigation.client'

// Assets
import logoHorizontal from '@/assets/brand/edumasters_horizontal.svg'
import logoIcon from '@/assets/brand/edumasters_logo.svg'

// Icons
import { IconSearch } from '@tabler/icons-react'

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
		name: 'Contact',
		path: '/contact',
	},
]

const Navigation = () => {
	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<Link href='/'>
					<div className={styles.logo_desktop}>
						<Image src={logoHorizontal} alt='Edumasters Logo' fill />
					</div>
					<div className={styles.logo_mobile}>
						<Image src={logoIcon} alt='Edumasters Logo' fill />
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
					<MobileNavigation links={links} />
				</div>
			</div>
		</div>
	)
}

export default Navigation
