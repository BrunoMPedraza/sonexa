import React from 'react'
import {SiDarkreader} from 'react-icons/si'

const DarkMode = () => {

//     --primary-bg:#DEE8FD;
//   --secondary-bg:#455BAF;
//   --text-bg:#C6E6F5;
//   --white-txt:rgb(255, 255, 255);
//   --black-txt:rgb(0, 0, 0);

//   /* Fonts */
//   /* Font Family */
//   --ff-common:'Rokkitt', serif;
//   /*Font Size */
//   --fs-title:3rem;
//   --fs-lg: 2.2rem;
//   --fs-sm: .8rem;
//   /* Person size */
//   /* These illustrations are based on people, so it makes sense for me to respect a proportion between each other */
//   --ps-common:60%;
//   --ps-device:100%;


    const colorChange = (e) =>{
        console.log(document.documentElement.style.getPropertyValue('--primary-bg'));
        document.documentElement.style.setProperty('--global-bg','#373737')
        document.documentElement.style.setProperty('--primary-bg','#373737')
        document.documentElement.style.setProperty('--secondary-bg','#2F3E76')
        document.documentElement.style.setProperty('--text-bg','#5F6D74')
        document.documentElement.style.setProperty('--svg-filter','0.4')
        console.log(document.documentElement.style.getPropertyValue('--svg-filter'));
    }


    return (
        <>
            <SiDarkreader className='darkMode' id='dark' onClick={(e)=>colorChange(e)}/>
        </>
    )
}

export default DarkMode
