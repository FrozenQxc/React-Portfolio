import Counter from './Counter'

const CountersList = () => {
	const counters = [
		{ id: 0, value: 1, name: 'Хлам' },
		{ id: 1, value: 4, name: 'Хлам' },
		{ id: 2, value: 1, name: 'Хлам' },
	]

	return (
		<div>
			{counters.map(count => (
				<Counter key={count.id} value={count.value}>
					<span>{count.name}</span>
				</Counter>
			))}
		</div>
	)
}

export default CountersList
