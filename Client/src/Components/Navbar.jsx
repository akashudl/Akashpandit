  
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import {withRouter} from 'react-router';
import AuthenticationService from "../Services/AuthenticationService"
import * as IoIcons from 'react-icons/io';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const isUserloggedIN=AuthenticationService.isUserloggedin();
  const isUserAdmin=AuthenticationService.isUserAdmin();
  const getPhoto=AuthenticationService.getphotoUrl();
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                 { isUserloggedIN && <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>}
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default withRouter(Navbar);