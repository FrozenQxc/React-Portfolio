import './test.module.css'

const Test = ({ onChange, inputValue }) => {
	return (
		<form action='' className='title'>
			<p>{titleState}</p>
			<input type='text' onChange={onChange} value={inputValue} />
			<input type='date' />
			<input type='text' />
		</form>
	)
}

export default Test
