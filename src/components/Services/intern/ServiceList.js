import React,{useContext,useState} from 'react'
import { ServiceContext } from './ServiceContext';
import SingleService from '../SingleService';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'

export const ServiceList = () => {
    const {sArray,index,loader} = useContext(ServiceContext)
    const [services,setServices] = sArray;
    const[sIndex,setSIndex] = index;
    
    const changePagination = (e,op) =>{
        e.preventDefault();
        // console.log('last id:', cIndex, 'new id: ',cIndex+op)
        setSIndex(sIndex+op)
    }

    return (
        <ul>
            {services.map(e=>{
                return(
                    <SingleService 
                    id={e.id} 
                    url={e.url}
                    thumbnailUrl={e.thumbnailUrl}
                    title={e.title}/>
                    )
                })}
                <AiOutlineArrowLeft className='arrow' onClick={(e)=>changePagination(e,+10)} />
                <AiOutlineArrowRight className='arrow' onClick={(e)=>changePagination(e,-10)} />
        </ul>
    )
}


