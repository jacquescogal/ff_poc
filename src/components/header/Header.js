import React from 'react'
import style from './Header.module.scss'
import Ff_logo from '../../media/Ff_logo'
const Header = () => {
  return (
    <div className={style.HeaderHolder}>
      <Ff_logo className={style.HeaderLogo}/>
    </div>
  )
}

export default Header