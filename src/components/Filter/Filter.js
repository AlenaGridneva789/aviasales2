import React from 'react'

import classes from './Filter.module.css'

const Filter = () => {
  return (
    <div className={classes.buttons}>
      <div className={classes.btn}>
        <button type="button" className={classes.active}>
          САМЫЙ ДЕШЕВЫЙ
        </button>
      </div>
      <div className={classes.btn}>
        <button type="button" className={classes.button}>
          САМЫЙ БЫСТРЫЙ
        </button>
      </div>
      <div className={classes.btn}>
        <button type="button" className={classes.button}>
          ОПТИМАЛЬНЫЙ
        </button>
      </div>
    </div>
  )
}
export default Filter
