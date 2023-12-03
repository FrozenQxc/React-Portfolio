import Button from './components/Button/Button'
import Body from './layouts/Body/Body'
import LeftPanel from './layouts/LeftPanel/LeftPanel'

import { useState } from 'react'
import './App.css'
import JournalForm from './components/JournalForm/JournalForm'
import JournalList from './components/JournalList/JournalList'

const INITIAL_DATA = [
	{
		id: 1,
		title: 'Я райн гослинг',
		text: 'Вкусно покушал',
		date: new Date(),
	},
	{
		id: 2,
		title: 'Омега люль',
		text: 'Шнеля шнеля',
		date: new Date(),
	},
]

const App = () => {
	const [items, setItems] = useState(INITIAL_DATA)

	const [inputValue, setInputValue] = useState('')

	const handleInputChange = e => {
		setInputValue(e.target.value)
	}

	const addItem = item => {
		console.log(item)
		setItems(oldItems => [...oldItems, item])
		// 	{
		// 		text: item.text,
		// 		title: item.title,
		// 		date: new Date(item.date),
		// 		id: Math.max(...(oldItems.map(i => i.id) + 1)),
		// 	},
		// ])
	}

	return (
		<div className='app'>
			<LeftPanel>
				<div className='user'>
					<h1>Мой журнал</h1>
					<a href=''>
						<img src='/public/2.jpg' alt='' />
					</a>
				</div>
				<Button onClick={() => console.log('нажали')} text='Сохарить'></Button>

				<JournalList items={items} />
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
	)
}

export default App
