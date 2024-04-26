import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpass, setCpass] = useState("");
    const [pancardNum, setPancardNumber] = useState("");
    const [mobileNum, setMobileNum] = useState("")
    const [alertMessage, setAlertMessage] = useState("");

    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate()
    async function handleFormSubmit(e) {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.post("http://localhost:8000/signup", {
                name, email, password, cpass, pancardNum, mobileNum
            });
            if (response.status === 400 || response.data.message === "PRESENT") {
                setShowDialog(true)
                setAlertMessage("User already exists. Please choose a different email.");
                window.alert("User already exists")
            }
            if (response.data.message === "NOTMATCH") {
                window.alert("Passwords do not match")
            }
            if (response.data.message === "Invalid Card") {
                window.alert("Invalid PAN card")
            }

            console.log("Form submitted")
            setName("");
            setEmail("");
            setPassword("");
            setPancardNumber("");
            setMobileNum("");
            setCpass("");
            if (response.data.message === "SUCCESS") {
                navigate('/home')
            }
        } catch (error) {
            console.log(error);
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

            <div className="flex flex-col h-full w-full sm:h-screen md:h-screen mb-0 items-center justify-center px-6 py-8 mx-auto lg:py-2" style={{ overflowX: 'hidden' }}>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-2 py-6 space-y-2 md:space-y-6 sm:p-8">
                        <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create Account
                        </h1>
                        <form className="space-y-4 md:space-y-2" method="post" >
                            <div>
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                                <input
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                    type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Name" required="true" />
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="name@domain.com" required="true" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // Wrap setPassword in an arrow function
                                    type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required="true" />
                            </div>
                            <div>
                                <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input
                                    value={cpass}
                                    onChange={(e) => { setCpass(e.target.value) }}
                                    type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required="" />
                            </div>
                            <div>
                                <label for="pancard" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PAN</label>
                                <input
                                    value={pancardNum}
                                    onChange={(e) => { setPancardNumber(e.target.value) }}
                                    type="text" name="pancard" id="pancard" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="PAN card number" required="true" />
                            </div>
                            <div>
                                <label for="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
                                <input
                                    value={mobileNum}
                                    onChange={(e) => { setMobileNum(e.target.value) }}
                                    type="phone" name="mobile" id="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Mobile number" required="true" />
                            </div>


                            <button type="submit" onClick={handleFormSubmit} className="ml-36 text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 text-center ">Create</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Signup;