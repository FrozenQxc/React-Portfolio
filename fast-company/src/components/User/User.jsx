import Bookmark from './../Bookmark/Bookmark'
import Qualitie from './../Qualitie/Qualitie'

const User = ({
	_id,
	name,
	qualities,
	profession,
	completedMeetings,
	rate,
	onDelete,
	bookmark,
	onToggleBookMark,
}) => {
	return (
		<>
			<tr>
				<td>{name}</td>
				<td>
					{qualities.map(qual => (
						<Qualitie key={qual._id} {...qual} />
					))}
				</td>
				<td>{profession.name}</td>
				<td>{completedMeetings}</td>
				<td>{rate} /5</td>
				<td>
					<Bookmark status={bookmark} onClick={() => onToggleBookMark(_id)} />
				</td>
				<td>
					<button onClick={() => onDelete(_id)} className='btn btn-danger'>
						delete
					</button>
				</td>
			</tr>
		</>
	)
}

export default User
