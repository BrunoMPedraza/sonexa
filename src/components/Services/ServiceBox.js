import React from 'react'
import { ServiceProvider } from './intern/ServiceContext';
import './service.css';
import { ServiceIteration } from './intern/ServiceIteration'
import ServiceWelcome from './ServiceWelcome';


const ServiceBox = () => {
    return (
        <section>
            <div className="home-One separator">
                <div className="col"></div>
            </div>

            <summary>
                <div className="serviceSlogan">Our Services

                    <ServiceWelcome />
                </div>
            </summary>


            <ServiceProvider>
                <div className="listCollection">
                    <ServiceIteration />
                </div>
            </ServiceProvider>

        </section>
    )
}

export default ServiceBox
