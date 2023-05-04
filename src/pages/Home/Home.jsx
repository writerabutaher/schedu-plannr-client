import React from 'react'
import Hero from './Hero'
import Service from './Service'
import Details from './Details'
import Membership from './MemberShip'
import ShortenTime from './ShortenTime'
import Sponsorship from './Sponsorship'

const Home = () => {

    return (
        <div>
            <Hero />
            <Service />
            <Details />
            <Membership />
            <ShortenTime />
            <Sponsorship />
        </div>
    )
}

export default Home