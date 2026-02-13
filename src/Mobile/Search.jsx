import React from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div className="px-4 py-3 bg-white">
      <div className="relative">
        
        {/* Icon */}
        <FiSearch 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        {/* Input */}
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 rounded-full py-2.5 pl-11 pr-4 text-sm 
                     focus:outline-none focus:ring-2 focus:ring-red-400
                     transition-all duration-200"
        />
        
      </div>
    </div>
  );
}

export default Search;
