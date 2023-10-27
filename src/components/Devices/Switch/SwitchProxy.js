import React from "react";
import '../../../App.css'

const SwitchProxy = ({toggleSwitch, deviceId, userId, deviceState}) => {
  console.log(deviceState, 'this is the device stat')

  return (
    <div className="flex items-center justify-center">
      {/* Start of Switch Card */}
      <div className="border border-backgroundDark bg-backgroundDark font-poppins w-full sm:w-[60%] h-[285px] rounded-lg p-6 mt-4 px-6 sm:px-16">
        {/* Start of Switch header */}
        <div className="border border-[#686868] w-full flex font-poppins justify-between mt-1 p-3 rounded-lg">
          <p className="text-white font-semibold font-poppins">Power</p>
          <div className="flex items-center justify-center gap-2">
            <div className={`w-2 h-2 border border-solid ${deviceState === 'off' ? 'bg-green-700 border-green-700' :  'bg-[#555756] border-[#555756]'}  rounded-full`}></div>
            <p className="text-white font-semibold">{deviceState === 'off' ? 'ON' : 'OFF'}</p>
          </div>
        </div>
        {/* End of Switch header */}

        {/* Start of Switch Button */}
        <div 
        className="border border-[#212121] bg-[#212121] w-[40%] sm:w-[20%] h-[100px] m-auto mt-11 flex items-center justify-center rounded-lg cursor-pointer" 
        onClick={() => toggleSwitch(userId, deviceId, deviceState)}>
          <svg className={`${ deviceState === 'off' ? 'svg-icon-on' : 'svg-icon-off' }`} viewBox="0 0 20 20">
            <path fill="none" d="M13.53,2.238c-0.389-0.164-0.844,0.017-1.01,0.41c-0.166,0.391,0.018,0.845,0.411,1.01c2.792,1.181,4.598,3.904,4.6,6.937c0,4.152-3.378,7.529-7.53,7.529c-4.151,0-7.529-3.377-7.529-7.529C2.469,7.591,4.251,4.878,7.01,3.683C7.401,3.515,7.58,3.06,7.412,2.67c-0.17-0.392-0.624-0.571-1.014-0.402c-3.325,1.44-5.472,4.708-5.47,8.327c0,5.002,4.069,9.071,9.071,9.071c5.003,0,9.073-4.07,9.073-9.071C19.07,6.939,16.895,3.659,13.53,2.238z"></path>
            <path fill="none" d="M9.999,7.616c0.426,0,0.771-0.345,0.771-0.771v-5.74c0-0.426-0.345-0.771-0.771-0.771c-0.427,0-0.771,0.345-0.771,0.771v5.74C9.228,7.271,9.573,7.616,9.999,7.616z"></path>
        </svg>
        </div>
      </div>
    </div>
  );
};

export default SwitchProxy;
