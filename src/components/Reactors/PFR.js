import React, { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import Loader from "../Auth/Loader/Loader";

const PFR = ({ onHandlePFRSubmit, loading }) => {
  const [inputs, setInputs] = useState([
    {
      rate_constant: 0.0,
      inlet_concentration: 0.0,
      desired_conversion: 0.0,
      reactor_volume: 0.0,
      reactor_diameter: 0.0,
    },
  ]);
  const [errors, setErrors] = useState({});
  const [isHidden, setIsHidden] = useState(false);

  const toggleInputs = () => {
    setIsHidden((prevState) => !prevState);
  };

  const validateInputs = () => {
    const newErrors = {};

    inputs.forEach((input, index) => {
      if (isNaN(input.rate_constant) || input.rate_constant <= 0) {
        newErrors[`rateConstant${index}`] =
          "Rate constant must be a positive number";
      }

      if (isNaN(input.inlet_concentration) || input.inlet_concentration <= 0) {
        newErrors[`inletConcentration${index}`] =
          "Inlet concentration must be a positive number";
      }

      if (
        isNaN(input.desired_conversion) ||
        input.desired_conversion <= 0 ||
        input.desired_conversion > 1
      ) {
        newErrors[`desiredConversion${index}`] =
          "Desired conversion must be between 0 and 1";
      }

      if (isNaN(input.reactor_volume) || input.reactor_volume <= 0) {
        newErrors[`reactorVolume${index}`] =
          "Reactor volume must be a positive number";
      }

      if (isNaN(input.reactor_diameter) || input.reactor_diameter <= 0) {
        newErrors[`reactorDiameter${index}`] =
          "Reactor diameter must be a positive number";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedClick = () => {
    if (validateInputs()) {
      onHandlePFRSubmit(inputs);
    }
  };

  const handleInputChange = (value, field, index) => {
    setInputs((prevInputs) =>
      prevInputs.map((input, i) =>
        i === index ? { ...input, [field]: Number(value) } : input
      )
    );
  };

  const addInputSet = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      {
        rate_constant: 0.0,
        inlet_concentration: 0.0,
        desired_conversion: 0.0,
        reactor_volume: 0.0,
        reactor_diameter: 0.0,
      },
    ]);
    const inputDiv = document.getElementById(`input-${inputs.length - 1}`);
    if (inputDiv) {
      inputDiv.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const deleteInputSet = (index) => {
    setInputs((prevInputs) => prevInputs.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="bg-backgroundDark space-y-5 px-5 py-5 border border-borderColor rounded-lg">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h4 className="font-raleway font-bold sm:text-lg capitalize  ">
              Parameters for PFR
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
        <div className="space-y-3">
          {inputs.map((input, index) => (
            <div
              className={`${
                isHidden ? "hidden" : "flex"
              } space-x-5 items-start w-full border-b pb-5`}
              key={index}
            >
              <div className="space-y-3">
                <button className="border rounded-md cursor-default flex items-center font-semibold min-h-[20px] min-w-[35px] justify-center p-2 text-backgroundRed">
                  {index + 1}
                </button>
                <button
                  onClick={() => deleteInputSet(index)}
                  className="border rounded-md flex items-center font-semibold min-h-[20px] min-w-[35px] justify-center p-2 text-backgroundRed"
                >
                  x
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                <div className="space-y-2 w-full">
                  <p className="font-semibold text-sm capitalize">
                    Enter rate constant {index + 1}
                  </p>
                  <CustomInput
                    value={input.rate_constant}
                    onChange={(value) =>
                      handleInputChange(value, "rate_constant", index)
                    }
                    type="number"
                    placeholder={`Enter rate constant ${index + 1}`}
                  />
                  {errors[`rateConstant${index}`] && (
                    <span className="font-semibold text-xs text-backgroundRed">
                      {errors[`rateConstant${index}`]}
                    </span>
                  )}
                  <p className="font-semibold text-xs capitalize">
                    *Unit: per second
                  </p>
                </div>
                <div className="space-y-2 w-full">
                  <p className="font-semibold text-sm capitalize">
                    Inlet Concentration {index + 1}
                  </p>
                  <CustomInput
                    value={input.inlet_concentration}
                    onChange={(value) =>
                      handleInputChange(value, "inlet_concentration", index)
                    }
                    type="number"
                    placeholder={`Inlet Concentration ${index + 1}`}
                  />
                  {errors[`inletConcentration${index}`] && (
                    <span className="font-semibold text-xs text-backgroundRed">
                      {errors[`inletConcentration${index}`]}
                    </span>
                  )}
                  <p className="font-semibold text-xs capitalize">
                    *Unit: mol/s
                  </p>
                </div>
                <div className="space-y-2 w-full">
                  <p className="font-semibold text-sm capitalize">
                    Desired Conversion {index + 1}
                  </p>
                  <CustomInput
                    value={input.desired_conversion}
                    onChange={(value) =>
                      handleInputChange(value, "desired_conversion", index)
                    }
                    type="number"
                    placeholder={`Desired Conversion ${index + 1}`}
                  />
                  {errors[`desiredConversion${index}`] && (
                    <span className="font-semibold text-xs text-backgroundRed">
                      {errors[`desiredConversion${index}`]}
                    </span>
                  )}
                  <p className="font-semibold text-xs capitalize">
                    *Unit: none
                  </p>
                </div>
                <div className="space-y-2 w-full">
                  <p className="font-semibold text-sm capitalize">
                    Reactor Volume {index + 1}
                  </p>
                  <CustomInput
                    value={input.reactor_volume}
                    onChange={(value) =>
                      handleInputChange(value, "reactor_volume", index)
                    }
                    type="number"
                    placeholder={`Reactor Volume ${index + 1}`}
                  />
                  {errors[`reactorVolume${index}`] && (
                    <span className="font-semibold text-xs text-backgroundRed">
                      {errors[`reactorVolume${index}`]}
                    </span>
                  )}
                  <p className="font-semibold text-xs capitalize">*Unit: m³</p>
                </div>
                <div className="space-y-2 w-full">
                  <p className="font-semibold text-sm capitalize">
                    Reactor Diameter {index + 1}
                  </p>
                  <CustomInput
                    value={input.reactor_diameter}
                    onChange={(value) =>
                      handleInputChange(value, "reactor_diameter", index)
                    }
                    type="number"
                    placeholder={`Reactor Diameter ${index + 1}`}
                  />
                  {errors[`reactorDiameter${index}`] && (
                    <span className="font-semibold text-xs text-backgroundRed">
                      {errors[`reactorDiameter${index}`]}
                    </span>
                  )}
                  <p className="font-semibold text-xs capitalize">*Unit: m</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex space-x-3 justify-end">
          <button
            type="button"
            className="flex uppercase space-x-2 justify-center w-fit items-center px-5 py-3 grow sm:grow-0 font-bold rounded-md border text-backgroundRed hover:brightness-90 tracking-widest font-poppins"
            onClick={addInputSet}
          >
            <span>Add Input</span>
          </button>
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
