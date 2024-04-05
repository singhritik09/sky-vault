import React from "react";
import { FaUserGear } from "react-icons/fa6";

const AlternateLayout = () => {
    return (
        <div className="container">
            <nav className="bg-white dark:bg-gray-800 fixed w-full h-32 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-green-600 mt-8">Sky Vault</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center"> {/* Added items-center class */}
                        <button type="button" className="text-white bg-green-700 mt-8 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><a href="/employee-login">Login</a>  </button>
                    </div>
                    <div className="items-center text-lg justify-between hidden w-full md:flex md:w-auto md:order-1 mt-8" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <a href="/loan-applications" className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500" aria-current="page">Approve Loan</a>
                            </li>
                            <li>
                                <a href="/version" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Version Information</a>
                            </li>
                            
                            <li>
                                <a href="/approved-loans" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Approved Loans</a>
                            </li>
    
                            <li>
                                <a href="/audit-logs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Audit Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
    
}

export default AlternateLayout;