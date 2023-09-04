// Styles
import styles from './Button.module.scss'

// Packages
import classNames from 'classnames'

interface ButtonProps {
	children: React.ReactNode
	type?: 'button' | 'submit'
	variant?: 'default' | 'primary' | 'secondary' | 'tertiary'
	rounded?: boolean
	className?: string
	onClick?: () => void
}

const Button = (props: ButtonProps) => {
	const type = props.type || 'button'

	return (
		<button
			type={type}
			className={classNames(
				styles.base,
				props.className,
				{
					[styles.default]: props.variant === 'default' || !props.variant,
					[styles.primary]: props.variant === 'primary',
					[styles.secondary]: props.variant === 'secondary',
					[styles.tertiary]: props.variant === 'tertiary',
				},
				{
					[styles.button_rounded]: props.rounded,
				}
			)}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

export default Button
