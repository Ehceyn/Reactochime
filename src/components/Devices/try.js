{/* second slide */}
                <SwiperSlide className="hidden sm:grid ">
                  <div className="border-none grid sm:grid-cols-3 grid-cols-2 gap-2 mx-1">
                    
                    {/* PROPANE*/}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0][pollutant.P],
                          800,
                          pollutant.P
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Propane</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0][pollutant.P],
                            800,
                            pollutant.P
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* BENZENE */}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0][pollutant.BE],
                          40,
                          pollutant.P
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Benzene</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0][pollutant.P],
                            40,
                            pollutant.P
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* TOULENE */}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0][pollutant.T],
                          140,
                          pollutant.T
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Toluene</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.T]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0][pollutant.T],
                            140,
                            pollutant.T
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* OZONE */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.OZ], 40, pollutant.OZ)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">OZONE</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.OZ]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0][pollutant.OZ], 40, pollutant.OZ)
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* NH4 */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.NH], 40, pollutant.NH)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Nh4</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.NH]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0][pollutant.NH], 40, pollutant.NH)
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* LPG */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.LPG], 8, pollutant.LPG)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">LPG</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.LPG]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0][pollutant.LPG], 8, pollutant.LPG)
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                
                {/* third slide */}
                <SwiperSlide className="hidden sm:grid ">
                  <div className="border-none grid sm:grid-cols-3 grid-cols-2 gap-2 mx-1">
                    

                    {/* NOX */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.NO], 40, pollutant.NO)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">NOX</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.NO]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0][pollutant.NO], 40, pollutant.NO)
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* ACETANE*/}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0][pollutant.A],
                          400,
                          pollutant.A
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Acetane</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.A]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0][pollutant.A],
                            400,
                            pollutant.A
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* ALCOHOL */}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0][pollutant.Al],
                          60,
                          pollutant.Al
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Alcohol</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.Al]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0][pollutant.Al],
                            60,
                            pollutant.Al
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* seventeenth pollutant */}
                    {/* <div
                      className={`border ${
                        compare(readings[0] && readings[0]["CH4"], 40, "CH4")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CH4</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["CH4"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0]["CH4"], 40, "CH4")
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div> */}
                  </div>
                </SwiperSlide>


                {/* mobile first pollutants cards */}
                {/* first slide */}
                <SwiperSlide className="sm:hidden grid">
                  <div className="border-none grid grid-cols-2 gap-2 mx-1">
                    {/* CO */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.CO], 10, pollutant.CO)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CO</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.CO]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0][pollutant.CO], 10, pollutant.CO)
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* CO2 */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.CO2], 15, pollutant.CO2)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CO2</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.CO2]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0][pollutant.CO2], 15, pollutant.CO2)
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* third pollutant */}
                    {/* <div
                      className={`border ${
                        compare(readings[0] && readings[0]["H2"], 15, "H2")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">H2</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["H2"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0]["H2"], 15, "H2")
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div> */}


                    {/* PM1 */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.P1], 500, pollutant.P1)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">PM1</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P1]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0][pollutant.P1],
                            500,
                            pollutant.P1
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* PM2.5 */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.P25], 500, pollutant.P25)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">PM2.5</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P25]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0][pollutant.P25],
                            500,
                            pollutant.P25
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    
                  </div>
                </SwiperSlide>
                
                {/* second slide */}
                <SwiperSlide className="sm:hidden grid">
                  <div className="border-none grid grid-cols-2 gap-2 mx-1">
                    {/* PM10 */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.P10], 500, pollutant.P10)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">PM10</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P10]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0][pollutant.P10],
                            500,
                            pollutant.P10
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* CL */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.CL], 40, pollutant.CL)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CL2</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.CL]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0][pollutant.CL], 40, pollutant.CL)
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>


                    {/* PROPANE*/}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0][pollutant.P],
                          800,
                          pollutant.P
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Propane</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0][pollutant.P],
                            800,
                            pollutant.P
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* OZONE */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.OZ], 40, pollutant.OZ)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">OZONE</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.OZ]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0][pollutant.OZ], 40, pollutant.OZ)
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>

                {/* third slide */}
                <SwiperSlide className="sm:hidden grid">
                  <div className="border-none grid grid-cols-2 gap-2 mx-1">
                    {/* BENZENE */}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0][pollutant.BE],
                          40,
                          pollutant.P
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Benzene</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0][pollutant.P],
                            40,
                            pollutant.P
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* TOULENE */}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0][pollutant.T],
                          140,
                          pollutant.T
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Toluene</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.T]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0][pollutant.T],
                            140,
                            pollutant.T
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* NH4 */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.NH], 40, pollutant.NH)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Nh4</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.NH]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0][pollutant.NH], 40, pollutant.NH)
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* LPG */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.LPG], 8, pollutant.LPG)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">LPG</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.LPG]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0][pollutant.LPG], 8, pollutant.LPG)
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* fourth slide */}
                <SwiperSlide className="sm:hidden grid">
                  <div className="border-none grid grid-cols-2 gap-2 mx-1">
                    
                    {/* NOX */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0][pollutant.NO], 40, pollutant.NO)
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">NOX</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.NO]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0][pollutant.NO], 40, pollutant.NO)
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* ACETANE*/}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0][pollutant.A],
                          400,
                          pollutant.A
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Acetane</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.A]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0][pollutant.A],
                            400,
                            pollutant.A
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* ALCOHOL */}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0][pollutant.Al],
                          60,
                          pollutant.Al
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Alcohol</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.Al]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0][pollutant.Al],
                            60,
                            pollutant.Al
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>