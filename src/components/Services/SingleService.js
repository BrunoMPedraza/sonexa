import React,{useContext,useState} from 'react'
import { ServiceContext } from './intern/ServiceContext';


const SingleService = () => {
    const {sArray,index,loader} = useContext(ServiceContext)
    const [services,setServices] = sArray;
    const [sIndex,setSIndex] = index;
    const [loading,setLoading] = loader;


    const validateId = (sum) =>{
        return services[sum] === undefined 
        ? sum>0 
        ? 0 
        : services.length-1
        : sum
    }
    
    const changeId = (e,op) =>{
        e.preventDefault();
        // This should be modularized
        setSIndex(validateId(sIndex+op))
    }



    return (
        <div>
            
        </div>
    )
}

export default SingleService
