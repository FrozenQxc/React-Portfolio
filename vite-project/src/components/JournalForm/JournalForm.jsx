import { useState } from 'react'
import Button from './../Button/Button'
import './JournalForm.module.css'

const JournalForm = ({ onSubmit }) => {
	const [formInput, setFormInput] = useState({
		title: '',
		text: '',
		date: '',
	})

	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true,
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormInput(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const addJournalItem = e => {
		console.log(e)
		e.preventDefault()
		const formData = new FormData(e.target)
		const formProps = Object.fromEntries(formData)
		console.log(formProps)
		onSubmit(formProps)
		// let isFormValid = true

		// if (!formProps.title.trim().length) {
		// 	setFormValidState(state => ({ ...state, title: false }))
		// 	isFormValid = false
		// }
		// if (!formProps.text.trim().length) {
		// 	setFormValidState(state => ({ ...state, text: false }))
		// 	isFormValid = false
		// }
		// if (!formProps.date) {
		// 	setFormValidState(state => ({ ...state, date: false }))
		// 	isFormValid = false
		// }

		// if (!isFormValid) {
		// 	return
		// }

		// setFormInput({
		// 	title: '',
		// 	text: '',
		// 	date: '',
		// })
	}

	return (
		<form onSubmit={addJournalItem}>
			<div>
				<input
					className='input-title'
					type='text'
					name='title'
					value={formInput.title}
					onChange={handleChange}
				/>
			</div>

			<textarea
				name='text'
				value={formInput.text}
				onChange={handleChange}
				cols='30'
				rows='10'
			></textarea>
			<input
				type='date'
				name='date'
				value={formInput.date}
				onChange={handleChange}
			/>
			<Button text='Сохранить' />
		</form>
	)
}

export default JournalForm
