import React from "react";
import { Link } from "react-router-dom";

const aboutUs = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
        <div className="flex flex-col rounded-lg items-center justify-center h-1/2 w-1/2 bg-[#00ff01]">
            <h1 className="text-6xl font-mono tracking-wide italic hover:font-serif font-semibold">ABOUT US</h1>
            <p className="text-2xl font-mono uppercase align-middle text-center italic font-semibold">
            This web page was born as a request for the Final Project of the FT27B group 07 team,
            in order to graduate from Henry, made up of a team of 7 people, from 3 different countries,
            they work hard to offer the project owner a sample of their skills and teamwork to be able to graduate successfully
            </p>
        </div>
        <div className="flex justify-center">
            <Link to= '/'><button className="text-2xl bg-[#00ff01] text-black hover:text-[#00ff01] font-semibold rounded-lg border-2 mt-4 border-[#00ff01]">Home</button></Link>
            </div>
        </div>
    );
};

export default aboutUs;