import React,{useState,createContext,useEffect} from 'react'
import Fetch from '../../Fetch';
export const ClientContext = createContext();

export const ClientProvider = (props) => {
    const [loading, setLoading] = useState(true);
    const [client,setClient] = useState({});
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json()
          .then((data) => {
          
             setClient(data);
             setLoading(false);
             console.log('finished loading',loading);
             console.log('clients: ',client)
          }, []))});
    const [cIndex,setCIndex] = useState(0);


    return (
        <ClientContext.Provider value={{array:[client,setClient],index:[cIndex,setCIndex],loader:[loading,setLoading]}}>
            {props.children}
        </ClientContext.Provider>
    )
}

const address = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    return user.address;
  });