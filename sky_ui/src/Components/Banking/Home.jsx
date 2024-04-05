import React from "react";
import bankimage from '../../assets/images/bankimage.jpg'
import stackmoney from '../../assets/images/stackmoney.jpg'
import { SiGmail } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";
import Footer from "./Footer";
import Layout from "./Layout";
const Home = () => {
    return (<>
        <Layout/>
        <br /><br /><br /><br /><br /><br /><br />
        <div className="container h-3/4 items-center justify center ">

            <div>

                <div className="text-center">
                <p className="text-3xl sm:text-3xl md:text-3xl  text-gray-600">Get banking and bond services at ease with <br /> security and full transparency</p>

                    <div className="flex justify-center items-center ">
                    <p className="text-left mr-40 text-lg text-gray-500">
                        No minimum balance 🤘 <br/>
                        Zero interest rate on Bonds✨<br/>
                        Use from anywhere💳 <br/>
                        No hidden fees 🔎 <br/>
                        Secure transaction of ₹Money ✅<br/>
                        </p>
                    <img src={bankimage} alt="" className="h-120 w-80" />
                    </div>

                </div>

                <div className="mt-16 text-center">
                    <div>
                        <p className="text-3xl text-gray-600">Invest like you're having fun</p>
                    </div>
                    <div className="flex">
                        <img src={stackmoney} alt="" className="h-100 w-80 lg:ml-20"/>
                        <p className="text-lg text-gray-500 text-left mt-28 ml-32"> SIPs are cool. But how about investing in PSU and private bonds?<br/>Choose from 100s of bonds and use FIT Rules to invest in them.</p>
                    </div>
                </div>

                <div className="mt-16 text-center ">
                        <p className="text-3xl text-gray-600">Always there for you <br/>24/7 Customer support</p>
                        <p className="text-lg text-gray-500 text-center mt-16"> Have any queries? Any trouble on the platform?<br/>Write an email or contact us.</p>
                        
                        <div className="flex items-center justify-center text-4xl mt-5 text-gray-600 cursor-pointer mb-10">
                            <RiCustomerService2Line/>
                            <div className="ml-10">
                            <SiGmail/>
                            </div>
                        </div>
                </div>



            </div>
            <Footer/>
        </div>
    </>
    );
}

export default Home;