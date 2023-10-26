import User from '../User/User'
const Users = ({ users, ...rest }) => {
	return (
		<div>
			{users.length > 0 && (
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>Имя</th>
							<th scope='col'>Качества</th>
							<th scope='col'>Профессия</th>
							<th scope='col'>Встретился, раз</th>
							<th scope='col'>Оценка</th>
							<th scope='col'>Избранное</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{users.map(user => (
							<User key={user._id} {...rest} {...user} />
						))}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default Users
