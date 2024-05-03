import React, { useState } from "react";
import { FaUserGear } from "react-icons/fa6";
import axios1 from "../../axiosInstance";
import AuthButton from "../Dashboard/AuthButton";

const Layout = () => {
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const handleLogout = () => {
        setIsLoggedOut(true); // Set state to indicate logout
    };

    return (
        <div className="container">
            <nav className="bg-white dark:bg-gray-800 fixed w-full h-32 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-green-600 mt-8">Sky Vault</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
                        {/* Pass onLogout function to AuthButton */}
                        <AuthButton onLogout={handleLogout} /> 
                        <div className="text-gray-200 text-2xl mt-9 ml-4 flex justify-end w-full cursor-pointer">
                           <a href="/dashboard"> <FaUserGear/></a>
                        </div>
                    </div>
                    <div className="items-center text-lg justify-between hidden w-full md:flex md:w-auto md:order-1 mt-8" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <a href="/bonds" className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500" aria-current="page">Buy Bonds</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="/transaction" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Easy Transaction</a>
                            </li>
                            <li>
                                <a href="/loan" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Easy Loan</a>
                            </li>
    
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Layout;
