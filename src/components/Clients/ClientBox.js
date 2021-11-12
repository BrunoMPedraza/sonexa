import React from 'react'
import './clients.css';
import Fetch from '../Fetch';
import { ClientProvider,ClientContext } from './intern/ClientContext';
import ClientMessage from './intern/ClientMessage';
import ClientList from './intern/ClientList';
import ClientIteration from './intern/ClientIteration';

const ClientBox = () => {
    return (
        <section>
            <summary className="home-One">
                <div className="col"></div>
                <div className="col phrase">Over a 1000 clients picked us, and hundreds decided to make public their choice</div>
            </summary>
            
            <article className="box">
                <div className="adjustable">
                    <aside className="col textWhite">
                        <h2>Are you a small bussinesss?</h2>
                        <h4>Dont worry, we got your back too!</h4>
                        <h5>In Sonexa, our biggest value is transparency, this is why we encourage real time reviews with no filters, from every country at real time</h5>
                        <h5>We also make sure we give accesible prices to everyone depending their conditions</h5>
                        <img className='person' src={require('../../images/illustration/like.webp').default} alt="Man sitting reacting with a hearth by using his phone" />
                    </aside>
                    <ClientProvider>
                        <ClientIteration />
                        {/* <ClientMessage/> */}
                        {/* <ClientList/> */}
                    </ClientProvider>

                </div>

                
            </article>

            

            {/* <Fetch /> */}
        </section>

    )
}

export default ClientBox
