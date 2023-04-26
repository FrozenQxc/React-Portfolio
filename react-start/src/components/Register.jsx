import React from 'react'

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className='title'>Регистрация</span>
            <form action="">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="passsword"  placeholder='passsword'/>
            </form>
        </div>
    </div>
  )
}

export default Register