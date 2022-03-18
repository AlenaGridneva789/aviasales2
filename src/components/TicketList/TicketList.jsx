import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getTickets } from '../../redux/action/actionCreator'
import Ticket from '../Ticket/Ticket'

import classes from './TicketList.module.css'

const TicketList = () => {
  const dispatch = useDispatch()
  const { tickets, id, ticketsCount, activeFilter, checkboxes } = useSelector(
    ({ tickets, id, ticketsCount, activeFilter, checkboxes }) => ({
      tickets,
      id,
      ticketsCount,
      activeFilter,
      checkboxes,
    })
  )

  useEffect(() => {
    if (id) {
      dispatch(getTickets(id))
    }
  }, [id])
  const dataSort = (data, filter) => {
    if (filter === 'cheap') {
      return data.sort((prev, next) => prev.price - next.price)
    }
    if (filter === 'fast') {
      return data.sort(
        (prev, next) =>
          prev.segments[0].duration +
          prev.segments[1].duration -
          (next.segments[0].duration + next.segments[1].duration)
      )
    }
    if (filter === 'optimal') {
      return data.sort(
        (prev, next) =>
          prev.price +
          prev.segments[0].duration +
          prev.segments[1].duration -
          (next.price + next.segments[0].duration + next.segments[1].duration)
      )
    }
    return data
  }
  const dataMap = (data) =>
    data.map((element) => ({
      price: element.price,
      carrier: element.carrier,
      departure: [element.segments[0].origin, element.segments[0].destination],
      departureTransfers: element.segments[0].stops,
      arrival: [element.segments[1].origin, element.segments[1].destination],
      arrivalTransfers: element.segments[1].stops,
      departureTime: element.segments[0].date,
      arrivalTime: element.segments[1].date,
      departureDuration: element.segments[0].duration,
      arrivalDuration: element.segments[1].duration,
    }))
  const dataFilterCheckbox = (data, checkBoxes) => {
    const checked = checkBoxes.filter((item) => item.checked)
    const all = checked.some((item) => item.name === 'all')
    if (all) {
      return data
    }
    return data.filter((ticket) => {
      const stops = ticket.segments[0].stops.length + ticket.segments[1].stops.length
      return checked.some((check) => stops === check.value)
    })
  }
  let num = 1

  const result = dataMap(dataSort(dataFilterCheckbox(tickets.data, checkboxes), activeFilter)).map((item) => (
    <Ticket
      key={num++}
      price={item.price}
      carrier={item.carrier}
      departure={item.departure}
      departureTransfers={item.departureTransfers}
      arrival={item.arrival}
      arrivalTransfers={item.arrivalTransfers}
      departureTime={item.departureTime}
      arrivalTime={item.arrivalTime}
      departureDuration={item.departureDuration}
      arrivalDuration={item.arrivalDuration}
    />
  ))
  return <div className={classes.ticketList}>{result.slice(0, ticketsCount)}</div>
}
export default TicketList
