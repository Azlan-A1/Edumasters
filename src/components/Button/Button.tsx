// Styles
import styles from './Button.module.scss'

// Packages
import classNames from 'classnames'

interface ButtonProps {
	children: React.ReactNode
	type?: 'button' | 'submit'
	variant?: 'default' | 'primary' | 'secondary' | 'tertiary'
}

const Button = (props: ButtonProps) => {
	const type = props.type || 'button'

	return (
		<button
			type={type}
			className={classNames(styles.base, {
				[styles.default]: props.variant === 'default' || !props.variant,
				[styles.primary]: props.variant === 'primary',
				[styles.secondary]: props.variant === 'secondary',
				[styles.tertiary]: props.variant === 'tertiary',
			})}
		>
			{props.children}
		</button>
	)
}

export default Button
