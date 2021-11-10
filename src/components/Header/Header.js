import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {FaLowVision,FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import './header.css';

import {NavBar} from './intern/NavBar';

const Header = () => {
    const [clicked,setClicked] = useState(false);

    const showNavBar = () =>{
        setClicked(!clicked);
        // console.log('Clicked: ',clicked)
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
            
            <NavBar 
            clicked={clicked} 
            showNavBar={clicked=>showNavBar(clicked)}
            />
           
            </IconContext.Provider>
        </header>
    )
}

export default Header
{/* <img src={require('../../images/logo.png').default} alt="Logo: Woman with cyan background in shield"/> */}
            {/* <h1>Sonexa</h1> */}
            {/* <h2>| profiles and growth </h2> */} 