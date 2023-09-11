// Next
import Image from 'next/image'
import Link from 'next/link'

// Styles
import styles from './Footer.module.scss'

// Data
import { socialProfiles } from '@/data/social-media'

// Assets
import logo from '@/assets/brand/edumasters_horizontal.svg'

// Packages
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<div className={styles.navigation}>
					<div className={styles.navigation_items}>
						<p className={styles.title}>College</p>
						<ul>
							<li>SAT</li>
						</ul>
					</div>
					<div className={styles.navigation_items}>
						<p className={styles.title}>Graduate</p>
						<ul>
							<li>SAT</li>
						</ul>
					</div>
					<div className={styles.navigation_items}>
						<p className={styles.title}>Academic</p>
						<ul>
							<li>Math</li>
						</ul>
					</div>
					<div className={styles.navigation_items}>
						<p className={styles.title}>Resouces</p>
						<ul>
							<li>
								<Link
									href='https://www.youtube.com/channel/UC-nfgjhUyCfgi1CX9OGOm7Q'
									target='_blank'
									rel='noopener noreferrer'
								>
									Videos
								</Link>
							</li>
							<li>Private Tutoring</li>
							<li>Find a Tutor</li>
						</ul>
					</div>
					<div className={styles.navigation_items}>
						<p className={styles.title}>About</p>
						<ul>
							<li>Our Story</li>
							<li>Leadership</li>
							<li>
								<Link href='/blog'>Blog</Link>
							</li>
							<li>
								<Link href='/contact'>Contact Us</Link>
							</li>
						</ul>
					</div>
					<div className={styles.navigation_items}>
						<p className={styles.title}>Legal</p>
						<ul>
							<li>
								<Link href='/privacy-policy'>Privacy Policy</Link>
							</li>
							<li>
								<Link href='/terms-of-use'>Terms of Use</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className={styles.footer}>
					<div>
						<div className={styles.logo}>
							<Image src={logo} alt='Edumasters Logo' fill />
						</div>
						<p className='mb-8'>
							&copy; {new Date().getFullYear()} Edumasters. All Rights Reserved.
						</p>
						<div className={styles.socials}>
							{socialProfiles.map((social, index) => (
								<SocialIcon
									key={index}
									network={social.network}
									url={social.url}
									target='_blank'
									style={{
										height: 36,
										width: 36,
									}}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
