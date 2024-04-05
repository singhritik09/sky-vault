import React, { useState,useEffect } from "react";
import Card from './Card';
import axios from "axios";
import Layout from "../Banking/Layout";
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
        <Layout/>
          
            <div className="mt-36 flex flex-wrap ml-5">
            {bonds.map(bond=>(
            <Card key={bond._id} bondId={bond.bondId} name={bond.bondName} price={bond.price} rating={bond.rating}/>
            ))}

            </div>
        </>
    );
}

export default Bonds;