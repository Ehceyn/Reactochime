// Charts.js
import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer,
} from "recharts";

const Charts = ({ result }) => {
  // Transform data for Rate of Reaction vs. Reactor Diameter
  const transformRateOfReactionData = () => {
    return result.map((value, index) => ({
      reactorDiameter: parseFloat(value.reactor_diameter).toPrecision(3),
      rateOfReaction: parseFloat(value.rate_of_reaction).toPrecision(3),
    }));
  };

  // Transform data for Exit Concentration vs. Reactor Diameter
  const transformExitConcentrationData = () => {
    return result.map((value, index) => ({
      reactorDiameter: parseFloat(value.reactor_diameter).toPrecision(3),
      exitConcentration: parseFloat(value.exit_concentration).toPrecision(3),
    }));
  };

  // Transform data for Residence time vs. Reactor Diameter
  const transformResidenceTimeData = () => {
    return result.map((value, index) => ({
      reactorDiameter: parseFloat(value.reactor_diameter).toPrecision(3),
      residenceTime: parseFloat(value.residence_time).toPrecision(3),
    }));
  };

  // Transform data for Space Time vs. Reactor Diameter
  const transformSpaceTimeData = () => {
    return result.map((value, index) => ({
      reactorDiameter: parseFloat(value.reactor_diameter).toPrecision(3),
      spaceTime: parseFloat(value.space_time).toPrecision(3),
    }));
  };

  // Transform data for Space Velocity vs. Reactor Diameter
  const transformSpaceVelocityData = () => {
    return result.map((value, index) => ({
      reactorDiameter: parseFloat(value.reactor_diameter).toPrecision(3),
      spaceVelocity: parseFloat(value.space_velocity).toPrecision(3),
    }));
  };

  // Transform data for Rate of Reaction vs. Reactor Volume
  const transformRateOfReactionVolumeData = () => {
    return result.map((value, index) => ({
      reactorVolume: parseFloat(value.reactor_volume).toPrecision(3),
      rateOfReaction: parseFloat(value.rate_of_reaction).toPrecision(3),
    }));
  };

  // Transform data for Exit Concentration vs. Reactor Volume
  const transformExitConcentrationVolumeData = () => {
    return result.map((value, index) => ({
      reactorVolume: parseFloat(value.reactor_volume).toPrecision(3),
      exitConcentration: parseFloat(value.exit_concentration).toPrecision(3),
    }));
  };

  // Transform data for Residence time vs. Reactor Volume
  const transformResidenceTimeVolumeData = () => {
    return result.map((value, index) => ({
      reactorVolume: parseFloat(value.reactor_volume).toPrecision(3),
      residenceTime: parseFloat(value.residence_time).toPrecision(3),
    }));
  };

  // Transform data for Space Time vs. Reactor Volume
  const transformSpaceTimeVolumeData = () => {
    return result.map((value, index) => ({
      reactorVolume: parseFloat(value.reactor_volume).toPrecision(3),
      spaceTime: parseFloat(value.space_time).toPrecision(3),
    }));
  };

  // Transform data for Space Velocity vs. Reactor Volume
  const transformSpaceVelocityVolumeData = () => {
    return result.map((value, index) => ({
      reactorVolume: parseFloat(value.reactor_volume).toPrecision(3),
      spaceVelocity: parseFloat(value.space_velocity).toPrecision(3),
    }));
  };

  // Transform data for Rate of Reaction vs. Reactor Height
  const transformRateOfReactionHeightData = () => {
    return result.map((value, index) => ({
      reactorHeight: parseFloat(value.reactor_height).toPrecision(3),
      rateOfReaction: parseFloat(value.rate_of_reaction).toPrecision(3),
    }));
  };

  // Transform data for Exit Concentration vs. Reactor Height
  const transformExitConcentrationHeightData = () => {
    return result.map((value, index) => ({
      reactorHeight: parseFloat(value.reactor_height).toPrecision(3),
      exitConcentration: parseFloat(value.exit_concentration).toPrecision(3),
    }));
  };

  // Transform data for Residence time vs. Reactor Height
  const transformResidenceTimeHeightData = () => {
    return result.map((value, index) => ({
      reactorHeight: parseFloat(value.reactor_height).toPrecision(3),
      residenceTime: parseFloat(value.residence_time).toPrecision(3),
    }));
  };

  // Transform data for Space Time vs. Reactor Height
  const transformSpaceTimeHeightData = () => {
    return result.map((value, index) => ({
      reactorHeight: parseFloat(value.reactor_height).toPrecision(3),
      spaceTime: parseFloat(value.space_time).toPrecision(3),
    }));
  };

  // Transform data for Space Velocity vs. Reactor Height
  const transformSpaceVelocityHeightData = () => {
    return result.map((value, index) => ({
      reactorHeight: parseFloat(value.reactor_height).toPrecision(3),
      spaceVelocity: parseFloat(value.space_velocity).toPrecision(3),
    }));
  };

  const rateOfReactionChartData = transformRateOfReactionData();
  const exitConcentrationChartData = transformExitConcentrationData();
  const residenceTimeChartData = transformResidenceTimeData();
  const spaceTimeChartData = transformSpaceTimeData();
  const spaceVelocityChartData = transformSpaceVelocityData();

  const rateOfReactionVolumeChartData = transformRateOfReactionVolumeData();
  const exitConcentrationVolumeChartData =
    transformExitConcentrationVolumeData();
  const residenceTimeVolumeChartData = transformResidenceTimeVolumeData();
  const spaceTimeVolumeChartData = transformSpaceTimeVolumeData();
  const spaceVelocityVolumeChartData = transformSpaceVelocityVolumeData();

  const rateOfReactionHeightChartData = transformRateOfReactionHeightData();
  const exitConcentrationHeightChartData =
    transformExitConcentrationHeightData();
  const residenceTimeHeightChartData = transformResidenceTimeHeightData();
  const spaceTimeHeightChartData = transformSpaceTimeHeightData();
  const spaceVelocityHeightChartData = transformSpaceVelocityHeightData();
  // Other chart data

  return (
    <div className="bg-backgroundDark space-y-5 px-5 py-5 border border-backgroundRed rounded-lg">
      <h4 className="font-raleway font-bold sm:text-lg capitalize">Charts</h4>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-y-5 gap-x-24 w-full">
        {/* Rate of Reaction vs. Reactor Diameter */}
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={rateOfReactionChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorDiameter"
                label={{ value: "Reactor Diameter", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Rate of Reaction",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="rateOfReaction" fill="#D20202" />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Rate of Reaction vs. Reactor Diameter
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* Exit Conc vs. Reactor Diameter */}
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={exitConcentrationChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorDiameter"
                label={{ value: "Reactor Diameter", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Exit Conc.",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="exitConcentration"
                fill="#D20202"
              />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Exit Conc. vs. Reactor Diameter
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* Residence Time vs. Reactor Diameter */}
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={residenceTimeChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorDiameter"
                label={{ value: "Reactor Diameter", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Residence Time.",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="residenceTime" fill="#D20202" />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Residence Time. vs. Reactor Diameter
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Space Time vs. Reactor Diameter */}
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={spaceTimeChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorDiameter"
                label={{ value: "Reactor Diameter", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Space Time",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="spaceTime" fill="#D20202" />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Space Time vs. Reactor Diameter
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Space Velocity vs. Reactor Diameter */}
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={spaceVelocityChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorDiameter"
                label={{ value: "Reactor Diameter", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Space Velocity",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="spaceVelocity" fill="#D20202" />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Space Velocity vs. Reactor Diameter
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={rateOfReactionVolumeChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorVolume"
                label={{ value: "Reactor Volume", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Rate of Reaction",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="rateOfReaction" fill="#D20202" />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Rate of Reaction vs. Reactor Volume
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Chart for Exit Concentration vs. Reactor Volume */}
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={exitConcentrationVolumeChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorVolume"
                label={{ value: "Reactor Volume", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Exit Conc.",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="exitConcentration"
                fill="#D20202"
              />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Exit Conc. vs. Reactor Volume
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Chart for Residence Time vs. Reactor Volume */}
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={residenceTimeVolumeChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorVolume"
                label={{ value: "Reactor Volume", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Residence Time",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="residenceTime" fill="#D20202" />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Residence Time vs. Reactor Volume
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Chart for Space Time vs. Reactor Volume */}
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={spaceTimeVolumeChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorVolume"
                label={{ value: "Reactor Volume", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Space Time",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="spaceTime" fill="#D20202" />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Space Time vs. Reactor Volume
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Chart for Space Velocity vs. Reactor Volume */}
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={spaceVelocityVolumeChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorVolume"
                label={{ value: "Reactor Volume", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Space Velocity",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="spaceVelocity" fill="#D20202" />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Space Velocity vs. Reactor Volume
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={rateOfReactionHeightChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorHeight"
                label={{ value: "Reactor Height", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Rate of Reaction",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="rateOfReaction" fill="#D20202" />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Rate of Reaction vs. Reactor Height
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Chart for Exit Concentration vs. Reactor Height */}
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={exitConcentrationHeightChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorHeight"
                label={{ value: "Reactor Height", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Exit Conc.",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="exitConcentration"
                fill="#D20202"
              />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Exit Conc. vs. Reactor Height
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Chart for Residence Time vs. Reactor Height */}
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={residenceTimeHeightChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorHeight"
                label={{ value: "Reactor Height", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Residence Time",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="residenceTime" fill="#D20202" />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Residence Time vs. Reactor Height
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Chart for Space Time vs. Reactor Height */}
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={spaceTimeHeightChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorHeight"
                label={{ value: "Reactor Height", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Space Time",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="spaceTime" fill="#D20202" />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Space Time vs. Reactor Height
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Chart for Space Velocity vs. Reactor Height */}
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={spaceVelocityHeightChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reactorHeight"
                label={{ value: "Reactor Height", position: "insideBottom" }}
              />
              <YAxis
                label={{
                  value: "Space Velocity",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="spaceVelocity" fill="#D20202" />
              <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
              >
                Space Velocity vs. Reactor Height
              </text>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* Repeat for other charts */}
      </div>
    </div>
  );
};

export default Charts;
