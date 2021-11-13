import Reac,{useState,useContext} from 'react'
import Loader from 'react-loader-spinner'
import { ServiceContext } from './ServiceContext';
import SingleService from '../SingleService';


export const ServiceIteration = () => {
    const {sArray,index,loader} = useContext(ServiceContext)
    const [services,setServices] = sArray;
    const [sIndex,setSIndex] = index;
    const [loading,setLoading] = loader;

    console.log('Prueba',services[sIndex]);
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
           <SingleService 
            id={services[sIndex].id} 
            albumId={services[sIndex].albumId}
            url={services[sIndex].url}
            thumbnailUrl={services[sIndex].thumbnailUrl}
            title={services[sIndex].title}
            />
            
            }
        </div>
    )
}
