'use client'

// Next
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Styles
import styles from './AdminSidebar.module.scss'

// Icons
import { IconExternalLink } from '@tabler/icons-react'

const AdminSidebar = () => {
	const pathname = usePathname()

	const links = [
		{
			title: 'Dashboard',
			href: '/account/admin',
		},
		{
			title: 'Manage Users',
			href: '/account/admin/users',
		},
		{
			title: 'Manage Sessions',
			href: '/account/admin/sessions',
		},
		{
			title: 'View Payments',
			href: '/account/admin/payments',
		},
	]

	return (
		<div className={styles.base}>
			<h5 className={styles.title}>Administrator Tools</h5>

			<div>
				<h6 className={styles.link_title}>Manage Edumasters</h6>
				<ul>
					{links.map((link) => (
						<li
							key={link.href}
							className={pathname === link.href ? styles.active : ''}
						>
							<Link href={link.href}>{link.title}</Link>
						</li>
					))}
				</ul>
			</div>

			<div>
				<h6 className={styles.link_title}>External Links</h6>
				<ul>
					<li>
						<Link
							href='https://app.hygraph.com/7a3ac52453334ebdb72fd1f0a5638974/master'
							target='_blank'
							className={styles.external_link}
						>
							<span>Hygraph</span>
							<IconExternalLink size={16} className={styles.icon} />
						</Link>
					</li>
					<li>
						<Link
							href='https://dashboard.stripe.com/products'
							target='_blank'
							className={styles.external_link}
						>
							<span>Stripe Products</span>
							<IconExternalLink size={16} className={styles.icon} />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default AdminSidebar
