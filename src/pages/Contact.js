import React from 'react'

const Contact = () => {
    return (
        <main>
            <div className="home-One">
                <div className="col phrase">We bring products to the <b>top</b></div>
                <div className="col">
                    <img className='girlOnPc' src={require('../images/illustration/webp.webp').default} alt="Logo: Woman with cyan background in shield" />
                    <img className='separatorOne' src={require('../images/separator.svg').default} alt="separation line" />
                </div>
            </div>
            <div className="home-Second">
                <div className="col">
                    <img className='businessPpl' src={require('../images/illustration/meet.webp').default} alt="Illustration of three persons of different genders planning over some papework" />
                    <img className='separatorOne' src={require('../images/separator.svg').default} alt="separation line" />
                </div>
                <div className="col phrase longTxt">with the use of tecniques based
                    on a big-data scale, we take the
                    form of thought of user logs
                    as info that we use to boost your company</div>
            </div>
        </main>
    )
}

export default Contact
