import React,{useContext} from 'react'
import Loader from 'react-loader-spinner'
import { ServiceContext } from './ServiceContext';
import { ServiceList } from './ServiceList';

export const ServiceIteration = () => {
    const {loader} = useContext(ServiceContext)
    const [loading,setLoading] = loader;

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
           (
           
           <ServiceList/>
           
           )
            
            }
        </div>
    )
}
