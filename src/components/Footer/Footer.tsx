// Next
import Image from 'next/image'
import Link from 'next/link'

// Styles
import styles from './Footer.module.scss'

// Data
import { footerNavigation } from './Footer.data'
import { socialProfiles } from '@/data/social-media'

// Assets
import logo from '@/assets/brand/edumasters_logo.svg'

// Packages
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<div className={styles.navigation}>
					{footerNavigation.map((nav, index) => (
						<div className={styles.column} key={index}>
							<h6 className={styles.column_title}>{nav.title}</h6>
							<div className={styles.column_links}>
								{nav.links.map((link, index) => (
									<Link href={link.href} key={index} legacyBehavior>
										{link.name}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
				<div className={styles.footer}>
					<div>
						<div className={styles.logo}>
							<Image src={logo} alt='Edumasters Logo' fill />
						</div>
						<p>
							&copy; {new Date().getFullYear()} Edumasters. All Rights Reserved.
						</p>
						<p className={styles.meta}>
							React Tutorial LLC is controlled and operated by React Tutoring
							LLC, a firm owned by Edumasters. Edumasters is a registered
							trademark of Edumasters. All other trademarks, service marks, and
							logos used on Edumasters are the trademarks, service marks, or
							logos of their respective owners.
						</p>
						<div className={styles.socials}>
							{socialProfiles.map((social, index) => (
								<Link href='/' key={index} legacyBehavior>
									<SocialIcon
										network={social.network}
										style={{
											height: 36,
											width: 36,
										}}
									/>
								</Link>
							))}
						</div>
					</div>
					<div>
						<div className={styles.legal}>
							<p>Privacy Policy</p>
							<p>CA Privacy Notice</p>
							<p>Do not sell or share my Personal Information</p>
							<p>Opt-out Rights</p>
							<p>Terms of Use</p>
							<p>Site Map</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer