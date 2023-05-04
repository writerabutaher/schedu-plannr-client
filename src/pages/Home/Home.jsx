import React from 'react'
import Hero from './Hero'
import Service from './Service'
import Details from './Details'
import Membership from './MemberShip'
import ShortenTime from './ShortenTime'

const Home = () => {

    return (
        <div>
            <Hero />
            <Service />
            <Details />
            <Membership />
            <ShortenTime />
        </div>
    )
}

export default Home