import React from 'react'

import LogoS7 from '../../img/LogoS7.png'

import classes from './Ticket.module.css'
const Ticket = () => {
  return (
    <li className={classes['ticket-wrapper']}>
      <div className={classes['ticket-header']}>
        <span className={classes['ticket-price']}>13 400 P</span>
        <img src={LogoS7} alt="logo" className={classes['img-logoS7']} />
      </div>
      <div className={classes['ticket-content']}>
        <div className={classes.route}>
          <span className={classes['ticket-content-title']}>MOW - HKT</span>
          <span className={classes['route-time']}>10:45 - 08:00</span>
          <span className={classes['ticket-content-title']}>MOW - HKT</span>
          <span className={classes['route-time']}>11:20 - 00:50</span>
        </div>
        <div className={classes['route-length']}>
          <span className={classes['ticket-content-title']}>В ПУТИ</span>
          <span className={classes['route-length-time']}>21ч 15м</span>
          <span className={classes['ticket-content-title']}>В ПУТИ</span>
          <span className={classes['route-length-time']}>13ч 30м</span>
        </div>
        <div className={classes.transfer}>
          <span className={classes['ticket-content-title']}>2 ПЕРЕСАДКИ</span>
          <span className={classes['transfer-stops']}>HKG,JNB</span>
          <span className={classes['ticket-content-title']}>1 ПЕРЕСАДКА</span>
          <span className={classes['transfer-stops']}>HKG</span>
        </div>
      </div>
    </li>
  )
}
export default Ticket
