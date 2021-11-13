import React,{useState,createContext,useEffect} from 'react'
export const ServiceContext = createContext();

export const ServiceProvider = (props) => {
    const [loading, setLoading] = useState(true);
    const [service,setService] = useState({});
    const [sIndex,setSIndex] = useState(0);
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
           const result = await fetch(`https://jsonplaceholder.typicode.com/photos`);
           const data = await handleError(result)
           setService(data);
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
        <ServiceContext.Provider value={{sArray:[service,setService],index:[sIndex,setSIndex],loader:[loading,setLoading]}}>
            {props.children}
        </ServiceContext.Provider>
    )
}

