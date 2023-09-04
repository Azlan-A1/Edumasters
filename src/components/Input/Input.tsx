// Styles
import styles from './Input.module.scss'

// React Hook Form
import { UseFormRegisterReturn } from 'react-hook-form'

const Input = () => {}

interface TextInputProps {
	id: string
	label?: string
	placeholder: string
	type?: 'text' | 'password'
	register?: UseFormRegisterReturn
}

const TextInput = (props: TextInputProps) => {
	const type = props.type || 'text'

	return (
		<div className={styles.text_input}>
			{props.label && <label htmlFor={props.id}>{props.label}</label>}
			<input
				type={type}
				id={props.id}
				placeholder={props.placeholder}
				{...props.register}
			/>
		</div>
	)
}

Input.TextInput = TextInput

export default Input
