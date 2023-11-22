import React, { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import Loader from "../Auth/Loader/Loader";

const PFR = ({ onHandlePFRSubmit, loading }) => {
  // State to manage input values and error messages
  const [rateConstant, setRateConstant] = useState(0.0);
  const [inletConcentration, setInletConcentration] = useState(0.0);
  const [desiredConversion, setDesiredConversion] = useState(0.0);
  const [errors, setErrors] = useState({});

  // Validation function to check if the input values are valid
  const validateInputs = () => {
    const newErrors = {};

    if (isNaN(rateConstant) || rateConstant <= 0) {
      newErrors.rateConstant = "Rate constant must be a positive number";
    }

    if (isNaN(inletConcentration) || inletConcentration <= 0) {
      newErrors.inletConcentration =
        "Inlet concentration must be a positive number";
    }

    if (
      isNaN(desiredConversion) ||
      desiredConversion <= 0 ||
      desiredConversion > 1
    ) {
      newErrors.desiredConversion =
        "Desired conversion must be between 0 and 1";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if there are no errors
  };

  // Handler function for the "Proceed" button click
  const handleProceedClick = () => {
    // Validate inputs before submitting
    if (validateInputs()) {
      // Call the parent component's submit function with the input values
      onHandlePFRSubmit({
        rate_constant: rateConstant,
        inlet_concentration: inletConcentration,
        desired_conversion: desiredConversion,
      });
    }
  };

  return (
    <>
      <div className="bg-backgroundDark space-y-5 px-5 py-5 border border-borderColor rounded-lg">
        <div className="space-y-2">
          <h4 className="font-raleway font-bold sm:text-lg capitalize  ">
            Parameters for PFR
          </h4>
          <p className="font-semibold text-sm capitalize">
            (*First-order Reactions Only)
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* Rate Constant Input */}
          <div className="space-y-2 w-full">
            <p className="font-semibold text-sm capitalize">
              Enter rate constant
            </p>
            <CustomInput
              value={rateConstant}
              onChange={(value) => setRateConstant(Number(value))}
              type={"number"}
              placeholder={"Enter rate constant"}
            />
            {errors.rateConstant && (
              <span className="font-semibold text-xs text-backgroundRed">
                {errors.rateConstant}
              </span>
            )}
            <p className="font-semibold text-xs capitalize">
              *Unit: per second
            </p>
          </div>
          {/* Inlet Concentration Input */}
          <div className="space-y-2 w-full">
            <p className="font-semibold text-sm capitalize">
              Inlet Concentration
            </p>
            <CustomInput
              value={inletConcentration}
              onChange={(value) => setInletConcentration(Number(value))}
              type={"number"}
              placeholder={"Inlet Concentration"}
            />
            {errors.inletConcentration && (
              <span className="font-semibold text-xs text-backgroundRed">
                {errors.inletConcentration}
              </span>
            )}
            <p className="font-semibold text-xs capitalize">
              *Unit: mol/m&#179;
            </p>
          </div>
          {/* Desired Conversion Input */}
          <div className="space-y-2 w-full">
            <p className="font-semibold text-sm capitalize">
              Desired Conversion
            </p>
            <CustomInput
              value={desiredConversion}
              onChange={(value) => setDesiredConversion(Number(value))}
              type={"number"}
              placeholder={"Desired Conversion"}
            />
            {errors.desiredConversion && (
              <span className="font-semibold text-xs text-backgroundRed">
                {errors.desiredConversion}
              </span>
            )}
          </div>
        </div>
        <div className="w-full flex justify-end">
          {/* Proceed Button */}
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

export default PFR;
