import React from 'react'
import { Link } from 'react-router-dom'

const Membership = () => {
    return (
        <div className="flex justify-between mx-10">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="md:w-1/2" data-aos="zoom-in">
                        <img
                            src="https://finwave.co/images/gif/Why_Us-1.gif"
                            className="rounded-lg"
                            alt=""
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-bold" data-aos="fade-left">
                            Interested to be our member???
                        </h1>
                        <p className="py-6 text-justify" data-aos="fade-left">
                            As a member, you will be able to take an active role in our events
                            and campaigns carried out throughout the year. Our upcoming
                            activities are available to you on our calendar, social media and
                            membership newsletters. We are always open to ideas via email.
                            Become a member of Family Reproductive Health Association with
                            just RM12 per annum and RM100 for lifetime membership. Register
                            now to become a part of our family.
                        </p>
                        <Link to={'/plan'}>
                            <button className="btn btn-primary" data-aos="zoom-in">Click Here</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Membership