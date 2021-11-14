import React from 'react'

const Home = () => {
    return (
        <main>
            {/* This should be modularized, but sorry, no time left */}
            <div className="home-One">
                <div className="col phrase slogan">We are Sonexa, we bring products to the <b>top</b></div>
                <div className="col">
                    <img className='person girlOnPc' src={require('../images/illustration/webp.webp').default} alt="Girl sitting on computer doing a checklist/to do list" />
                    <img className='separatorOne' src={require('../images/separator.svg').default} alt="separation line" />
                </div>
            </div>
{/* Col has no properties, its just for the flexbox. However empty divs look bad */}
            <aside className="home-Second">
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
            </aside>
        </main>
    )
}

export default Home
