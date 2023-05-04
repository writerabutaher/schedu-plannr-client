import React from 'react'

const Sponsorship = () => {

    const imagesrc = [
        "https://img.icons8.com/fluency/512/qgenda.png",
        "https://img.icons8.com/color/2x/zigbee.png",
        "https://img.icons8.com/color/2x/vestige.png",
        "https://img.icons8.com/ios-filled/2x/pied-piper.png",
        "https://img.icons8.com/color/2x/iveco.png",
        "https://img.icons8.com/color/2x/airbnb.png",
    ]

    return (
        <div className="flex justify-center py-20" data-aos="fade-up">
            <div className="container m-auto px-6">
                <h2 className="text-center text-2xl font-bold md:text-4xl">
                    Our <span className="text-primary">Sponsorship</span></h2>
                <div className="mt-12">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {
                            imagesrc.map((src, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-opacity-5 py-2 px-4 hover:bg-opacity-10 cursor-pointer"
                                    >
                                        <img
                                            src={src}
                                            className="contrast-0 group-hover:contrast-100 md:w-24 w-20"
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsorship