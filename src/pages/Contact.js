import React from 'react'

const Contact = () => {
    return (
        <main>
            <div className="home-One">
                <div className="col phrase slogan">We are Sonexa, we bring products to the <b>top</b></div>
                <div className="col">
                    <img className='girlOnPc' src={require('../images/illustration/webp.webp').default} alt="Logo: Woman with cyan background in shield" />
                    <img className='separatorOne' src={require('../images/separator.svg').default} alt="separation line" />
                </div>
            </div>

            <div className="home-Second">
                <div className="col">
                    <img className='businessPpl' src={require('../images/illustration/meet.webp').default} alt="Illustration of three persons of different genders planning over some papework" />
                </div>
                <div className="col phrase secondTxt">
                    <h2>Math people</h2>
                    with the use of tecniques based
                    on a big-data scale, we take the
                    form of thought of user logs
                    as info that we use to boost your company</div>
            <img className='bg-two' src={require('../images/rectangle2.svg').default} alt="Background colors"/>
            </div>
        </main>
    )
}

export default Contact
