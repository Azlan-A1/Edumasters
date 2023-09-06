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
	disabled?: boolean
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
				disabled={props.disabled}
				{...props.register}
			/>
		</div>
	)
}

Input.TextInput = TextInput

interface NumberInputProps {
	id: string
	label?: string
	placeholder: string
	register?: UseFormRegisterReturn
	min?: number
	max?: number
}

const NumberInput = (props: NumberInputProps) => {
	return (
		<div className={styles.number_input}>
			{props.label && <label htmlFor={props.id}>{props.label}</label>}
			<input
				type='number'
				id={props.id}
				placeholder={props.placeholder}
				min={props.min}
				max={props.max}
				{...props.register}
			/>
		</div>
	)
}

Input.NumberInput = NumberInput

export default Input
