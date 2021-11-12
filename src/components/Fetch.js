import React,{useEffect,useState} from 'react'

const Fetch = () => {
    const [data,setData]= useState([]);

    const getData = async(param) =>{
        const data = await fetch(`https://jsonplaceholder.typicode.com/${param}`)
        const res = await data.json();
        console.log(res);
        setData(res);
    }

    useEffect(()=>{
        getData("posts")
        // console.log('One deploy')
        console.log('asdasd',data);
    },[])
    return (
        <ul>
         
        </ul>
    )
}

export default Fetch
