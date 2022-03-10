import React from 'react'

import Logo from '../../img/Logo.png'

import classes from './Header.module.css'
const Header = () => {
  return (
    <header className={classes.header}>
      <img src={Logo} alt="logo" className={classes.img} />
    </header>
  )
}
export default Header
