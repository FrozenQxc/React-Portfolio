import React from 'react'
import style from './Home.module.scss'

const Home = () => {
  return (
    <div className={style.home}>
        <h1>Задание выполнил Степанов Тимофей 0432-05</h1>
        <div className={style.work}>
            <a href="Zadanie1">Задание №1</a>
            <a href="#">Задание №2</a>
        </div>
    </div>
  )
}

export default Home