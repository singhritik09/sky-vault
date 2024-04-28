// LoanModal.js
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
const Loan = () => {
    const [amount, setAmount] = useState(0);
    const [time, setTime] = useState("");
    const [pancardNum, setPan] = useState("");
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/loan",
                { amount, time, pancardNum })
            if (response.status === 400 || response.data.message === "LOGINREQ") {
                window.alert("You need to login first");
            }
            if (response.data.message === "CREATE") {
                window.alert("User account not registered. Regiater First!")
            }

            if (response.data.message === 'SUCCESS') {
                window.alert("Application Successful");
                navigate('/home')
            }
        }
        catch (e) {
            console.log("Error:", e)
        }
    }

    return (
        <>
        <Layout/>
            <div className="mt-48 fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-2 py-6 space-y-2 md:space-y-6 sm:p-8">
                        <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Apply for instant loan
                        </h1>
                        <form className="space-y-4 md:space-y-2" method="post" >

                            <div>
                                <label for="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                                <input
                                    value={amount}
                                    onChange={(e) => { setAmount(e.target.value) }}
                                    type="number" name="amount" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Amount" required="true" />
                            </div>
                            <div>
                                <label for="time" className="text-white">Time Period:</label>

                                <select name="time" id="time" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Amount" required="true"
                                    value={time}
                                    onChange={(e) => { setTime(e.target.value) }}
                                >
                                    <option value="1/2">6 monthsyr</option>
                                    <option value="1">1yr</option>
                                    <option value="2">2yrs</option>
                                    <option value="3">3yrs</option>
                                </select>
                            </div>


                            <div>
                                <label for="pan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PAN Card</label>
                                <input
                                    value={pancardNum}
                                    onChange={(e) => { setPan(e.target.value) }}
                                    type="pan" name="pan" id="pan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Pan details" required="true" />
                            </div>


                            <button type="submit" className="ml-36 text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 text-center " onClick={handleSubmit}>Apply</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loan;
