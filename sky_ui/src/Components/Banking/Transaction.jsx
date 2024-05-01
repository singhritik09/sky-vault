import axios from "axios";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Transaction = () => {
    const [amount, setAmount] = useState(0);
    const [receiverId, setReceiver] = useState("");
    const [password, setPassword] = useState("");
    const [senderId, setSender] = useState("");
    const navigate = useNavigate();
    async function createTransaction(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/transaction", {
                amount, receiverId, password
            })
            if (response.data.message === "NOTMATCH") {
                window.alert("User not registered or invalid password")
            }
            if (response.data.message === "EXCEEDED") {
                window.alert("Not Enough balance in account");
            }
            if (response.data.message === "IDMATCH") {
                window.alert("User ID and Receiver ID can not be same")
            }
            if (response.data.message === "SUCCESS") {
                window.alert("Transaction successful")
                navigate('/')
            }
            // setAmount(0);
            // setReceiver("");
            // setPassword("");

        }
        catch (e) {
            console.log("Error: ", e);
        }
    }

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

            <div className="flex mt-16 flex-col h-full w-full sm:h-screen md:h-screen mb-0 items-center justify-center px-6 py-8 mx-auto lg:py-2" style={{ overflowX: 'hidden' }}>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-2 py-6 space-y-2 md:space-y-6 sm:p-8">
                        <h1 className="text-xl mb-5 font-bold leading-tight tracking-tight text-green-900 md:text-2xl dark:text-green-800">
                            Make Transaction
                        </h1>
                        <form className="space-y-4 md:space-y-2" method="post" onSubmit={createTransaction} >

                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-green-900 dark:text-green-700">Amount</label>
                                <input
                                    value={amount}
                                    onChange={(e) => { setAmount(e.target.value) }}
                                    type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="₹0.0" required="true" />
                            </div>
                            <div>
                                <label for="text" className="block mb-2 text-sm font-medium text-green-900 dark:text-green-700">Receiver ID</label>
                                <input
                                    value={receiverId}
                                    onChange={(e) => { setReceiver(e.target.value) }}
                                    type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="User ID" required="true" />
                            </div>

                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-green-900 dark:text-green-700">password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // Wrap setPassword in an arrow function
                                    type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required="true" />
                            </div>

                            <button type="submit" className="ml-36 text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 text-center ">Send</button>
                            <div className="flex">
                                <div className="mt-0.5">
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Transaction data is end to end encrypted
                                    </p>
                                </div>
                                <div className="ml-2 mt-1 text-gray-300">
                                    <FaLock />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Transaction;