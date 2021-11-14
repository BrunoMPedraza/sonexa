import React,{useState} from 'react'
import {SiDarkreader} from 'react-icons/si'

const DarkMode = () => {
    const [dark,setDark] = useState(false)



    // --global-bg:white;
    // --primary-bg:#DEE8FD;
    // --secondary-bg:#455BAF;
    // --text-bg:#C6E6F5;
    // --white-txt:rgb(255, 255, 255);
    // --black-txt:rgb(0, 0, 0);
    // --svg-filter:1;

    const colorChange = () =>{
        setDark(!dark);
        if(dark){
            document.documentElement.style.setProperty('--global-bg','white')
            document.documentElement.style.setProperty('--primary-bg','#DEE8FD')
            document.documentElement.style.setProperty('--secondary-bg','#455BAF')
            document.documentElement.style.setProperty('--text-bg','#C6E6F5')
            document.documentElement.style.setProperty('--svg-filter','1')
            document.documentElement.style.setProperty('--black-txt','black')
        }else{
            document.documentElement.style.setProperty('--global-bg','#373737')
            document.documentElement.style.setProperty('--primary-bg','#373737')
            document.documentElement.style.setProperty('--secondary-bg','#2F3E76')
            document.documentElement.style.setProperty('--text-bg','#5F6D74')
            document.documentElement.style.setProperty('--svg-filter','0.4')
            document.documentElement.style.setProperty('--black-txt','#FFFFFF')}
    }


    return (
        <>
            <SiDarkreader className='darkMode' id='dark' onClick={(e)=>colorChange()}/>
        </>
    )
}

export default DarkMode
