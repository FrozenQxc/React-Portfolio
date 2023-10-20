import Button from './components/Button/Button'
import Input from './components/Input/Input'
import JournalItem from './components/JournalItem/JournalItem'
import Body from './layouts/Body/Body'
import LeftPanel from './layouts/LeftPanel/LeftPanel'

import './App.css'

const App = () => {
	const data = [
		{
			title: 'Я райн гослинг',
			text: 'Вкусно покушал',
			date: new Date(),
		},
		{
			title: 'Омега люль',
			text: 'Шнеля шнеля',
			date: new Date(),
		},
	]

	return (
		<div className='app'>
			<LeftPanel>
				<div className='user'>
					<h1>Мой журнал</h1>
					<a href=''>
						<img src='/public/2.jpg' alt='' />
					</a>
				</div>
				<Button />
				<Input />
				<JournalItem
					title={data[0].title}
					text={data[0].text}
					data={data[0].date}
				/>
				<JournalItem
					title={data[1].title}
					text={data[1].text}
					data={data[1].date}
				/>
			</LeftPanel>
			<Body>
				<div>
					<h1>ПРИВЕТ</h1>
				</div>
			</Body>
		</div>
	)
}

export default App
