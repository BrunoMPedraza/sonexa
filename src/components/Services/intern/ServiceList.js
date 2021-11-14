import React,{useContext,useState} from 'react'
import { ServiceContext } from './ServiceContext';
import SingleService from '../ServiceSingle';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'

export const ServiceList = () => {
    const {sArray,index,loader} = useContext(ServiceContext)
    const [services,setServices] = sArray;
    const[sIndex,setSIndex] = index;
    const [loading,setLoading] = loader;

    const validateId = (sum) =>{
        console.log('services: ',sIndex)
        return services[sum] === undefined ? 
        sum>0 ? 0 : services.length-10
        : sum
    }
    
    const changePagination = (e,op) =>{
        e.preventDefault();
        console.log('previous: ',sIndex,'next: ',sIndex+op);
        validateId(setSIndex((sIndex+op)))
    }

    // FIX ASAP!!

    return (
        <ul>    
            <AiOutlineArrowLeft className='arrow' onClick={(e)=>changePagination(e,-10)} />
            <AiOutlineArrowRight className='arrow' onClick={(e)=>changePagination(e,+10)} />      
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


