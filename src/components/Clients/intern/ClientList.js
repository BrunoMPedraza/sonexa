import Reac,{useState,useContext} from 'react'
import { ClientContext } from './ClientContext'
import ClientCountry from './ClientCountry'

const ClientList = () => {
    const [clients,setClients] = useContext(ClientContext)

    return (
        <ul>
            {clients.map(e=>{
                // console.log(e)
                return(
                <ClientCountry 
                id={e.id} 
                userId={e.userId}
                />)
            })}
        </ul>
    )
}

export default ClientList
