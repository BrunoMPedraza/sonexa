import React,{useContext,useState} from 'react'



const SingleService = ({id,url,thumbnailUrl,title}) => {

    return (
        <li key={id} class="serviceList">
            <h2>{title}</h2>
            <img className='thumbnail' src={thumbnailUrl}/>
        </li>
    )
}

export default SingleService
