import React from "react";
import { Link } from "react-router-dom";

const contactUs = () => {
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-black">
        <div className="flex flex-col items-center justify-center h-3/4 w-1/4 bg-[#00ff01] rounded-lg">
            <h1 className="text-4xl italic font-semibold">Contact Us</h1>
            <div>
            <form className="flex flex-col items-center justify-center">
                <label className="text-2xl font-semibold">Name</label>
                <input className="text-1xl font-semibold rounded-lg border-2 border-black" required type="text" placeholder="Name" />
                <label className="text-2xl font-semibold">Email</label>
                <input className="text-1xl font-semibold rounded-lg border-2 border-black" required type="email" placeholder="Email" />
                <label className="text-2xl font-semibold">Message</label>
                <textarea className="text-1xl font-semibold rounded-lg border-2 border-black" required minLength={20} maxLength={500} type="text" placeholder="Message" />
                <button className="text-2xl bg-black text-[#00ff01] hover:text-black font-semibold rounded-lg border-2 mt-4 border-black">Submit</button>
                <Link to= '/'><button className="text-2xl bg-black text-[#00ff01] hover:text-black font-semibold rounded-lg border-2 mt-4 border-black">Home</button></Link>
            </form>
            </div>
        </div>
        </div>
    );
};

export default contactUs;