// Styles
import styles from './PageHeader.module.scss'

interface PageHeaderProps {
	title: string
	subtitle?: string
	actions?: React.ReactNode
}

const PageHeader = (props: PageHeaderProps) => {
	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<h1>{props.title}</h1>
				{props.subtitle && <p className={styles.subtitle}>{props.subtitle}</p>}
				{props.actions && <div className={styles.actions}>{props.actions}</div>}
			</div>
		</div>
	)
}

export default PageHeader
