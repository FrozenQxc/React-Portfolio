import { useState } from 'react'

const Main = () => {
	const [count, setCount] = useState(0)
	const [tags, setTags] = useState(['tag1', 'tag2', 'tag3', 'tag4', 'tag5'])

	const formantCount = () => {
		return count === 0 ? <h1>empty</h1> : count
	}

	const getBageClasses = () => {
		let classes = 'badge m-2 '
		classes += count === 0 ? 'bg-warning' : 'bg-primary'
		return classes
	}

	const handleIncrement = () => {
		setCount(prevState => prevState + 1)
	}

	const handleDecrement = () => {
		setCount(prevState => prevState - 1)
	}

	const handleTagChange = id => {
		// setTags(['tag4', 'tag5'])
		setTags(prevState => prevState.filter(tag => tag !== id))
	}

	const renderTags = () => {
		return tags.length !== 0
			? tags.map(tag => (
					<li
						key={tag}
						className='btn btn-primary btn-sm m-2'
						onClick={() => handleTagChange(tag)}
					>
						{tag}
					</li>
			  ))
			: 'no Tags'
	}

	return (
		<div>
			<ul>{renderTags()}</ul>
			<span className={getBageClasses()}>{formantCount()}</span>
			<button className='btn btn-primary btn-sm m-2' onClick={handleIncrement}>
				+
			</button>
			<button className='btn btn-primary btn-sm m-2' onClick={handleDecrement}>
				-
			</button>
		</div>
	)
}

export default Main
