// import React,{useEffect,useState,useContext} from 'react'

// const Fetch = ({param}) => {
//     const {array,index,loader} = useContext(ClientContext)
//     const [clients,setClients] = array;
//     const [cIndex,setCIndex] = index;
//     const [loading,setLoading] = loader;

//     const handleError = (res) =>{
//         if (res.status >= 200 && res.status <= 299) {
//           return res.json();
//         } else {
//           throw Error(res.statusText);
//         }
//     }


//     const assignSet = ()=>{
//         if(param==='posts'){
            
//         }   
//     }
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//            const result = await fetch(`https://jsonplaceholder.typicode.com/${param}`);
//            const data = await handleError(result)
//            setService(data);
//            setTimeout(()=>{
//             setLoading(false);
//            },4000)
//           } catch(err) {
//             console.warn('An error has ocurred during Fetch: ',err);
//           } 
//         }
//         fetchData()
//     }, [])
 


// }

// export default Fetch
