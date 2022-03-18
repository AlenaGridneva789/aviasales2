import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Spin } from 'antd'

import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import CheckBox from '../CheckBox/CheckBox'
import TicketList from '../TicketList/TicketList'
import { getId, onClickMore } from '../../redux/action/actionCreator'

import classes from './App.module.css'
import 'antd/dist/antd.min.css'

const App = () => {
  const dispatch = useDispatch()
  const { tickets, checkboxes } = useSelector(({ tickets, checkboxes }) => ({
    tickets,
    checkboxes,
  }))
  useEffect(() => {
    dispatch(getId())
  }, [])
  const alertLoading = () => {
    if (!tickets.stop) {
      return (
        <>
          <Spin />
          <Alert message="некоторые данные ещё загружаются..." type="loading" />
        </>
      )
    }
    return null
  }

  const notFound = () => {
    if (checkboxes.every((element) => !element.checked)) {
      return <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="error" />
    }
    return null
  }
  return (
    <div className={classes.container}>
      <Header />
      {alertLoading()}
      <section className={classes.main}>
        <CheckBox />
        <div>
          <Filter />
          <TicketList />
          {notFound()}
          <button type="button" className={classes['main-button']} onClick={() => dispatch(onClickMore())}>
            ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
          </button>
        </div>
      </section>
    </div>
  )
}
export default App
