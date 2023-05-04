import React from 'react'

const Service = () => {
    return (
        <div className="max-w-[1400px] px-10 mt-10 mx-auto">
            <h1 className="font-bold text-4xl text-center mb-10" data-aos="fade-up"
                data-aos-duration="2000">Our <span className="text-primary">Services</span></h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto mb-10">

                <div className="card w-full mx-auto  shadow-2xl" data-aos="fade-up"
                    data-aos-duration="3000">
                    <figure className="pt-5 ">
                        <img
                            className="w-40 rounded-full "
                            src="https://i.ibb.co/FwMNWCj/Online-calendar-cuate.png"
                            alt=""
                        />
                    </figure>
                    <div className="card-body pt-0 text-center">
                        <h2 className="card-title mx-auto font-bold">Booking pages</h2>
                        <p>
                            that connect leads and customers with the right people in your team
                        </p>

                    </div>
                </div>

                <div className="card w-full mx-auto  shadow-2xl" data-aos="fade-up"
                    data-aos-duration="3000">
                    <figure className="pt-5 ">
                        <img
                            className="w-40 rounded-full "
                            src="https://i.ibb.co/yn5dfTk/Customer-Survey-rafiki.png"
                            alt=""
                        />
                    </figure>
                    <div className="card-body pt-0 text-center">
                        <h2 className="card-title mx-auto font-bold">Automated forms</h2>
                        <p>
                            that instantly qualify and route visitors to the right people in your team
                        </p>

                    </div>
                </div>

                <div className="card w-full mx-auto  shadow-2xl" data-aos="fade-up"
                    data-aos-duration="3000">
                    <figure className="pt-5 ">
                        <img
                            className="w-40 rounded-full "
                            src="https://i.ibb.co/smhKkQp/Messaging-amico.png"
                            alt=""
                        />
                    </figure>
                    <div className="card-body pt-0 text-center">
                        <h2 className="card-title mx-auto font-bold">Automated chatbots</h2>
                        <p>
                            that adds instant engagement options to
                            your existing webforms
                        </p>

                    </div>
                </div>

                <div className="card w-full mx-auto  shadow-2xl" data-aos="fade-up"
                    data-aos-duration="3000">
                    <figure className="pt-5 ">
                        <img
                            className="w-40 rounded-full "
                            src="https://i.ibb.co/JRX4gch/Chat-rafiki-1.png"
                            alt=""
                        />
                    </figure>
                    <div className="card-body pt-0 text-center">
                        <h2 className="card-title mx-auto font-bold">Webform plug-in</h2>
                        <p>
                            that instantly qualify and route visitors to the right people in your team
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Service