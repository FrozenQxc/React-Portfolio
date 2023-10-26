import { useState } from 'react'
import style from './../styles/index.module.scss'
import Counter from './Counter'

const CountersList = () => {
	const initialState = [
		{ id: 0, value: 1, name: 'Хлам', price: '200' },
		{ id: 1, value: 4, name: 'Хлам' },
		{ id: 2, value: 1, name: 'Хлам' },
	]

	const [counters, setCounters] = useState(initialState)

	const handleDelete = id => {
		console.log('handleDelete', id)
		const newCounters = counters.filter(c => c.id !== id)
		setCounters(newCounters)
	}

	const handleIncrement = id => {
		const elementIndex = counters.findIndex(c => c.id === id)
		const newCounters = [...counters]
		newCounters[elementIndex].value++
		setCounters(newCounters)
	}

	const handleDecrement = id => {
		const elementIndex = counters.findIndex(c => c.id === id)
		const newCounters = [...counters]
		newCounters[elementIndex].value--
		setCounters(newCounters)
	}

	const handleReset = () => {
		setCounters(initialState)
	}

	return (
		<>
			<div className={style.counter}>
				{counters.map(count => (
					<Counter
						{...count}
						key={count.id}
						onDelete={handleDelete}
						onIncrement={handleIncrement}
						onDecrement={handleDecrement}
					/>
				))}
			</div>
			<button onClick={handleReset} className='btn btn-primary m-4'>
				Cбросить
			</button>
		</>
	)
}

export default CountersList
