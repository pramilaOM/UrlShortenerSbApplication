import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import { toast } from 'react-hot-toast';
import { useStoreContext } from '../contextApi/ContextApi';

const LoginPage = () => {

    const navigate = useNavigate();

    const [loader, setLoader] = useState(false);
    const { setToken } = useStoreContext();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const loginHandler = async (data) => {
        // console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL);

        setLoader(true);
        try {
            const { data: response } = await api.post("api/auth/public/login",
                data
            );
            console.log(response.token);
            setToken(response.token);
            localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
            toast.success("Login Successful!")
            reset();
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            toast.error("Login failed!")
        } finally {
            setLoader(false);
        }
    };
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
            <form
                onSubmit={handleSubmit(loginHandler)}
                className="sm:w-[450px] w-[360px] bg-white shadow-lg py-8 sm:px-8 px-4 rounded-xl"
            >
                <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-extrabold lg:text-3xl text-2xl">
                    Login Here
                </h1>

                <hr className='mt-2 mb-5 text-black'></hr>

                <div className='flex flex-col gap-3'>
                    <TextField
                        label="UserName"
                        required
                        id="username"
                        type="text"
                        message="*Username is required"
                        placeholder="Type your username"
                        register={register}
                        errors={errors}
                    />

                    <TextField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        placeholder="Type your password"
                        register={register}
                        min={6}
                        errors={errors}
                    />

                </div>

                <button
                    disabled={loader}
                    type="submit"
                    className="w-full py-2 mt-3 text-white font-semibold rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
                >
                    {loader ? "Loading..." : "Login"}
                </button>



                <p className="text-center text-sm text-slate-700 mt-6">
                    Don't have an account?
                    <Link
                        to="/register"
                        className="font-semibold underline hover:text-purple-600 transition"
                    >
                        <span className="text-btnColor"> SignUp</span>
                    </Link>

                </p>


            </form>
        </div>

    )
}

export default LoginPage