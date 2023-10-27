// SearchBox.js
import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="w-64 sm:py-2 py-0 flex items-center bg-backgroundDark px-6">
      <svg
        style={{ color: "#686868", marginRight: ".7rem" }}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        value={value}
        placeholder="Search"
        className="border-none placeholder:text-borderColor bg-transparent p-2  w-full focus:outline-none"
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
      <svg
        style={{ color: "#686868", transform: "rotate(90deg)" }}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    </div>
  );
};

export default SearchBox;
