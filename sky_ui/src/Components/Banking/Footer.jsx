import React from "react";

const Footer = () => {
    return (
        <>
            <div className="bg-gray-100 cursor-pointer">
                <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                        <p className="font-bold text-2xl mt-4 text-green-600">Sky Vault</p>
                    <div className="p-5">
                        <div className="text-lg uppercase text-green-600 font-bold">Services</div>

                        <a className="my-3 block" href="/transaction">Simple Transaction <span className="text-teal-600 text-xs p-1"></span></a><a
                                className="my-3 block" href="/bonds">PSU & Private Bonds <span className="text-teal-600 text-xs p-1">New</span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-lg uppercase text-green-600 font-bold">Support</div>
                        <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span></a><a
                            className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span></a><a
                                className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-lg uppercase text-green-600 font-bold">Contact us</div>
                        <a className="my-3 block" href="/#">B.M.S College of Engineeering, Bangalore, Karnataka
                            <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">skyvault11@gmail.com
                            <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 pt-2 cursor-pointer">
                <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center">
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="/#" className="w-6 mx-1">

                        </a>
                        <a href="/#" className="w-6 mx-1">

                        </a>
                        <a href="/#" className="w-6 mx-1">

                        </a>
                        <a href="/#" className="w-6 mx-1">

                        </a>
                        <a href="/#" className="w-6 mx-1">

                        </a>
                    </div>
                    <div className="my-5">
                        © Copyright 2020. All Rights Reserved.
                    </div>
                </div>
            </div>
        </>
    );
}


export default Footer;