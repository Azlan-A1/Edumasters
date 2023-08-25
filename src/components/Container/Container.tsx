// Styles
import Image from 'next/image'
import styles from './Container.module.scss'
import classNames from 'classnames'

interface ContainerProps {
	children: React.ReactNode
	background?: 'blue' | 'green'
	image?: any
	imageAlt?: string
	imageAlign?: 'left' | 'right'
}

const Container = (props: ContainerProps) => {
	const imageAlign = props.imageAlign || 'left'

	return (
		<div
			className={classNames(styles.base, {
				'bg-green-50': props.background === 'green',
				'bg-blue-50': props.background === 'blue',
			})}
		>
			<div
				className={classNames(styles.content, {
					'flex-row-reverse': imageAlign === 'right',
				})}
			>
				{props.image && (
					<div className={styles.image}>
						<Image src={props.image} alt='Image' fill />
					</div>
				)}
				<div className={styles.children}>{props.children}</div>
			</div>
		</div>
	)
}

export default Container
