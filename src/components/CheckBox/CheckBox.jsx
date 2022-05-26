import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Checkbox } from 'antd'

import { onChecked } from '../../redux/action/actionCreator'

import classes from './CheckBox.module.css'

const CheckBox = () => {
  const dispatch = useDispatch()
  const checkboxData = useSelector((state) => state.checkboxes)

  const checkboxes = checkboxData.map((checkbox) => (
    <li key={checkbox.name}>
      <Checkbox
        className={classes.checkbox}
        key={checkbox.label}
        checked={checkbox.checked}
        onChange={() => dispatch(onChecked(checkbox.name))}
      >
        {checkbox.label}
      </Checkbox>
    </li>
  ))
  return (
    <section className={classes['checkbox-container']}>
      <div>
        <span className={classes['checkbox-title']}>КОЛИЧЕСТВО ЕРЕСАДОК</span>
      </div>
      <ul className={classes.checkbox}>{checkboxes}</ul>
    </section>
  )
}
export default CheckBox
