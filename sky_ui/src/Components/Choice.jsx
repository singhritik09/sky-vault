import React from "react";
import userimage from '../assets/images/userimage.jpg'
import employee from '../assets/images/employeeimage.jpg'

const Choice = () => {
    return (
        <>
         <style>
                {`
                    body, html {
                        height: 100%;
                        margin: 0;
                        background: linear-gradient(to bottom, #4287f5, #ffffff);
                    }
                `}
            </style>
            <br /><br /><br /><br /><br /><br /><br />
           
            <div className="w-full h-100% ">
                <div class="container flex justify-center items-center ">
                    <div>
                        <div class="w-40 h-80 bg-white border border-gray-50 rounded-lg shadow bg-gradient-to-r from-cyan-700 to-gray-700 dark:border-gray-50">
                            <img class="h-32 ml-4 mt-8 m rounded-full" src={userimage} alt="" />
                            <div class="p-5 mt-14 ml-6">
                                <a href="/home" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    User
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ml-20">
                        <div class="w-40 h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img class="rounded-t-lg" src={employee} alt="" />
                            <div class="p-5 mt-8 ml-1">
                                <a href="/employee-login" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    Employee
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Choice;