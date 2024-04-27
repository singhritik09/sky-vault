import React, { useEffect, useState } from "react";
import atm from '../../assets/images/atm.jpg'
import axios from "axios";
import { useLocation } from "react-router-dom"; // Import useLocation
import TransactionHistory from "../Banking/TransactionHistory";

const UserDashBoard = () => {
    const [user, setUser] = useState(null);
    const location = useLocation();
    
    useEffect(() => {
        fetchDetails();
    }, []);

    async function fetchDetails() {
        try {
            const { email } = location.state;

            const response = await axios.get(`http://localhost:8000/dashboard?email=${email}`);

            if (response.data.message === "User not found") {
                window.alert("User not found");
                window.location.href = "/login";
            } else {
                setUser(response.data);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    if (!user) {
        return <div>Loading...</div>;
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
