import React,{useState,useContext} from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { ClientContext } from './ClientContext'

const ClientMessage = ({title,body,id}) => {
    const {array,index} = useContext(ClientContext)
    const [clients,setClient] = array;
    const [cIndex,setCIndex] = index;
    // Peraphs is not the best idea to have cIndex as a separate (SST?)
    // if time helps I will improve this
    const validateId = (sum) =>{
        return clients[sum] === undefined 
        ? sum>0 
        ? 0 
        : clients.length-1
        : sum
    }

    const capitalizeText = (text )=> (text.replace('-',' ').charAt(0).toUpperCase()+text.slice(1))
    
    const changeId = (e,op) =>{
        e.preventDefault();
        setCIndex(validateId(cIndex+op))
    }
    return (
        <section className='textRectangle fade'>
            <AiOutlineArrowLeft className='arrow' onClick={(e)=>changeId(e,-1)} />
            <AiOutlineArrowRight className='arrow' onClick={(e)=>changeId(e,1)} />
            <div className="whitePart">
                <div className="innerText">
                    <h2>{capitalizeText(title)}</h2>
                    <h4 className='phrase'>{body}</h4>
                </div>
            </div>
        </section>
    )
}

export default ClientMessage
