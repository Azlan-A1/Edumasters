// Styles
import styles from './Banner.module.scss'

interface BannerProps {
	children: React.ReactNode
}

const Banner = (props: BannerProps) => {
	return (
		<div className={styles.base}>
			<div className={styles.content}>{props.children}</div>
		</div>
	)
}

export default Banner
