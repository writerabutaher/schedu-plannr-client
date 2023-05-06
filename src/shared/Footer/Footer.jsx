import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="relative pt-8 pb-6 max-w-[1400px] mx-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold ">
                            Let's keep in touch!
                        </h4>
                        <h5 className="text-lg mt-0 mb-2">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button
                                className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button
                                className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-facebook-square"></i>
                            </button>
                            <button
                                className=" text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-dribbble"></i>
                            </button>
                            <button
                                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Useful Links
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link
                                            to={'/about'}
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/blogs'}
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        >
                                            Blog
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to={'/dashboard/team'}
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        >
                                            Create Team
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Other Resources
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                                        >
                                            MIT License
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://creative-tim.com/terms?ref=njs-profile"
                                        >
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://creative-tim.com/privacy?ref=njs-profile"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://creative-tim.com/contact-us?ref=njs-profile"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2023</span>
                            <Link
                                to="https://www.creative-tim.com/product/notus-js"
                                className="text-blueGray-500 hover:text-gray-800"
                                target="_blank"
                            />{" "}
                            ScheduPlannr by Syntax Terminators .
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
