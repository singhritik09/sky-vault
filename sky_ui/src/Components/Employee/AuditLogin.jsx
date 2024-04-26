import React, { useEffect, useState } from "react";
import AlternateLayout from "../Banking/AlternateLayout";
import axios from 'axios';

const AuditLogin = () => {
    const [log, setLog] = useState([]);

    async function handleLogs() {
        try {
            const response = await axios.get("http://localhost:8000/audit-logs")
            setLog(response.data);
        }
        catch (e) {
            console.log("Error: ", e);
        }
    }

    useEffect(() => {
        handleLogs();
    }, [])

    return (
        <>
            <style>
                {`
                    body, html {
                        height: 100%;
                        margin: 0;
                        background: linear-gradient(to bottom, #4287f5, #ffffff);
                    };
                `}
            </style>

            <AlternateLayout />
            <h2 className="mt-32 ml-52 text-4xl text-gray-600">Users Login</h2>

            <div className="flex">

                <div className='container cursor-pointer text-gray-600'>
                    <table className='border-2 mt-12 table-auto border-gray-600 ml-40'>
                        <thead className='border border-green-700 text-center'>
                            <tr>
                                <th className='border px-8 py-6 border-green-700'>Employee ID</th>
                                <th className='border px-8 py-6 border-green-700'>Role</th>
                                <th className='border px-8 py-6 border-green-700'>Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-green-600 text-left">
                            {log.map((log) => (
                                <tr className='border border-green-700' key={log.employeeId}>
                                    <td className='border px-8 py-6 border-green-700'>{log.employeeId}</td>
                                    <td className='border px-8 py-6 border-green-700'>{log.role}</td>
                                    <td className='border px-8 py-6 border-green-700'>{log.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default AuditLogin;
