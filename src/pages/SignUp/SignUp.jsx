import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { registerUser, googleSignIn } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [firebaseError, setFirebaseError] = useState("");

    const handleRegister = (data) => {
        const { email, password, displayName } = data;
        registerUser(email, password, displayName)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Sign Up Successfully");
            })
            .catch(err => {
                setFirebaseError(err.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Google SignUp Successfully")
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="flex justify-center py-20">
            <div className="rounded-3xl border bg-transparent w-[30rem] flex flex-col gap-12 p-12">
                <h3 className="text-2xl font-semibold text-primary text-center">
                    Register To Your Account
                </h3>
                <div className="flex justify-center">
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full h-11 rounded-full border border-gray-300 px-6 transition active:bg-gray-50"
                    >
                        <div className="w-max mx-auto flex items-center justify-center space-x-4">
                            <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#FFC107"
                                />
                                <path
                                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                    fill="#FF3D00"
                                />
                                <path
                                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                    fill="#4CAF50"
                                />
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#1976D2"
                                />
                            </svg>
                            <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700">
                                LogIn With Google
                            </span>
                        </div>
                    </button>
                </div>
                <form
                    onSubmit={handleSubmit(handleRegister)}
                    className="flex flex-col gap-8"
                >
                    {firebaseError && (
                        <p className="text-sm text-red-600 -mt-4">{firebaseError}</p>
                    )}
                    <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 before:transition before:duration-300">
                        <input
                            {...register("displayName", {
                                required: "Name is Required",
                            })}
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-transparent pb-3 border-b border-gray-300 outline-none transition p-2"
                        />
                    </div>
                    {errors.displayName && (
                        <p className="text-sm text-red-600 -mt-4">
                            {errors.displayName.message}
                        </p>
                    )}

                    <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 before:transition before:duration-300">
                        <input
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid Email Address",
                                },
                            })}
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-transparent pb-3  border-b border-gray-300 outline-none transition p-2"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-sm text-red-600 -mt-4">
                            {errors.email.message}
                        </p>
                    )}

                    <div className="flex flex-col gap-4">
                        <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 before:transition before:duration-300">
                            <input
                                {...register("password", {
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message: "Password Must Be 8 Characters",
                                    },
                                })}
                                type="password"
                                placeholder="Your Password"
                                className="w-full bg-transparent pb-3  border-b border-gray-300 outline-none transition p-2"
                            />
                        </div>
                        {errors.password && (
                            <p className="text-sm text-red-600">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-4 items-start">
                        <button
                            type="submit"
                            className="w-full rounded-full bg-sky-500 text-white h-11 flex items-center justify-center px-6 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                        >
                            <span className="text-base font-semibold">Register</span>
                        </button>
                        <Link to="/login" className="py-4">
                            <span className="text-sm tracking-wide text-sky-600">
                                Already Have An Account?
                            </span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp