import axios from 'axios';
import React, { useState, useEffect } from 'react';

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactionHistory();
    }, []);

    async function fetchTransactionHistory() {
        try {
            const response = await axios.get("http://localhost:8000/transaction-history");
            setTransactions(response.data);
        } catch (error) {
            console.log("Error:", error);
        }
    }

    return (
        <>
            <br/><br/><br/><br/><br/><br/>
            <div className="overflow-x-auto mt-42 flex justify-center align-center">
                <table className="border-collapse">
                    <thead>
                        <tr>
                            <th className="border-2 border-gray-800 px-4 py-2">Transaction ID</th>
                            <th className="border-2 border-gray-800 px-4 py-2">User ID</th>
                            <th className="border-2 border-gray-800 px-4 py-2">Receiver ID</th>
                            <th className="border-2 border-gray-800 px-4 py-2">Amount</th>
                            <th className="border-2 border-gray-800 px-4 py-2">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(transactions) && transactions.map((transaction, index) => (
                            <tr key={index}>
                                <td className="border-t border-b border-gray-500 px-4 py-2">{transaction.transactionId}</td>
                                <td className="border-t border-b border-gray-500 px-4 py-2">{transaction.userId}</td>
                                <td className="border-t border-b border-gray-500 px-4 py-2">{transaction.receiverId}</td>
                                <td className="border-t border-b border-gray-500 px-4 py-2">
                                    {transaction.credit ? '+' : ''} {transaction.amount}
                                </td>
                                <td className="border-t border-b border-gray-400 px-4 py-2">{transaction.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TransactionHistory;
