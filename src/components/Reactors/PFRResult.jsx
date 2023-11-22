import React, { useState, useEffect } from "react";

const PFRResult = ({ result }) => {
  const [reactionRate, setReactionRate] = useState("");
  const [residenceTime, setResidenceTime] = useState("");
  const [distanceAtConversion, setDistanceAtConversion] = useState("");

  useEffect(() => {
    console.log(result);
    // Update state when result prop changes
    setReactionRate(result?.reaction_rate || "");
    // setResidenceTime(result?.residence_time || "");
    setDistanceAtConversion(result?.distance_at_conversion || "");
  }, [result]);

  return (
    <div className="bg-backgroundDark space-y-5 px-5 py-5 border border-borderColor rounded-lg">
      <h4 className="font-raleway font-bold sm:text-lg capitalize">Result</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* reaction rate */}
        <div className="space-y-2 w-full">
          <p className="font-semibold text-sm capitalize">Reaction Rate</p>
          <div className="min-w-[256px] flex items-center bg-backgroundGrey min-h-[56px] border py-2 border-borderColor rounded-md px-3">
            {reactionRate}
          </div>
          <p className="font-semibold text-xs capitalize">*Unit: mol/(m³s)</p>
        </div>
        {/* residence time
        <div className="space-y-2 w-full">
          <p className="font-semibold text-sm capitalize">Residence Time</p>
          <div className="min-w-[256px] flex items-center bg-backgroundGrey min-h-[500px] border py-2 border-borderColor rounded-md px-3">
            {residenceTime}
          </div>
          <p className="font-semibold text-xs capitalize">*Unit: seconds</p>
        </div> */}
        {/* exit concentration */}
        <div className="space-y-2 w-full">
          <p className="font-semibold text-sm capitalize">
            Distance at Conversion
          </p>
          <div className="min-w-[256px] flex items-center bg-backgroundGrey min-h-[56px] border py-2 border-borderColor rounded-md px-3">
            {distanceAtConversion}
          </div>
          <p className="font-semibold text-xs capitalize">*Unit: m</p>
        </div>
      </div>
    </div>
  );
};

export default PFRResult;
