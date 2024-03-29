import React, { useState,useEffect } from "react";
import Card from './Card';
import axios from "axios";
const Bonds = () => {

    const [bonds,setBonds]=useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:8000/bonds");
                setBonds(response.data);
            } catch (error) {
                console.error("Error fetching bonds:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <br /><br /><br />
            <div className="mt-32 flex flex-wrap ml-5">
            {bonds.map(bond=>(
            <Card key={bond._id} bondId={bond.bondId} name={bond.bondName} price={bond.price}/>
            ))}

            </div>
        </>
    );
}

export default Bonds;