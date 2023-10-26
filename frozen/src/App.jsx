import React from 'react'
import CountersList from './components/CountersList'

import Tags from './components/tags/tags'
import style from './styles/index.module.scss'

const App = () => {
	return (
		<div className={style.app}>
			<h1>Привет</h1>
			<Tags></Tags>
			<CountersList></CountersList>
		</div>
	)
}

export default App
