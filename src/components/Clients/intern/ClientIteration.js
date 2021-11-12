import Reac,{useState,useContext} from 'react'
import { ClientContext } from './ClientContext'
import ClientMessage from './ClientMessage'

const ClientIteration = () => {
    const {array,index,loader} = useContext(ClientContext)
    const [clients,setClients] = array;
    const [cIndex,setCIndex] = index;
    const [loading,setLoading] = loader;

    console.log('Prueba',clients[cIndex]);
    return (
        <div>
           {loading ? 'Cargando' : <ClientMessage 
            id={clients[cIndex].id} 
            userId={clients[cIndex].userId}
            body={clients[cIndex].body}
            title={clients[cIndex].title}
            />
            
            }
        </div>
    )
}

export default ClientIteration
