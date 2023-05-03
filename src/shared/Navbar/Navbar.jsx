import React, { useEffect, useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { BsSun, BsMoonStars } from 'react-icons/bs'

const Navbar = () => {

    const [dark, setDark] = useState(false);

    const handleDark = () => {
        setDark(!dark);
        localStorage.setItem("darkMode", String(!dark));
    };

    useEffect(() => {
        const localDark = JSON.parse(localStorage.getItem("darkMode") || "{}");
        setDark(localDark);
    }, []);

    useEffect(() => {
        if (dark) {
            document
                .querySelector("html")
                .setAttribute("data-theme", "dark");
        } else {
            document
                .querySelector("html")
                .setAttribute("data-theme", "mytheme");
        }
    }, [dark]);

    return (
        <nav className="navbar bg-base-100 flex items-center mt-5 max-w-[1300px] mx-auto">
            <div className="navbar-start">
                <Link to={"/"}>
                    <img
                        src="https://i.ibb.co/MSsVHm1/logo.png"
                        className="lg:w-6/12"
                        alt=""
                    />
                </Link>
            </div>

            {/* Large Screen nav items */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ul-style text-primary">
                    <li className="li-style">
                        <Link to={"/dashboard/mySchedule"} className="noo-hover link-style">
                            Dashboard
                        </Link>
                    </li>
                    <li className="li-style">
                        <Link to={"/about"} className="noo-hover link-style">
                            About
                        </Link>
                    </li>
                    <li className="li-style">
                        <Link to={"/resources"} className="noo-hover link-style">
                            Resources
                        </Link>
                    </li>
                    <li className="li-style">
                        <Link to={"/schedule/fifteen"} className="noo-hover link-style">
                            Schedule
                        </Link>
                    </li>

                    <li className="li-style">
                        <Link to={"/blogs"} className="noo-hover link-style">
                            Blog
                        </Link>
                    </li>

                    <div className=" flex items-center mx-2" onClick={handleDark}>
                        {dark ? (
                            <BsSun className="h-6 w-6" />
                        ) : (
                            <BsMoonStars className="h-6 w-6" />
                        )}
                    </div>

                    <div className="animation start-home"></div>
                </ul>
            </div>
            {/* Large Screen nav items */}

            {/* Small Screen nav items */}
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content right-1 mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <div className="ml-3" onClick={handleDark}>
                            {dark ? (
                                <BsSun className="h-6 w-6" />
                            ) : (
                                <BsMoonStars className="h-6 w-6" />
                            )}
                        </div>
                        <li>
                            <Link
                                to={"/dashboard/mySchedule"}
                                className=" hover:bg-secondary pr-32"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"} className=" hover:bg-secondary pr-32">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to={"/resources"} className="hover:bg-secondary pr-32">
                                Resources
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/schedule/fifteen"}
                                className=" hover:bg-secondary pr-28"
                            >
                                Schedule
                            </Link>
                        </li>
                        <li>
                            <Link to={"/blogs"} className=" hover:bg-secondary pr-36">
                                Blog
                            </Link>
                        </li>

                        {/* {user?.uid ? (
                            <Link
                                to={"/"}
                                onClick={signOut}
                                className="btn border-0 lg:flex px-10 mr-4 text-white"
                            >
                                Log Out
                            </Link>
                        ) : (
                            <Link
                                to={"/login"}
                                className="btn border-0 lg:flex px-10 mr-4 text-white"
                            >
                                Log In
                            </Link>
                        )} */}
                    </ul>
                </div>
                {/* Small Screen nav items */}

                {/* {user?.uid ? (
                    <Link
                        to={"/"}
                        onClick={signOut}
                        className="btn hidden border-0 lg:flex bg-primary rounded-full text-white px-10"
                    >
                        Log Out
                    </Link>
                ) : (
                    <Link
                        to={"/login"}
                        className="btn hidden border-0 lg:flex bg-primary rounded-full text-white px-10"
                    >
                        Log In
                    </Link>
                )} */}
            </div>
        </nav>
    )
}

export default Navbar