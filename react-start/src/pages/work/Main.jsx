import React, { useState } from 'react'

import s from './Main.module.scss'

const Main = () => {
    const [open , setOpen] = useState(false);




  return (
    <div className={s.container}>
        <button> Открыть окно</button>
        {open && (
            <div>

            </div>

        )}
    </div>
  )
}

export default Main