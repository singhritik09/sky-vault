import axios from "axios";
import React, { useState } from "react";

const Card = ({ bondId, name, price }) => {
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
