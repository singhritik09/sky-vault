import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const LoanApplications = () => {
    const [loans, setLoans] = useState([]);
    const approve = false;

    const fetchLoans = async () => {
        try {
            console.log("Hello")
            const response = await axios.get("http://localhost:8000/loan-applications");
            setLoans(response.data);
        } catch (error) {
            console.error("Error fetching loans:", error);
        }
    };

    useEffect(() => {
        fetchLoans();
    }, [])


    async function handleApprove(loanId) {
        const response = await axios.post("http://localhost:8000/loan-applications", {
            loanId: loanId,
            approve: true
        })
    }

    async function handleReject(loanId) {
        const response = await axios.post("http://localhost:8000/loan-applications", {
            loanId: loanId,
            approve: false
        })
    }

    return (
        <div className='container w-4/5 mt-20 h-3/5 cursor-pointer bg-white text-gray-600'>
            <table className='table-auto border rounded-md border-gray-500 ml-40'>
                <thead className='border border-gray-400 text-center'>
                    <tr>
                        <th className='border  border-gray-400'>Loan ID</th>
                        <th className='border border-gray-400'>User ID</th>
                        <th className='border border-gray-400'>Amount</th>
                        <th className='border px-2 border-gray-400'>Interest %</th>
                        <th className='border border-gray-400'>Per Month</th>
                        <th className='border border-gray-400'>Apply Date</th>
                        <th className='border border-gray-400'>Contact Number</th>
                        <th className='border px-2 border-gray-400'>Approve</th>

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
                            <td className='border px-3 py-2 border-gray-400'>
                                <div className="flex">

                                    <div className="text-green-800 mr-4 text-xl" onClick={()=>handleApprove(loan.loanId)}>
                                        <FaCheck />
                                    </div>
                                    <div className="text-red-600 text-xl" onClick={()=>handleReject(loan.loanId)}>
                                        <RxCross2 />
                                    </div>
                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>);
}

export default LoanApplications;