import React from "react";
import { Link } from "react-router-dom";

const PickGraphic = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">PICK GRAPHIC</h1>
        <div>
          <Link to="/logo-maker/pick-template">
            <div className="w-72 h-96 bg-gray-200 hover:bg-gray-100 rounded-lg flex justify-center items-center">
              Logo maker
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PickGraphic;
