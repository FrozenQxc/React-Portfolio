import style from '../styles/main.module.scss'
import User from './User/User'

export const App = () => {
	return (
		<div className={style.App}>
			<User />
		</div>
	)
}

export default App
