interface WidgetProps {
	title: string
	value?: string
	children?: React.ReactNode
}

const Widget = (props: WidgetProps) => {
	return (
		<div className='border border-gray-100 p-4 rounded shadow-lg'>
			<p className='text-gray-500 text-sm mb-4'>{props.title}</p>
			{props.value && <p className='text-xl font-medium'>{props.value}</p>}
			{props.children && <div className='mt-4'>{props.children}</div>}
		</div>
	)
}

export default Widget
