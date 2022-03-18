import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filterTickets } from '../../redux/action/actionCreator'

import classes from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch()
  const { listButtons, activeFilter } = useSelector(({ listButtons, activeFilter }) => ({ listButtons, activeFilter }))
  const buttons = listButtons.map(({ name, label }) => {
    const isActiveClass = activeFilter === name ? classes.active : classes.button
    return (
      <div className={classes.btn} key={name}>
        <button type="button" className={isActiveClass} key={name} onClick={() => dispatch(filterTickets(name))}>
          {label}
        </button>
      </div>
    )
  })
  return <div className={classes.buttons}>{buttons}</div>
}
export default Filter
