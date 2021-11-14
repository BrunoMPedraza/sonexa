import {useContext} from 'react'
import { ClientContext } from './ClientContext'
import ClientMessage from './ClientMessage'
import Loader from 'react-loader-spinner'


const ClientIteration = () => {
    const {array,index,loader} = useContext(ClientContext)
    const [clients,setClients] = array;
    const [cIndex,setCIndex] = index;
    const [loading,setLoading] = loader;

    console.log('Prueba',clients[cIndex]);
    return (
        <div>
           {loading ? 
           <Loader
           className='spinner'
           type="TailSpin"
           color="#fafafa"
           height={100}
           width={100}
           timeout={3000}
           />
           
           : 
           <ClientMessage 
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
