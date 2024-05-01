import React, { useEffect, useState } from "react";
import atm from '../../assets/images/atm.jpg'
import axios from "axios";
import { useLocation } from "react-router-dom";
import TransactionHistory from "../Banking/TransactionHistory";
import background from '../../assets/images/background2.jpg'
const UserDashBoard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const location = useLocation();

    useEffect(() => {
        fetchDetails();
    }, []);

    async function fetchDetails() {
        try {
            const response = await axios.get("http://localhost:8000/dashboard");

            if (response.data.authenticated) {
                setUser(response.data.user);
            } else {
                window.alert("User not authenticated");
                window.location.href = "/login";
            }
        } catch (error) {
            console.log("Error: ", error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {

        return <>
            <div className="container mt-36">
                <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg bg-gray-100">
                    <div className="flex justify-center items-center h-40 w-40 ml-20 mt-2">
                        <img className="object-cover w-full h-full rounded-full" src={background} alt="ATM" />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2"></div>
                        <p className="text-gray-700 text-base">
                            You need to login first
                        </p>
                    </div>
                </div>
            </div>

        </>;
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
            <div className="container mt-36">
                <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg bg-gray-100">
                    <div className="flex justify-center items-center h-40 w-40 ml-20 mt-2">
                        <img className="object-cover w-full h-full rounded-full" src={atm} alt="ATM" />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{user.name}</div>
                        <p className="text-gray-700 text-base">
                            {user.userId}
                        </p>
                    </div>
                </div>
            </div>
            <TransactionHistory />
        </>
    );
}

export default UserDashBoard;
