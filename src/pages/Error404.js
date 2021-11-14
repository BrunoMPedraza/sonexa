import React from 'react'

const Error404 = () => {
    return (
        <section>   
            <img class='error'src={require('../images/illustration/404.webp').default} alt="Background colors"/>
            <summary class='phrase chickens'>Whoops! Looks like you have gotten to a dead end. There is nothing here but us chichkens</summary>
        </section>
    )
}

export default Error404
