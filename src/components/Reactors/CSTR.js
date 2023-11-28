import React, { useEffect, useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import Loader from "../Auth/Loader/Loader";

const CSTR = ({ onHandleCSTRSubmit, loading }) => {
  const [inputs, setInputs] = useState({
    rate_constant: 0.0,
    inlet_concentration: 0.0,
    capacity: 0.0,
  });
  const [errors, setErrors] = useState({});
  const [isHidden, setIsHidden] = useState(false);

  const toggleInputs = () => {
    setIsHidden((prevState) => !prevState);
  };

  const validateInputs = () => {
    const newErrors = {};

    for (const key in inputs) {
      if (isNaN(inputs[key]) || inputs[key] <= 0) {
        newErrors[key] = `${key} must be a positive number`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedClick = () => {
    if (validateInputs()) {
      const data = generateFractionalConversions().map((conversion) => ({
        rate_constant: inputs.rate_constant,
        inlet_concentration: inputs.inlet_concentration,
        capacity: inputs.capacity,
        conversion: conversion,
      }));

      onHandleCSTRSubmit(data);
    }
  };

  const handleInputChange = (value, field) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [field]: Number(value),
    }));
  };

  const generateFractionalConversions = () => {
    const fractions = [];
    for (let i = 0.05; i <= 1; i += 0.05) {
      fractions.push(i);
    }
    console.log(fractions);
    // return;
    return fractions;
  };

  return (
    <>
      <div className="bg-backgroundDark space-y-5 px-5 py-5 border border-borderColor rounded-lg">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h4 className="font-raleway font-bold sm:text-lg capitalize">
              Parameters for CSTR
            </h4>
            <p className="font-semibold text-sm capitalize">
              (*First-order Reactions Only)
            </p>
          </div>
          <button
            type="button"
            className={`flex uppercase space-x-2 justify-center w-fit items-center px-3 py-2  font-bold rounded-md border  text-backgroundRed border-borderColor
           hover:brightness-90 tracking-widest font-poppins`}
            onClick={toggleInputs}
          >
            <span>{isHidden ? "show" : "Hide"}</span>
          </button>
        </div>
        <div
          className={` ${
            isHidden ? "hidden" : "flex"
          } space-y-5 items-start w-full`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            <div className="space-y-2 w-full">
              <p className="font-semibold text-sm capitalize">
                Enter rate constant
              </p>
              <CustomInput
                value={inputs.rate_constant}
                onChange={(value) => handleInputChange(value, "rate_constant")}
                type="number"
                placeholder={`Enter rate constant`}
              />
              {errors.rate_constant && (
                <span className="font-semibold text-xs text-backgroundRed">
                  {errors.rate_constant}
                </span>
              )}
              <p className="font-semibold text-xs capitalize">
                *Unit: per hour
              </p>
            </div>
            <div className="space-y-2 w-full">
              <p className="font-semibold text-sm capitalize">
                Inlet Concentration
              </p>
              <CustomInput
                value={inputs.inlet_concentration}
                onChange={(value) =>
                  handleInputChange(value, "inlet_concentration")
                }
                type="number"
                placeholder={`Inlet Concentration`}
              />
              {errors.inlet_concentration && (
                <span className="font-semibold text-xs text-backgroundRed">
                  {errors.inlet_concentration}
                </span>
              )}
              <p className="font-semibold text-xs capitalize">*Unit: kmol/m³</p>
            </div>
            <div className="space-y-2 w-full">
              <p className="font-semibold text-sm capitalize">Capacity</p>
              <CustomInput
                value={inputs.capacity}
                onChange={(value) => handleInputChange(value, "capacity")}
                type="number"
                placeholder={`Capacity`}
              />
              {errors.capacity && (
                <span className="font-semibold text-xs text-backgroundRed">
                  {errors.capacity}
                </span>
              )}
              <p className="font-semibold text-xs capitalize">*Unit: m³/hr</p>
            </div>
          </div>
        </div>

        <div className="w-full space-x-3 flex justify-end">
          <button
            disabled={loading}
            type="button"
            className={`flex uppercase space-x-2 justify-center w-fit items-center px-5 py-3 grow sm:grow-0 font-bold rounded-md border  ${
              loading
                ? "text-[rgba(210,2,2,0.42)] border-[rgba(210,2,2,0.42)]"
                : "text-backgroundRed border-backgroundRed"
            } hover:brightness-90 tracking-widest font-poppins`}
            onClick={handleProceedClick}
          >
            {loading && <Loader color={"text-backgroundRed"} />}
            <span>Proceed</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CSTR;
