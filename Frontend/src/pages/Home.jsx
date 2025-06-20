import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import uberbg from "../assets/uberbg.avif"; // Adjust the path as necessary
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${uberbg})` }}
    >
      <header className="pt-8 px-6">
        <h1 className="text-4xl text-white font-bold drop-shadow-lg">Uber</h1>
      </header>

      <main className="bg-white w-full max-w-md mx-auto rounded-t-3xl shadow-lg py-6 px-4 mt-auto mb-0">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Get Started with Uber</h2>
        <Link
          to="/user-login"
          className="flex items-center justify-between bg-black hover:bg-gray-900 transition-colors rounded-xl px-5 py-3 text-white font-medium text-base shadow"
        >
          Continue
          <FaLongArrowAltRight size={24} className="ml-2" />
        </Link>
      </main>
    </div>
  );
};

export default Home;
