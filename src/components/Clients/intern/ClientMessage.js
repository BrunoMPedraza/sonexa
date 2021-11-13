import React,{useState,useContext} from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { FaList } from 'react-icons/fa'
import { ClientContext } from './ClientContext'

const ClientMessage = ({title,body,id}) => {
    const {array,index} = useContext(ClientContext)
    const [clients,setClient] = array;
    const [cIndex,setCIndex] = index;
    // Peraphs is not the best idea to have cIndex as a separate
    // if time helps I will change this
    const validateId = (sum) =>{
        return clients[sum] === undefined 
        ? sum>0 
        ? 0 
        : clients.length-1
        : sum
    }
    
    const changeId = (e,op) =>{
        e.preventDefault();
        // console.log('last id:', cIndex, 'new id: ',cIndex+op)
        setCIndex(validateId(cIndex+op))
    }
    return (
        // This was suppoused to go on a list but I took the creative freedom to change it, I hope its ok too
        <section className='textRectangle fade'>
            <AiOutlineArrowLeft className='arrow' onClick={(e)=>changeId(e,-1)} />
            <AiOutlineArrowRight className='arrow' onClick={(e)=>changeId(e,1)} />
            <div className="whitePart">
                <div className="innerText">
                    <h2>{title}</h2>
                    <h4 className='phrase'>{body}</h4>
                </div>
            </div>
        </section>
    )
}

export default ClientMessage
