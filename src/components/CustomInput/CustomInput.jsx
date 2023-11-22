import React, { useState } from "react";

const CustomInput = ({ value, onChange, placeholder, type }) => {
  const [inputValue, setInputValue] = useState(value || "");

  return (
    <div className="min-w-[256px] flex items-center bg-backgroundGrey  focus-within:border-backgroundRed border py-2 border-borderColor rounded-md px-3">
      <input
        type={type || "text"}
        value={inputValue}
        placeholder={placeholder}
        className="border-none bg-transparent font-poppins p-2 w-full focus:outline-none"
        onChange={(event) => {
          const newValue = event.target.value;
          setInputValue(newValue);
          onChange(newValue);
        }}
      />
    </div>
  );
};

export default CustomInput;
