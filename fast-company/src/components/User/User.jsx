import { useState } from 'react'
import style from './../../styles/main.module.scss'

import api from '../../API'

const User = () => {
	const [users, setUsers] = useState(api.users.fetchAll)

	const renderPhase = number => {
		const lastOne = Number(number.toString().slice(-1))

		if (number > 4 && number < 15) {
			return 'Человек тусанет'
		}

		if ([2, 3, 4].indexOf(lastOne) >= 0) {
			return 'Человека тусанет'
		}

		if (lastOne === 1) return 'Человек тусанет'
	}

	const handleDelete = userId => {
		setUsers(users.filter(e => e._id !== userId))
	}
	return (
		<>
			<h2>
				<span
					className={'badge  bg-' + (users.length > 0 ? 'primary' : 'danger')}
				>
					{users.length > 0
						? `${users.length} ${renderPhase(users.length)} с тобой сегодня `
						: 'Никто с тобой не тусанет'}
				</span>
			</h2>
			{users.length > 0 ? (
				<div className={style.user}>
					<table className='table'>
						<thead>
							<tr>
								<th scope='col'>Имя</th>
								<th scope='col'>Качество</th>
								<th scope='col'>Профессия</th>
								<th scope='col'>Встретился, кол-во раз</th>
								<th scope='col'>Оценка</th>
								<th scope='col'></th>
							</tr>
						</thead>
						<tbody>
							{users.map(user => (
								<tr key={user._id}>
									<td>{user.name}</td>
									<td>
										{user.qualities.map(item => (
											<span
												className={'badge m-1 bg-' + item.color}
												key={item._id}
											>
												{item.name}
											</span>
										))}
									</td>
									<td>{user.profession.name}</td>
									<td>{user.completedMeetings}</td>

									<td>{user.rate}</td>
									<td>
										<button
											onClick={() => handleDelete(user._id)}
											className={'btn btn-danger'}
										>
											Удалить
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<h1>Вы лох</h1>
			)}
		</>
	)
}

export default User
