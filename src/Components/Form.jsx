import React from "react";

export const Form = () => {
  return (
    <>
     
      <form className="shadow m-8 border flex-col justify-centre items-center">
        <div className="flex justify-around">
          <input type="date" className="border border-gray-900 p-2"/>
          <input type="text" className="border border-gray-900 p-2"/>
          <input type="text" className="border border-gray-900 p-2"/>
          <input type="number" className="border border-gray-900 p-2"/>
        </div>
        <button className="bg-gray-400 py-2 px-4 my-4">Add Transactions</button>
      </form>
    </>
  );
};