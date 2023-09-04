// Styles
import styles from './PageHeader.module.scss'

interface PageHeaderProps {
	title: string
}

const PageHeader = (props: PageHeaderProps) => {
	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<h1>{props.title}</h1>
			</div>
		</div>
	)
}

export default PageHeader
