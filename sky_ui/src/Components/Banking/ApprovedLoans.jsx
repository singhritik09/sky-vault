import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Layout from "./Layout";
import AlternateLayout from "./AlternateLayout";

const ApprovedLoans = () => {
    const [loans, setLoans] = useState([]);


    const fetchLoans = async () => {
        try {
            console.log("Hello")
            const response = await axios.get("http://localhost:8000/approved-loans");
            setLoans(response.data);
        } catch (error) {
            console.error("Error fetching loans:", error);
        }
    };

    useEffect(() => {
        fetchLoans();
    }, [])



    return (
        <>
            <AlternateLayout />
            <div className='container w-4/5 mt-48 h-3/5 cursor-pointer bg-white text-gray-600'>
                <table className='table-auto border rounded-md border-gray-500 ml-40'>
                    <thead className='border border-gray-400 text-center'>
                        <tr>
                            <th className='border  border-gray-400'>Loan ID</th>
                            <th className='border border-gray-400'>User ID</th>
                            <th className='border border-gray-400'>Amount</th>
                            <th className='border px-2 border-gray-400'>Interest %</th>
                            <th className='border border-gray-400'>Per Month</th>
                            <th className='border border-gray-400'>Date</th>
                            <th className='border border-gray-400'>Contact Number</th>

                        </tr>
                    </thead>
                    <tbody className="text-green-600 text-left">
                        {loans.map((loan) => (
                            <tr className='border border-gray-400' key={loan.loanId}>
                                <td className='border px-3 py-2 border-gray-400'>{loan.loanId}</td>
                                <td className='border px-3 py-2 border-gray-400'>{loan.userId}</td>
                                <td className='border px-3 py-2 border-gray-400'>{loan.amount}</td>
                                <td className='border px-3 py-2 border-gray-400' >{loan.interest}</td>
                                <td className='border px-3 py-2 border-gray-400'>{loan.amountPermonth}</td>
                                <td className='border px-3 py-2 border-gray-400'>{loan.issueDate}</td>
                                <td className='border px-3 py-2 border-gray-400'>{loan.mobileNum}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ApprovedLoans;