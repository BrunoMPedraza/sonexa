import React,{useEffect,useState} from 'react'

const Fetch = () => {
    const [response,setResponse]= useState([]);

    const getData = async(param) =>{
        const data = await fetch(`https://jsonplaceholder.typicode.com/${param}`)
        const res = await data.json();
        setResponse(res);
    }

    useEffect(()=>{
        getData("posts")
        // console.log('One deploy')
    },[])

    return (
        <ul>
            {
            response.map((e)=>
                <li key={e.id}>
                    {e.title}
                </li>)
            }
        </ul>
    )
}

export default Fetch
