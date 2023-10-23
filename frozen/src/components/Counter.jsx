import { useState } from 'react'

const Counter = props => {
	console.log(props)
	const [value, setValue] = useState(props.value)

	const formatValue = () => {
		return value === 0 ? <h1>empty</h1> : value
	}

	const getBageClasses = () => {
		let classes = 'badge m-2 '
		classes += value === 0 ? 'bg-warning' : 'bg-primary'
		return classes
	}

	const handleIncrement = () => {
		setValue(prevState => prevState + 1)
	}

	const handleDecrement = () => {
		setValue(prevState => prevState - 1)
	}

	return (
		<div>
			{props.children}
			<span className={getBageClasses()}>{formatValue()}</span>
			<button className='btn btn-primary btn-sm m-2' onClick={handleIncrement}>
				+
			</button>
			<button className='btn btn-primary btn-sm m-2' onClick={handleDecrement}>
				-
			</button>
		</div>
	)
}

export default Counter