import React,{useContext,useState} from 'react'



const SingleService = ({id,url,thumbnailUrl,title}) => {

    const checkOdd = (num) => {
        if(num%2==0) return 'right';
    }

    return (
        <li key={id} class={`serviceList ${checkOdd(id)}`}>
            <article className="card">
                <h2 class="inline">{title}</h2>
                <img className='thumbnail inline' src={thumbnailUrl}/>
            </article>
        </li>
    )
}

export default SingleService
