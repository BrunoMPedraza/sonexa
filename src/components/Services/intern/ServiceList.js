import React,{useContext,useState} from 'react'
import { ServiceContext } from './ServiceContext';
import SingleService from '../ServiceSingle';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'

export const ServiceList = () => {
    const {sArray,index,loader} = useContext(ServiceContext)
    const [services,setServices] = sArray;
    const[sIndex,setSIndex] = index;
    const [loading,setLoading] = loader;
    
    const changePagination = (e,op) =>{
        e.preventDefault();
        setSIndex(sIndex+op)
    }

    return (
        <ul>    
            <AiOutlineArrowLeft className='arrow' onClick={(e)=>changePagination(e,+10)} />
            <AiOutlineArrowRight className='arrow' onClick={(e)=>changePagination(e,-10)} />      
            {services.map(e=>{
                return(
                    <SingleService 
                    id={e.id} 
                    url={e.url}
                    thumbnailUrl={e.thumbnailUrl}
                    title={e.title}/>
                    )
                })}
                
        </ul>
    )
}


