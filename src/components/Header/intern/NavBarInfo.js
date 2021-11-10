import React from 'react';
import {FaHome,FaUserAlt,FaServer,FaWhatsapp} from 'react-icons/fa'


export const NavBarInfo =[
    {
        icon:<FaHome/>,
        title:'Home',
        path:'/',
    },
    {
        icon:<FaUserAlt/>,
        title:'Clients',
        path:'/clients',
    },
    {
        icon:<FaServer/>,
        title:'Services',
        path:'/services',
    },
    {
        icon:<FaWhatsapp/>,
        title:'Contact',
        path:'/contact',
    }
]