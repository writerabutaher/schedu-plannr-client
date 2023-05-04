import React from 'react'

const Details = () => {
    return (
        <div className="mt-20 container mx-auto">
            <div className="text-center hidden lg:block">
                <h1 className="lg:text-4xl text-3xl font-bold leading-loose s" data-aos="fade-up"
                    data-aos-duration="2000">
                    Simplify meeting <span className="text-primary">scheduling today</span>
                </h1>
                <p className="lg:text-xl mt-4 mx-10" data-aos="fade-up"
                    data-aos-duration="2000">
                    Start booking more meetings with less hassle.
                </p>
            </div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse mt-5">
                    <img
                        src="https://i.ibb.co/fFQHPpr/Screenshot-517.png"
                        alt=""
                        className=" rounded-lg shadow-2xl lg:w-3/12 hidden lg:flex"
                    />
                    <div className="lg:w-8/12 md:w-full mr-auto lg:text-left md:text-left text-center">
                        <h3 className="lg:text-3xl md:text-3xl text-3xl font-bold leading-loose lg:text-left lg:mt-10 text-center" data-aos="fade-up-right">
                            How it works
                        </h3>
                        <p className="pt-6 lg:text-xl md:text-xl text-sm lg:text-left text-center text-accent" data-aos="fade-up-right">
                            Never send another "When can you meet?" email again. Get the right
                            people together. At the right time. In 3 steps.
                        </p>

                        <div className="lg:flex md:flex items-center mb-0 md:mt-16 lg:flex-row md:flex-row flex-row-reverse" data-aos="fade-right">
                            <div className="lg:w-4/12 w-3/12 lg:mr-0 md:mr-auto mx-auto">
                                <img
                                    src="https://i.ibb.co/4VK7Kh4/Calendar-bro-1.png"
                                    className="lg:w-8/12 md:w-9/12 "
                                    alt=""
                                />
                            </div>
                            <div className="lg:mr-32 lg:relative right-16">
                                <h4 className="lg:text-2xl md:text-2xl text-xl font-semibold leading-relaxed">
                                    Create weekly schedule
                                </h4>
                                <p className="lg:text-lg md:text-lg text-sm lg:mx-0 md:mx-0 mx-4 mt-2 text-accent md:w-11/12">
                                    Setup is easy. Add your availability preferences and it'll do
                                    the work for you.
                                </p>
                            </div>
                        </div>

                        <div className="lg:flex md:flex items-center mb-0 md:mt-16 lg:flex-row md:flex-row flex-row-reverse" data-aos="fade-left">
                            <div className="lg:w-5/12 w-3/12 lg:mr-0 md:mr-auto mx-auto">
                                <img
                                    src="https://i.ibb.co/vspmrnp/Online-calendar-cuate.png"
                                    className="lg:w-12/12 md:w-8/12 "
                                    alt=""
                                />
                            </div>
                            <div className="lg:mr-32 lg:relative right-10">
                                <h4 className="lg:text-2xl md:text-2xl text-xl font-semibold leading-relaxed">
                                    Select time slots
                                </h4>
                                <p className="lg:text-lg md:text-lg text-sm lg:mx-0 md:mx-0 mx-4 mt-2 text-accent md:w-11/12">
                                    You can select time slots from 15 , 30 and 60 minutes slot. After selecting slot you can select your date for schedule.
                                </p>
                            </div>
                        </div>

                        <div className="lg:flex md:flex items-center mb-0 md:mt-16 lg:flex-row md:flex-row flex-row-reverse" data-aos="fade-right">
                            <div className="lg:w-5/12 w-3/12 lg:mr-0 md:mr-auto mx-auto">
                                <img
                                    src="https://i.ibb.co/8gGyTmL/Fill-out-bro.png"
                                    className="lg:w-6/12 md:w-9/12 "
                                    alt=""
                                />
                            </div>
                            <div className="lg:mr-32 lg:relative right-28">
                                <h4 className="lg:text-2xl md:text-2xl text-xl font-semibold leading-relaxed">
                                    Give schedule info & create
                                </h4>
                                <p className="lg:text-lg md:text-lg text-sm lg:mx-0 md:mx-0 mx-4 mt-2 text-accent md:w-11/12">
                                    Setup is easy. Add your availability preferences and it'll do
                                    the work for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details