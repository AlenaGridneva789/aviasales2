import React, { Component } from 'react'

import ApiService from '../../services/apiService'
import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import CheckBox from '../CheckBox/CheckBox'
import TicketList from '../TicketList/TicketList'

import classes from './App.module.css'
import 'antd/dist/antd.min.css'
export default class App extends Component {
  constructor() {
    super()
    this.searchId()
  }
  ticketApi = new ApiService()
  searchId = () => {
    this.ticketApi.getId().then((body) => {
      console.log(body)
    })
  }
  render() {
    return (
      <div className={classes.container}>
        <Header />
        <section className={classes.main}>
          <CheckBox />
          <div>
            <Filter />
            <TicketList />
            <button type="button" className={classes['main-button']}>
              ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
            </button>
          </div>
        </section>
      </div>
    )
  }
}
