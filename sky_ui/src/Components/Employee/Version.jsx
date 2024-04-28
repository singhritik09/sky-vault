import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bankimage from '../../assets/images/bankimage.jpg'
import AlternateLayout from '../Banking/AlternateLayout';
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const Version = () => {
    const [commits, setCommits] = useState([]);


    // #D8B5FF → #1EAE98


    return (
        <>

            <style>
                {`
                    body, html {
                        height: 100%;
                        margin: 0;
                        background: linear-gradient(to right, #D8B5FF, #1EAE98);
                    };
                `}
            </style>
            <AlternateLayout />
            <div className="mt-48 w-2/5 ml-10 h-auto bg-gray-100 rounded-lg shadow-md flex items-center p-4">
                <img
                    src={bankimage} // Replace with your image path
                    alt="Information Card Image"
                    className="h-24 w-20 object-cover mr-4 rounded-lg"
                />
                <div className="flex flex-col space-y-2">
                    <h2 className="text-xl font-bold text-gray-800">Version: 1.0</h2>
                    <p className="text-gray-600">Author: Ritik Singh <span className='text-xs'>singhritik2711@gmail.com</span> </p>
                    <div className='flex text-2xl'>
                        <a href="https://github.com/singhritik09/sky-vault" className="text-gray-800 hover:underline">
                            <FaGithub />
                        </a>
                        <a href="mailto:singhritik2711@gmail.com" className='ml-4 text-red-600'>
                            <BiLogoGmail />
                        </a>
                        <a href="https://www.linkedin.com/in/ritik-singh-71346b209/" className='ml-4 text-blue-600'>
                            <FaLinkedin />
                        </a>
                    </div>

                </div>
            </div>


        </>
    );
};

export default Version;
