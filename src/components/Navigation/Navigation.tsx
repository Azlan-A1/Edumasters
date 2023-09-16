// Next
import Image from 'next/image'
import Link from 'next/link'

// NextAuth
import { getServerSession } from 'next-auth'

// Lib
import { authOptions } from '@/lib/auth'

// Styles
import styles from './Navigation.module.scss'

// Components
import { MobileNavigation } from './Navigation.client'

// Assets
import logoHorizontal from '@/assets/brand/edumasters_horizontal.svg'
import logoIcon from '@/assets/brand/edumasters_logo.svg'

// Icons
import { IconUserCircle } from '@tabler/icons-react'

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
		name: 'Blog',
		path: '/blog',
	},
	{
		name: 'Contact',
		path: '/contact',
	},
]

const Navigation = async () => {
	const session = await getServerSession(authOptions)

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
					{!session?.user ? (
						<Link href='/login'>
							<button id={styles.account}>Login/Register</button>
						</Link>
					) : (
						<Link href='/account'>
							<button id={styles.search} className='flex items-center'>
								<IconUserCircle className='inline mr-1' />
								{session.user.name}
							</button>
						</Link>
					)}
					<span className='block md:hidden'>
						<MobileNavigation links={links} />
					</span>
				</div>
			</div>
		</div>
	)
}

export default Navigation
