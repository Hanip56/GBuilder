import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-y-4 justify-center items-center">
      <h1 className="text-4xl font-bold">GBUILDER</h1>
      <p className="text-xl">Create simple logo design in seconds.</p>
      <Link to="/logo-maker/naming">
        <button className="font-bold py-2 px-4 border border-black hover:bg-black/5 mt-2">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;
