import React,{useState} from 'react'
import './header.css';
import {FaLowVision,FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import {Link} from 'react-router-dom';
import {MobileHeader} from './MobileHeader';

const Header = () => {
    const [clicked,setClicked] = useState(false);

    const showNavBar = () =>{
        setClicked(!clicked);
        console.log('Clicked: ',clicked)
    }

    return (
        <header>
            <IconContext.Provider value={{color:'black'}}>
            <div className='navbar'>
                <Link to='#' className='menu-icons'>
                    <FaBars className={clicked ? 'invisible relevantText transition' : 'faBar relevantText transition'} onClick={showNavBar}/>
                </Link>
            </div>
            <img className={clicked ? 'bg-one-active' : 'bg-one'} src={require('../../images/FirstBG.svg').default} alt="Logo: Woman with cyan background in shield"/>
            
            <nav className={clicked 
                ? 'nav-menu active' : 'nav-menu'
            }>

                <ul className='nav-menu-items' onClick={showNavBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-icons'>
                            <FaLowVision className='faClose relevantText'/>
                        </Link>
                    </li>
                    {MobileHeader.map((e,index)=>{
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
            </IconContext.Provider>
        </header>
    )
}

export default Header
{/* <img src={require('../../images/logo.png').default} alt="Logo: Woman with cyan background in shield"/> */}
            {/* <h1>Sonexa</h1> */}
            {/* <h2>| profiles and growth </h2> */} 