import React,{useState,createContext,useEffect} from 'react'
export const ClientContext = createContext();

export const ClientProvider = (props) => {
    const [loading, setLoading] = useState(true);
    const [client,setClient] = useState({});
    const [cIndex,setCIndex] = useState(0);
    const handleError = (res) =>{
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
           const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
           const data = await handleError(result)
           setClient(data);
           setTimeout(()=>{

               setLoading(false);
           },4000)
          } catch(err) {
            console.warn('An error has ocurred during Fetch: ',err);
          } 
        }
        fetchData()
    }, [])
    


    return (
        <ClientContext.Provider value={{array:[client,setClient],index:[cIndex,setCIndex],loader:[loading,setLoading]}}>
            {props.children}
        </ClientContext.Provider>
    )
}

