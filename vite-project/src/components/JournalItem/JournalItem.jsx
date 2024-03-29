import './JournalItem.css'

function JournalItem({ title, text, date }) {
	// Преобразуем дату в строку формата "день.месяц.год час:минута"
	const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date)

	return (
		<>
			<h2 className='journal-item__header'>{title}</h2>
			<div className='journal-item__body'>
				<div className='journal-item__date'>{formattedDate}</div>
				<div className='journal-item__text'>{text}</div>
			</div>
		</>
	)
}

export default JournalItem
