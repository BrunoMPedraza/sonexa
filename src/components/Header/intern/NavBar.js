import React from 'react'
import {FaLowVision} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {NavBarInfo} from './NavBarInfo';

export const NavBar = ({clicked,showNavBar}) => {
    return (
        <nav className={clicked 
            ? 'nav-menu active' : 'nav-menu'
        }>
            <ul className='nav-menu-items' onClick={()=>showNavBar(!clicked)}>
                <li className="navbar-toggle">
                    <Link to="#" className='menu-icons'>
                        <FaLowVision className='faClose relevantText'/>
                    </Link>
                </li>
                {NavBarInfo.map((e,index)=>{
                    return(
                        <li key={index} className='nav-text'>
                            <Link to={e.path}>
                                <div>{e.icon}</div>
                                <h4>{e.title}</h4>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

