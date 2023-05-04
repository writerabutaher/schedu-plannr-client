import React from 'react'
import { Link } from 'react-router-dom'

const ShortenTime = () => {
    return (
        <div className="mt-10">
            <h1
                className="font-bold text-4xl text-center mb-5"
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                Shorten time <span className="text-primary">to engagement</span>
            </h1>
            <p className="text-center" data-aos="zoom-in">
                Real-time communication builds stronger relationships, creates a more
                efficient operation, and offers an overall better experience.
            </p>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div
                            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                            data-aos="fade-left"
                        >
                            <img
                                alt="Party"
                                src="https://i.ibb.co/54Z2yvf/LE-chat-and-calls.png"
                                className="absolute inset-0 h-full w-full"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2
                                className="text-3xl font-bold sm:text-4xl"
                                data-aos="fade-right"
                            >
                                Meet now and accelerate the customer journey
                            </h2>

                            <p className="mt-4" data-aos="fade-right">
                                Guide ideal visitors from your chatBots to a live chat. Use chat to manually qualify leads, then send a meeting invite from the chat window to confirm a follow-up engagement.
                            </p>

                            <Link to={'/dashboard/mySchedule'} className="mt-8 inline-flex items-center rounded border border-primary bg-primary px-8 py-3 text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:primary">
                                <span className="text-sm font-medium"> Get Started </span>

                                <svg
                                    className="ml-3 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ShortenTime