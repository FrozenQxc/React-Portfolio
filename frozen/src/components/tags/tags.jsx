import React, { useState } from 'react'

const Tags = () => {
	const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])

	const handleDelete = id => {
		setTags(prevState => prevState.filter(tag => tag !== id))
	}

	return (
		<div>
			{tags.map(tag => (
				<button onClick={() => handleDelete(tag)} key={tag}>
					{tag}
				</button>
			))}
		</div>
	)
}

export default Tags
