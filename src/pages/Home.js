import React from 'react'
import Separator from '../images/separator.svg'

const Home = () => {
    return (
        <main class="home">
            <div class="fContent">
                <img className='girlOnPc' src={require('../images/illustration/webp.webp').default} alt="Logo: Woman with cyan background in shield"/>
                <img className='separatorOne'src={Separator} alt="separation line" />
            </div>
        </main>
    )
}

export default Home
