import React, { useState } from "react";
import bankimage from '../../assets/images/bankimage.jpg'
import stackmoney from '../../assets/images/stackmoney.jpg'
import { SiGmail } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";
import Footer from "./Footer";
import Layout from "./Layout";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoMdClose } from "react-icons/io";
import axios1 from "../../axiosInstance";

const Home = () => {
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");
    const [description, setDesc] = useState("");
    const [password,setPassword]=useState("");

    async function handleSubmit() {
        try{
        const res = await axios1.post("/query", { email, password,query, description })
        }
        catch(error){
            console.log("Error")
        }
    }

    return (<>
        <Layout />
        <br /><br /><br /><br /><br /><br /><br />
        <div className="container h-3/4 items-center justify center ">

            <div>
                <div className="text-center">
                    <p className="text-3xl sm:text-3xl md:text-3xl  text-gray-600">Get banking and bond services at ease with <br /> security and full transparency</p>
                    <div className="flex justify-center items-center ">
                        <p className="text-left mr-40 text-lg text-gray-500">
                            No minimum balance 🤘 <br />
                            Zero interest rate on Bonds✨<br />
                            Use from anywhere💳 <br />
                            No hidden fees 🔎 <br />
                            Secure transaction of ₹Money ✅<br />
                        </p>
                        <img src={bankimage} alt="" className="h-120 w-80" />
                    </div>

                </div>

                <div className="mt-16 text-center">
                    <div>
                        <p className="text-3xl text-gray-600">Invest like you're having fun</p>
                    </div>
                    <div className="flex">
                        <img src={stackmoney} alt="" className="h-100 w-80 lg:ml-20" />
                        <p className="text-lg text-gray-500 text-left mt-28 ml-32"> SIPs are cool. But how about investing in PSU and private bonds?<br />Choose from 100s of bonds and use FIT Rules to invest in them.</p>
                    </div>
                </div>

                <div className="mt-16 text-center ">
                    <p className="text-3xl text-gray-600">Always there for you <br />24/7 Customer support</p>
                    <p className="text-lg text-gray-500 text-center mt-16"> Have any queries? Any trouble on the platform?<br />Write an email or contact us.</p>

                    <div className="flex items-center justify-center text-4xl mt-5 text-gray-600 cursor-pointer mb-10">
                        <a href="tel:8431102475"><RiCustomerService2Line /></a>


                        <div className="ml-10 h-2/3">

                            <Popup trigger={<button> <SiGmail /></button>} modal nested>
                                {({ close }) => (
                                    <div className='modal h-96 max-w-md rounded-lg shadow-md'>

                                        <form className="max-w-sm mx-auto">
                                            <div className="mb-5">
                                                <label for="email" className="block mb-2 text-sm font-medium text-gray-600 ">Your email</label>
                                                <input
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                                            </div>
                                            <div className="mb-5">
                                                <label for="password" className="block mb-2 text-sm font-medium text-gray-600 ">Password</label>
                                                <input
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="••••••••" required />
                                            </div>

                                            <div className="mb-5">
                                                <label for="password" className="block mb-2 text-sm font-medium text-gray-600 ">Your Query/Complaint</label>
                                                <input
                                                    value={query}
                                                    onChange={(e) => setQuery(e.target.value)}
                                                    type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />  {/* Changed type to "text" for query/complaint */}
                                            </div>
                                            <div className="mb-5">
                                                <label for="repeat-password" className="block mb-2 text-sm font-medium text-gray-600">Description</label>
                                                <input
                                                    value={description}
                                                    onChange={(e) => setDesc(e.target.value)}
                                                    type="text" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                                            </div>
                                            <button type="submit"
                                                onClick={handleSubmit}
                                                className="text-white ml-44 mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                                        </form>
                                    </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
    );
}

export default Home;