// Next
import Link from 'next/link'

// Styles
import styles from './Footer.module.scss'

// Data
import { footerNavigation } from './Footer.data'
import { socialProfiles } from '@/data/social-media'

// Packages
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<div className={styles.navigation}>
					{footerNavigation.map((nav, index) => (
						<div className={styles.column} key={index}>
							<h5>{nav.title}</h5>
							{nav.links.map((link, index) => (
								<Link href={link.href} key={index} legacyBehavior>
									<p>{link.name}</p>
								</Link>
							))}
						</div>
					))}

					<div className={styles.column}>
						<h5>College</h5>
					</div>
				</div>
				<div className={styles.footer}>
					<div>
						<p>
							&copy; {new Date().getFullYear()} React Tutoring LLC. All Rights
							Reserved.
						</p>
						<p className={styles.meta}>
							React Tutorial LLC is controlled and operated by React Tutoring
							LLC, a firm owned by React Tutoring LLC. React Tutoring LLC is a
							registered trademark of React Tutoring LLC. All other trademarks,
							service marks, and logos used on React Tutoring LLC are the
							trademarks, service marks, or logos of their respective owners.
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
	)
}

export default Footer
