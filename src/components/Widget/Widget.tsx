interface WidgetProps {
	title: string
	value: string
}

const Widget = (props: WidgetProps) => {
	return (
		<div className='border border-gray-100 p-4 rounded shadow-lg'>
			<p className='text-gray-500 text-sm mb-4'>{props.title}</p>
			<p className='text-xl font-medium'>{props.value}</p>
		</div>
	)
}

export default Widget
