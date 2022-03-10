import React from 'react'
import { Checkbox } from 'antd'

import classes from './CheckBox.module.css'

const CheckboxGroup = Checkbox.Group
const plainOptions = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
const CheckBox = () => {
  return (
    <div className={classes['checkbox-container']}>
      <span className={classes['checkbox-title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <CheckboxGroup options={plainOptions} className={classes.checkbox} />
    </div>
  )
}
export default CheckBox
