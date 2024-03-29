const Counter = props => {
	const { value } = props

	const formatValue = () => {
		return value === 0 ? <h1>empty</h1> : value
	}

	const getBadgeClasses = () => {
		let classes = 'badge m-2 '
		classes += value === 0 ? 'bg-warning' : 'bg-primary'
		return classes
	}

	// const handleIncrement = () => {
	// 	// setValue(prevState => prevState + 1)
	// }

	// const handleDecrement = () => {
	// 	// setValue(prevState => prevState - 1)
	// }

	return (
		<div>
			<span>{props.name}</span>
			<span>{props.price}</span>
			<span className={getBadgeClasses()}>{formatValue()}</span>
			<button
				className='btn btn-primary btn-sm m-2'
				onClick={() => props.onIncrement(props.id)}
			>
				+
			</button>
			<button
				className='btn btn-primary btn-sm m-2'
				onClick={() => props.onDecrement(props.id)}
			>
				-
			</button>
			<button
				className='btn btn-danger btn-sm m-2'
				onClick={() => props.onDelete(props.id)}
			>
				Delete
			</button>
		</div>
	)
}

export default Counter
