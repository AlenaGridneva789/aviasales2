import React from 'react'
import { format } from 'date-fns'
import PropTypes from 'prop-types'

import classes from './Ticket.module.css'

const Ticket = ({
  price,
  carrier,
  departure,
  departureTransfers,
  arrival,
  arrivalTransfers,
  departureDuration,
  arrivalDuration,
  departureTime,
  arrivalTime,
}) => {
  const getTimeFromMins = (mins) => {
    const hours = Math.trunc(mins / 60)
    const minutes = mins % 60
    return `${hours}ч  ${minutes < 10 ? `0${minutes}` : minutes}м`
  }

  return (
    <li className={classes['ticket-wrapper']}>
      <div className={classes['ticket-header']}>
        <span className={classes['ticket-price']}>{String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} Р</span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="logo" className={classes['img-logoS7']} />
      </div>
      <div className={classes['ticket-content']}>
        <div className={classes.route}>
          <span className={classes['ticket-content-title']}>{departure.join(' - ')}</span>
          <span className={classes['route-time']}>
            {' '}
            {format(new Date(departureTime), 'HH:mm')} -{' '}
            {format(new Date(new Date(departureTime).getTime() + departureDuration * 1000 * 60), 'HH:mm')}{' '}
          </span>
          <span className={classes['ticket-content-title']}>{arrival.join(' - ')}</span>
          <span className={classes['route-time']}>
            {format(new Date(arrivalTime), 'HH:mm')} -{' '}
            {format(new Date(new Date(arrivalTime).getTime() + arrivalDuration * 1000 * 60), 'HH:mm')}
          </span>
        </div>
        <div className={classes['route-length']}>
          <span className={classes['ticket-content-title']}>В ПУТИ</span>
          <span className={classes['route-length-time']}>{getTimeFromMins(departureDuration)}</span>
          <span className={classes['ticket-content-title']}>В ПУТИ</span>
          <span className={classes['route-length-time']}>{getTimeFromMins(arrivalDuration)}</span>
        </div>
        <div className={classes.transfer}>
          <span className={classes['ticket-content-title']}>
            {departureTransfers.length}{' '}
            {departureTransfers.length > 1 ? 'ПЕРЕСАДКИ' : departureTransfers.length === 0 ? 'ПЕРЕСАДОК' : 'ПЕРЕСАДКА'}
          </span>
          <span className={classes['transfer-stops']}>
            {departureTransfers.length ? departureTransfers.join(' - ') : '-'}
          </span>
          <span className={classes['ticket-content-title']}>
            {arrivalTransfers.length}
            {arrivalTransfers.length > 1 ? ' ПЕРЕСАДКИ' : arrivalTransfers.length === 0 ? ' ПЕРЕСАДОК' : ' ПЕРЕСАДКА'}
          </span>
          <span className={classes['transfer-stops']}>
            {arrivalTransfers.length ? arrivalTransfers.join(' - ') : '-'}
          </span>
        </div>
      </div>
    </li>
  )
}
Ticket.defaultProps = {
  price: 0,
  carrier: '',
  departure: [],
  departureTransfers: [],
  arrival: [],
  arrivalTransfers: [],
  departureDuration: 0,
  arrivalDuration: 0,
  departureTime: '',
  arrivalTime: '',
}
Ticket.propTypes = {
  price: PropTypes.number,
  carrier: PropTypes.string,
  departure: PropTypes.arrayOf(PropTypes.string),
  departureTransfers: PropTypes.arrayOf(PropTypes.string),
  arrival: PropTypes.arrayOf(PropTypes.string),
  arrivalTransfers: PropTypes.arrayOf(PropTypes.string),
  departureDuration: PropTypes.number,
  arrivalDuration: PropTypes.Number,
  departureTime: PropTypes.string,
  arrivalTime: PropTypes.number,
}
export default Ticket
