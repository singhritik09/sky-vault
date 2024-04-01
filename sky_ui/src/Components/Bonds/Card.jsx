import axios from "axios";
import React, { useState } from "react";

const Card = ({ bondId, name, price,rating}) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const totalPrice = quantity * price;

    async function buyBond(bondId) {
        try {
            await axios.post("http://localhost:8000/bonds", {
                bondId: bondId,
                quantity: quantity
            });
            window.alert(`You bought ${quantity} units of ${name} bond!`);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg ml-4 mt-2">
            <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">{name}</div>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {rating}
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        {/* Other rating SVGs */}
                    </div>
                
                <p className="text-gray-700 text-base">Price: ₹{price} per unit</p>
                <p className="text-gray-700 text-base">Total Price: ₹{totalPrice}</p>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                        <span className="bg-gray-100 text-gray-700 px-4 py-2">{quantity}</span>
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>
                    <button
                        className="bg-green-600 ml-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => buyBond(bondId)}
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
