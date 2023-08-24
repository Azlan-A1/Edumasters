// Styles
import styles from './Input.module.scss'

const Input = () => {}

interface TextInputProps {
	id: string
	label?: string
	placeholder: string
}

const TextInput = (props: TextInputProps) => {
	return (
		<div className={styles.text_input}>
			{props.label && <label htmlFor={props.id}>{props.label}</label>}
			<input type='text' id={props.id} placeholder={props.placeholder} />
		</div>
	)
}

Input.TextInput = TextInput

export default Input
