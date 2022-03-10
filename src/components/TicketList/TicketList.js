import React from 'react'

import Ticket from '../Ticket/Ticket'

import classes from './TicketList.module.css'

const TicketList = () => {
  return (
    <div className={classes.ticketList}>
      <Ticket />
      <Ticket />
    </div>
  )
}
export default TicketList
