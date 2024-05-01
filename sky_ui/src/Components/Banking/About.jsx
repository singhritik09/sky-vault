import React from "react";
import background from '../../assets/images/background2.jpg';

const About = () => {
    return (
        <div className="mt-20 relative h-screen">
            {/* Image container */}
            <div className="absolute inset-0 flex items-center justify-center">
                <img src={background} alt="Background" className="w-1/4 h-1/4 md:w-full md:h-full object-cover" />
            </div>
            {/* Text on top */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold">You need to Login</h1>
            </div>
        </div>
    );
}

export default About;
