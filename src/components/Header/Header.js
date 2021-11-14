import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import './header.css';



import {NavBar} from './intern/NavBar';
import {Title} from './Title'
import DarkMode from '../DarkMode';

const Header = () => {
    const [clicked,setClicked] = useState(false);

    const showNavBar = () => {
        const title = document.getElementById('title');
        setClicked(!clicked);
        title.style.setProperty('margin-left', clicked ? '15%' : '25%');
    }

    return (
        <header>
            <IconContext.Provider value={{color:'black'}}>
                <DarkMode  className='darkMode' id='dark'/>
                <div className='navbar'>
                    <Link to='#' className='menu-icons'>
                        <FaBars className={clicked ? 'invisible relevantText transition' : 'faBar relevantText transition'} onClick={showNavBar}/>
                    </Link>
                </div>
                <img className={clicked ? 'bg-one-active' : 'bg-one'} src={require('../../images/FirstBG.svg').default} alt="Background colors"/>
                <NavBar 
                clicked={clicked} 
                showNavBar={()=>showNavBar()}
                />
                <Title/>
            </IconContext.Provider>
        </header>
    )
}

export default Header
{/* <img src={require('../../images/logo.png').default} alt="Logo: Woman with cyan background in shield"/> */}
            {/* <h1>Sonexa</h1> */}
            {/* <h2>| profiles and growth </h2> */} 