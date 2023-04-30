import React, { useState } from 'react'
import style from './Hook.module.scss'

const Hook = () => {
  // useState
  const [item, setItem] = useState(1);
  const incremetnItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  // useInput
  const useInput = (initialValue) => {
    const [item1, setItem1] = useState(initialValue);

  }


  return (
    <div className={style.container}>
      <h1>Применение хука useState</h1>
      <h2>{item}</h2>
      <div className={style.button}>
        <button onClick={incremetnItem}> + </button>
        <button onClick={decrementItem}> - </button>
      </div>

      <h1>Применение хука useInput</h1>

      <div className={style.input}>
        <input type="text" placeholder='Введите что нибудь' />
      </div>
      <a href='/'>Вернуться на главную страницу</a>
    </div>
  )
}

export default Hook