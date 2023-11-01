import React from 'react'
import style from './Header.module.scss'
import Ff_logo from '../../media/Ff_logo'
import Menu_icon from '../../media/Menu_icon'
import { useState } from 'react';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={style.HeaderHolder}>
      <Ff_logo className={style.HeaderLogo}/>
      <button className={style.SidebarButton} onClick={handleSidebarToggle}>
        <Menu_icon />
      </button>
      <div className={`${isSidebarOpen?style.SidebarOutside:''}`} onClick={e=>setIsSidebarOpen(false)}></div>
      <div className={`${style.Sidebar} ${isSidebarOpen ? style.SidebarOpen : ''}`}>
        <ul className={style.SidebarMenu}>
          <li className={style.MenuList}><a className={style.MenuItem} href="/transfer">Transfer</a></li>
          <li className={style.MenuList}><a className={style.MenuItem} href="/warranty">Warranty</a></li>
          <li className={style.MenuList}><a className={style.MenuItem} href="/destroy_token">Destroy Token</a></li>
          <li className={style.MenuList}><a className={style.MenuItem} href="/contact">Contact</a></li>
          <li className={style.MenuList}><a className={style.MenuItem} href="/customer_support">Customer Support</a></li>

        </ul>
      </div>
    </div>
  )
}


export default Header