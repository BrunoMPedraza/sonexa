import React,{useContext,useState} from 'react'
import { ServiceContext } from './ServiceContext';
import SingleService from '../SingleService';

export const ServiceList = () => {
    const {sArray,index,loader} = useContext(ServiceContext)
    const [services,setServices] = sArray;
    const [sIndex,setSIndex] = index;
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
        </ul>
    )
}


