import React from 'react'
import style from './Home.module.scss'

const Home = () => {
  return (
    <div className={style.home}>
      <h1>React - Практика</h1>
      <div className={style.work}>
          <a href="/hook">Работа с хуками</a>
          <a href="/1">Hook</a>
          <a href="/2">Hook</a>
          <a href="#">Hook</a>
          <a href="#">Hook</a>
      </div>
    </div>
  )
}

export default Home