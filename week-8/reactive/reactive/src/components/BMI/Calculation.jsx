import React from 'react';

const Calculation = () => {
    return (
        <form className="flex flex-col sm:flex-row sm:gap-3 ">
            <div className="mb-4 flex flex-row items-center">
                <input type="number" id="height" name="height"
                       className="mt-1 p-1 border border-gray-700 rounded w-56 sm:w-full"
                       placeholder="Your Height"/>
                <label className="block text-gray-700 pl-2">cm</label>
            </div>
            <div className="mb-4 flex flex-row items-center">
                <input type="number" id="weight" name="weight"
                       className="mt-1 p-1 border border-gray-700 rounded w-56 sm:w-full"
                       placeholder="Your Weight"/>
                <label className="block text-gray-700 pl-2">kg</label>
            </div>
        </form>
    );
};
export default Calculation;