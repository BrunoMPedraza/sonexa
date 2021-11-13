import React from 'react'
import { ServiceProvider } from './intern/ServiceContext';
import './service.css';
import {ServiceIteration} from './intern/ServiceIteration'


const ServiceBox = () => {
    return (
        <section>
            <div className="home-One separator">
                <div className="col"></div>            
            </div>
            
            <summary>
                <div className="serviceSlogan">Our Services</div>
            </summary>

            
            <ServiceProvider>
                <ServiceIteration />
            </ServiceProvider>
       
        </section>
    )
}

export default ServiceBox
