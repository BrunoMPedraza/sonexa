import Reac,{useState,useContext} from 'react'
import { ClientContext } from './ClientContext'
import ClientMessage from './ClientMessage'

const ClientIteration = () => {
    const {array,index} = useContext(ClientContext)
    const [clients,setClients] = array;
    const [cIndex,setCIndex] = index;
    console.log('Prueba',clients[cIndex]);
    return (
        <div>
            <ClientMessage 
            id={clients[cIndex].id} 
            userId={clients[cIndex].userId}
            body={clients[cIndex].body}
            title={clients[cIndex].title}
            />
        </div>
    )
}

export default ClientIteration
