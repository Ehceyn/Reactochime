import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import "../../App.css";
import { AuthContext } from "../../state/contexts/AuthContext";
import { Howl } from "howler";
import ConfirmationModal from "../Modals/ConfirmationModal";

const AirQualityCard = (props) => {
  const [onDisplay, setOnDisplay] = useState(false);
  const [alertDisplay, setAlertDisplay] = useState(false);
  const [unsafes, setUnSafes] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);
  const [overallStatus, setOverallStatus] = useState();
  const { userProfile } = useContext(AuthContext);

  //Onhover of pollutants, Set the cursor to 'grab' on mouseup and 'grabbing' on mousedown
  // listen for mouse down and mouse up events
  useEffect(() => {
    const handleMouseDown = () => {
      setMouseDown(true);
      console.log("mouse down");
    };
    const handleMouseUp = () => {
      setMouseDown(false);
      console.log("mouse up");
    };
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // pollutants state
  const [co, setCo] = useState(true);
  const [co2, setCo2] = useState(true);
  const [p1, setP1] = useState(true);
  const [p10, setP10] = useState(true);
  const [cl2, setCl2] = useState(true);
  const [p25, setP25] = useState(true);
  const [p, setP] = useState(true);
  const [be, setBE] = useState(true);
  const [oz, setOz] = useState(true);
  const [t, setT] = useState(true);
  const [nh, setNh] = useState(true);
  const [lpg, setLpg] = useState(true);
  const [no, setNo] = useState(true);
  const [a, setA] = useState(true);
  const [al, setAl] = useState(true);

  const pollutant = {
    CO: "CO",
    CO2: "CO2",
    P1: "P1",
    P25: "P25",
    P10: "P10",
    CL: "CL",
    P: "P",
    BE: "BE",
    T: "T",
    NH: "NH",
    LPG: "LPG",
    NO: "NO",
    A: "A",
    Al: "Al",
    OZ: "OZ",
  };

  // pollutant unsafe and safe theme
  const safeUnsafeTheme = {
    safe: "bg-[#059D1D] border-[#059D1D]",
    unsafe: "bg-backgroundRed border-backgroundRed pollutant_glow",
    safeText: "text-[#059D1D]",
    unsafeText: "text-backgroundRed",
  };

  //
  const play = () => {
    const sound = new Howl({
      src: ["/speech.mp3"],
      html5: true,
    });

    sound.once("end", () => {
      sound.play();
    });

    sound.play();
  };

  // getting the polluntants reading for airsyn
  const pollutantsReadings =
    userProfile?.device?.airsyn[`${props.deviceName}`].deviceReadings || {};

  // getting the last pollutants reading for airsyn
  const lastPollutantReadings =
    pollutantsReadings[
      Object.keys(pollutantsReadings)[
        Object.keys(pollutantsReadings).length - 1
      ]
    ] || {};

  console.log("pollutantsReadings ===>>>>>>> na me", pollutantsReadings);
  console.log("lastPollutantReadings ===>>>>>>> na me", lastPollutantReadings);

  useEffect(() => {
    console.log(userProfile, "the airsyn has changes");

    // CO
    if (lastPollutantReadings.CO > 10) setCo(false);
    else setCo(true);

    // CO2
    if (lastPollutantReadings.CO2 > 20) setCo2(false);
    else setCo2(true);

    // P10
    if (lastPollutantReadings.P10 > 500) setP10(false);
    else setP10(true);

    // P10
    if (lastPollutantReadings.P1 > 500) setP1(false);
    else setP1(true);

    // P25
    if (lastPollutantReadings.P25 > 500) setP25(false);
    else setP25(true);

    // CL
    if (lastPollutantReadings.CL > 35) setCl2(false);
    else setCl2(true);

    // P
    if (lastPollutantReadings.P > 800) setP(false);
    else setP(true);

    //BE
    if (lastPollutantReadings.BE > 40) setBE(false);
    else setBE(true);

    //BE
    if (lastPollutantReadings.OZ > 40) setOz(false);
    else setOz(true);

    //Toulene
    if (lastPollutantReadings.T > 140) setT(false);
    else setT(true);

    //NH4
    if (lastPollutantReadings.NH > 40) setNh(false);
    else setNh(true);

    // LPG
    if (lastPollutantReadings.LPG > 8) setLpg(false);
    else setLpg(true);

    // NOX
    if (lastPollutantReadings.NO > 40) setNo(false);
    else setNo(true);

    // ACETONE
    if (lastPollutantReadings.A > 400) setA(false);
    else setA(true);

    // ALCOHOL
    if (lastPollutantReadings.Al > 60) setAl(false);
    else setAl(true);
  }, [userProfile]);

  // Delete notification
  const deleteNotification = () => {};

  return (
    <>
      {onDisplay && (
        <ConfirmationModal
          display={onDisplay}
          onCallConfirmationModal={() => setOnDisplay(false)}
          heading="Notification Details"
          message="A new device Razor drill was added by James Charles 20 minutes ago."
          leftButtonText="cancel"
          rightButtonText="delete"
          onClickLeftButton={() => setOnDisplay(false)}
          onClickRightButton={() => setAlertDisplay(deleteNotification)}
        />
      )}
      {/* Start of Air Quality Card */}
      <div className="w-full flex gap-8 ">
        <div className="w-full">
          {/* Start of Pollutant Section */}

          {/* start play unsafe audio */}
          {co &&
          co2 &&
          p1 &&
          p10 &&
          p25 &&
          cl2 &&
          p &&
          be &&
          oz &&
          t &&
          nh &&
          lpg &&
          no &&
          a &&
          al
            ? null
            : play()}
          {/* end play unsafe audio */}

          <div className="bg-backgroundDark w-full p-4 sm:h-[350px] rounded-lg border border-borderColor">
            {/* start unsafe text alert */}
            <div className="flex justify-between mb-3 px-3">
              <p className="font-semibold text-lg text-textGrey">Pollutants</p>
              <p
                className={`
                text-lg font-semibold 
                ${
                  co &&
                  co2 &&
                  p1 &&
                  p10 &&
                  p25 &&
                  cl2 &&
                  p &&
                  be &&
                  oz &&
                  t &&
                  nh &&
                  lpg &&
                  no &&
                  a &&
                  al
                    ? safeUnsafeTheme.safeText
                    : safeUnsafeTheme.unsafeText
                } 
                capitalize`}
              >
                {co &&
                co2 &&
                p1 &&
                p10 &&
                p25 &&
                cl2 &&
                p &&
                be &&
                oz &&
                t &&
                nh &&
                lpg &&
                no &&
                a &&
                al
                  ? "Safe"
                  : "Unsafe"}
              </p>
            </div>
            {/* end unsafe text alert */}

            <hr className="border border-borderColor" />

            {/* start pollutants */}
            <div
              className="h-[250px] w-full mt-4 p-2 flex gap-2"
              style={{ zIndex: "1000" }}
            >
              {/* overall status */}
              <div
                className={`border-none  ${
                  co &&
                  co2 &&
                  p1 &&
                  p10 &&
                  p25 &&
                  cl2 &&
                  p &&
                  be &&
                  oz &&
                  t &&
                  nh &&
                  lpg &&
                  no &&
                  a &&
                  al
                    ? "bg-[#059D1D]"
                    : "bg-backgroundRed"
                }  sm:w-[30%] w-full rounded-lg flex items-center justify-center`}
              >
                <div className="text-center text-textGreyLight space-y-2 ">
                  <p className="text-xl font-semibold capitalize">
                    overall status
                  </p>
                  <p className="font-thin text-sm">
                    {co &&
                    co2 &&
                    p1 &&
                    p10 &&
                    p25 &&
                    cl2 &&
                    p &&
                    be &&
                    oz &&
                    t &&
                    nh &&
                    lpg &&
                    no &&
                    a &&
                    al
                      ? "Safe"
                      : "Unsafe"}
                  </p>
                </div>
              </div>

              {/* Pollutants */}
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className={`w-[34.38rem] overflow-hidden ${
                  mouseDown ? "cursor-grabbing" : "cursor-grab"
                }`}
              >
                {/* start desktop pollutants cards */}

                {/* first slide includes co, co2, pm1, pm2.5, pm10, cl */}
                <SwiperSlide className="hidden sm:grid ">
                  <div className="border-none grid grid-cols-3 gap-2 mx-1">
                    {/* CO */}
                    <div
                      className={`border ${
                        co ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">CO</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.CO}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {co ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* CO2 */}
                    <div
                      className={`border ${
                        co2 ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">CO2</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.CO2}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {co2 ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* PM1 */}
                    <div
                      className={`border ${
                        p1 ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">PM1</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.P1}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p1 ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* PM2.5 */}
                    <div
                      className={`border ${
                        p25 ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">PM2.5</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.P25}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p25 ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* PM10 */}
                    <div
                      className={`border ${
                        p10 ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">PM10</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.P10}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p10 ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* CL */}
                    <div
                      className={`border ${
                        cl2 ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">CL2</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.CL}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {cl2 ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* second slide includes => propane, benzene, toulene, oz, nh4, lpg */}
                <SwiperSlide className="hidden sm:grid ">
                  <div className="border-none grid sm:grid-cols-3 grid-cols-2 gap-2 mx-1">
                    {/* PROPANE*/}
                    <div
                      className={`border ${
                        p ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">Propane</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.P}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* BENZENE */}
                    <div
                      className={`border ${
                        be ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">Benzene</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.BE}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {be ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* TOULENE */}
                    <div
                      className={`border ${
                        t ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">Toluene</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.T}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {t ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* OZONE */}
                    <div
                      className={`border ${
                        oz ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">OZONE</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.OZ}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {oz ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* NH4 */}
                    <div
                      className={`border ${
                        nh ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">Nh4</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.NH}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {nh ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* LPG */}
                    <div
                      className={`border ${
                        lpg ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">LPG</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.LPG}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {lpg ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* third slide inlcudes => nox, acetane, alchohol */}
                <SwiperSlide className="hidden sm:grid ">
                  <div className="border-none grid sm:grid-cols-3 grid-cols-2 gap-2 mx-1">
                    {/* NOX */}
                    <div
                      className={`border ${
                        no ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">NOX</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.NO}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {no ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* ACETANE*/}
                    <div
                      className={`border ${
                        a ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">Acetane</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.A}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {a ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* ALCOHOL */}
                    <div
                      className={`border ${
                        al ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">Alcohol</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.Al}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {al ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* end desktop pollutants cards */}

                {/* start mobile pollutants cards */}

                {/* first slide includes => co, co2, pm1, pm2.5*/}
                <SwiperSlide className="sm:hidden grid">
                  <div className="border-none grid grid-cols-2 gap-2 mx-1">
                    {/* CO */}
                    <div
                      className={`border ${
                        co ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">CO</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.CO}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {co ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* CO2 */}
                    <div
                      className={`border ${
                        co2 ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">CO2</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.CO2}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {co2 ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* PM1 */}
                    <div
                      className={`border ${
                        p1 ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">PM1</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.P1}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p1 ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* PM2.5 */}
                    <div
                      className={`border ${
                        p25 ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">PM2.5</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.P25}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p25 ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* second slide includes => pm10, cl, propane, ozone */}
                <SwiperSlide className="sm:hidden grid">
                  <div className="border-none grid grid-cols-2 gap-2 mx-1">
                    {/* PM10 */}
                    <div
                      className={`border ${
                        p10 ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">PM10</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.P10}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p10 ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* CL */}
                    <div
                      className={`border ${
                        cl2 ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">CL2</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.CL}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {cl2 ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* PROPANE*/}
                    <div
                      className={`border ${
                        p ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">Propane</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.P}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* OZONE */}
                    <div
                      className={`border ${
                        oz ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">OZONE</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.OZ}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {oz ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* third slide includes => benzene, toulene, nh4, lpg */}
                <SwiperSlide className="sm:hidden grid">
                  <div className="border-none grid grid-cols-2 gap-2 mx-1">
                    {/* BENZENE */}
                    <div
                      className={`border ${
                        be ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">Benzene</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.P}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {be ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* TOULENE */}
                    <div
                      className={`border ${
                        t ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">Toluene</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.T}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {t ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* NH4 */}
                    <div
                      className={`border ${
                        nh ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">Nh4</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.NH}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {nh ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* LPG */}
                    <div
                      className={`border ${
                        lpg ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">LPG</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.LPG}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {lpg ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* fourth slide includes =>  nox, acetane, alcohol*/}
                <SwiperSlide className="sm:hidden grid">
                  <div className="border-none grid grid-cols-2 gap-2 mx-1">
                    {/* NOX */}
                    <div
                      className={`border ${
                        no ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">NOX</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.NO}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {no ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* ACETANE*/}
                    <div
                      className={`border ${
                        a ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">Acetane</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.A}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {a ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* ALCOHOL */}
                    <div
                      className={`border ${
                        al ? safeUnsafeTheme.safe : safeUnsafeTheme.unsafe
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-textGreyLight space-y-2">
                        <p className="text-sm font-thin uppercase">Alcohol</p>
                        <p className="text-xl font-semibold">
                          {lastPollutantReadings.Al}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {al ? "Safe" : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* end mobile pollutants cards */}
              </Swiper>
            </div>
            {/* end pollutants */}
          </div>
          {/* End of Pollutant Section */}

          {/* Start of Device Details Card */}
          <div className="flex sm:flex-row flex-col sm:h-[10.63rem] mt-5 gap-3">
            <div className="w-full border border-borderColor bg-backgroundDark text-textGrey p-4 rounded-lg">
              <p className="font-semibold text-lg mb-2">Details</p>
              <hr className="mb-2 border border-borderColor" />
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Name of device</p>
                <p className="text-sm font-semibold">Location</p>
              </div>
              <div className="flex justify-between">
                <p className="text-xs text-textGrey capitalize">
                  {
                    userProfile?.device?.airsyn[`${props.deviceName}`]
                      .deviceName
                  }
                </p>
                <p className="text-xs text-textGrey capitalize">
                  {" "}
                  {
                    userProfile?.device?.airsyn[`${props.deviceName}`]
                      .deviceLocation
                  }
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <p className="text-sm font-semibold">ID NUMBER</p>
                <p className="text-sm font-semibold">Group</p>
              </div>
              <div className="flex font-poppins justify-between">
                <p className="text-xs ">123456789</p>
                <p className="text-xs ">Air Quality</p>
              </div>
            </div>
            <div className="sm:w-[60%] w-full  border border-borderColor bg-backgroundDark text-textGreyLight p-2 pb-24 space-y-3 rounded-lg px-4">
              <div className="flex items-center justify-center">
                <img src="/images/cloud.png" width={70} alt="" />
              </div>
              <div className="flex justify-between">
                <p className="font-extrabold text-2xl">32&#176;C</p>
                <p className="font-bold text-[#C0B6FA]">Cloudy</p>
              </div>
              <p className="text-center uppercase text-sm font-semibold">
                Lagos
              </p>
            </div>
          </div>
        </div>
        {/* End of Details Service Card */}

        {/* Start of Notification Tab */}
        <div className="bg-backgroundDark h-[33.5rem] overflow-auto scroll w-[40%] sm:p-[1rem] sm:pt-0 pt-0 hidden sm:block border border-borderColor rounded-lg">
          <div className=" bg-backgroundDark text-textGreyLighter p-2 pt-0 rounded-lg">
            <div className="flex items-center justify-between px-3">
              {/* <p
                className={`text-3xl font-semibold ${
                  co &&
                  co2 &&
                  p1 &&
                  p10 &&
                  p25 &&
                  cl2 &&
                  p &&
                  be &&
                  oz &&
                  t &&
                  nh &&
                  lpg &&
                  no &&
                  a &&
                  al
                    ? "text-[#059D1D]"
                    : "text-backgroundRed"
                } capitalize`}
              >
                {co &&
                co2 &&
                p1 &&
                p10 &&
                p25 &&
                cl2 &&
                p &&
                be &&
                oz &&
                t &&
                nh &&
                lpg &&
                no &&
                a &&
                al
                  ? "Safe"
                  : "Unsafe"}
              </p> */}
              {/* <p className="w-[30px] h-[30px] border border-solid border-red-600 rounded-full bg-backgroundRed"></p> */}
            </div>
            {/* <hr className=" border border-borderColor" /> */}
            <div className="text-2xl border-b-2 border-borderColor font-semibold  bg-backgroundDark  flex items-center px-3 sticky-top w-full inset-x-0 h-16">
              {" "}
              Notifications
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div className="border-b border-borderColor flex items-center justify-between p-[10px] transition ease-in-out duration-300 hover:bg-backgroundDarkRed bg-backgroundDark">
                <div
                  className="cursor-pointer space-y-2"
                  onClick={() => setOnDisplay(true)}
                >
                  <p className="text-xs font-medium">
                    High level of co2 detected
                  </p>
                  <p className=" text-xs text-textGrey">5mins ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of Notification Tab */}
      </div>
    </>
  );
};

export default AirQualityCard;
