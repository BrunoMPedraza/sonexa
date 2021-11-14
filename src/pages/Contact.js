import React from 'react'

const Contact = () => {
    return (
        <main >
            <h2 className='relevant contact'>Catch us up on whatsapp!</h2>
            <a href="https://api.whatsapp.com/send?phone=5492235812327&text=%F0%9F%91%8B" target='_blank'>
                <img class='whatsapp'src={require('../images/whatsapp.webp').default} alt="whatsapp icon"/>
            </a>
        </main>
    )
}

export default Contact
