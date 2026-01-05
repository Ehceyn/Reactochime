// Charts.js
import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";

// Custom tick formatter for better readability
const formatTick = (value) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value.toFixed(1);
};

// Custom tooltip formatter factory
const createCustomTooltip = (yAxisLabel, xAxisLabel) => {
  return ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const value = parseFloat(payload[0].value);
      const xValue = parseFloat(label);
      
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold mb-1 text-gray-800">{`${yAxisLabel}: ${value.toFixed(3)}`}</p>
          <p className="text-sm text-gray-600">{`${xAxisLabel}: ${xValue.toFixed(2)}`}</p>
        </div>
      );
    }
    return null;
  };
};

const Charts = ({ result }) => {
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

  const rateOfReactionVolumeChartData = transformRateOfReactionVolumeData();
  const exitConcentrationVolumeChartData =
    transformExitConcentrationVolumeData();
  const spaceTimeVolumeChartData = transformSpaceTimeVolumeData();
  const spaceVelocityVolumeChartData = transformSpaceVelocityVolumeData();

  const rateOfReactionHeightChartData = transformRateOfReactionHeightData();
  const exitConcentrationHeightChartData =
    transformExitConcentrationHeightData();
  const spaceTimeHeightChartData = transformSpaceTimeHeightData();
  const spaceVelocityHeightChartData = transformSpaceVelocityHeightData();
  // Other chart data

  return (
    <div className="bg-backgroundDark space-y-5 px-5 py-5 border border-backgroundRed rounded-lg">
      <h4 className="font-raleway font-bold sm:text-lg capitalize">Charts</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* Rate of Reaction vs. Reactor Volume */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h5 className="text-sm font-semibold mb-4 text-gray-800 text-center">
            Rate of Reaction vs. Reactor Volume
          </h5>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <AreaChart
                data={rateOfReactionVolumeChartData}
                margin={{ top: 10, right: 15, left: 10, bottom: 50 }}
              >
                <defs>
                  <linearGradient id="colorRateOfReaction" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="reactorVolume"
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  tickFormatter={formatTick}
                  label={{ 
                    value: "Reactor Volume", 
                    position: "bottom",
                    offset: 10,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  label={{
                    value: "Rate of Reaction",
                    angle: -90,
                    position: "insideLeft",
                    offset: -5,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <Tooltip content={createCustomTooltip('Rate of Reaction', 'Reactor Volume')} />
                <Area 
                  type="monotone" 
                  dataKey="rateOfReaction" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorRateOfReaction)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart for Exit Concentration vs. Reactor Volume */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h5 className="text-sm font-semibold mb-4 text-gray-800 text-center">
            Exit Concentration vs. Reactor Volume
          </h5>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <AreaChart
                data={exitConcentrationVolumeChartData}
                margin={{ top: 10, right: 15, left: 10, bottom: 50 }}
              >
                <defs>
                  <linearGradient id="colorExitConcentration" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="reactorVolume"
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  tickFormatter={formatTick}
                  label={{ 
                    value: "Reactor Volume", 
                    position: "bottom",
                    offset: 10,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  label={{
                    value: "Exit Concentration",
                    angle: -90,
                    position: "insideLeft",
                    offset: -5,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <Tooltip content={createCustomTooltip('Exit Concentration', 'Reactor Volume')} />
                <Area
                  type="monotone"
                  dataKey="exitConcentration"
                  stroke="#10B981"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorExitConcentration)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart for Space Time vs. Reactor Volume */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h5 className="text-sm font-semibold mb-4 text-gray-800 text-center">
            Space Time vs. Reactor Volume
          </h5>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <AreaChart
                data={spaceTimeVolumeChartData}
                margin={{ top: 10, right: 15, left: 10, bottom: 50 }}
              >
                <defs>
                  <linearGradient id="colorSpaceTime" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="reactorVolume"
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  tickFormatter={formatTick}
                  label={{ 
                    value: "Reactor Volume", 
                    position: "bottom",
                    offset: 10,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  label={{
                    value: "Space Time",
                    angle: -90,
                    position: "insideLeft",
                    offset: -5,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <Tooltip content={createCustomTooltip('Space Time', 'Reactor Volume')} />
                <Area 
                  type="monotone" 
                  dataKey="spaceTime" 
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSpaceTime)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart for Space Velocity vs. Reactor Volume */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h5 className="text-sm font-semibold mb-4 text-gray-800 text-center">
            Space Velocity vs. Reactor Volume
          </h5>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <AreaChart
                data={spaceVelocityVolumeChartData}
                margin={{ top: 10, right: 15, left: 10, bottom: 50 }}
              >
                <defs>
                  <linearGradient id="colorSpaceVelocity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="reactorVolume"
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  tickFormatter={formatTick}
                  label={{ 
                    value: "Reactor Volume", 
                    position: "bottom",
                    offset: 10,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  label={{
                    value: "Space Velocity",
                    angle: -90,
                    position: "insideLeft",
                    offset: -5,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <Tooltip content={createCustomTooltip('Space Velocity', 'Reactor Volume')} />
                <Area 
                  type="monotone" 
                  dataKey="spaceVelocity" 
                  stroke="#F59E0B"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSpaceVelocity)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Rate of Reaction vs. Reactor Height */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h5 className="text-sm font-semibold mb-4 text-gray-800 text-center">
            Rate of Reaction vs. Reactor Height
          </h5>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <AreaChart
                data={rateOfReactionHeightChartData}
                margin={{ top: 10, right: 15, left: 10, bottom: 50 }}
              >
                <defs>
                  <linearGradient id="colorRateOfReactionHeight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="reactorHeight"
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  tickFormatter={formatTick}
                  label={{ 
                    value: "Reactor Height", 
                    position: "bottom",
                    offset: 10,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  label={{
                    value: "Rate of Reaction",
                    angle: -90,
                    position: "insideLeft",
                    offset: -5,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <Tooltip content={createCustomTooltip('Rate of Reaction', 'Reactor Height')} />
                <Area 
                  type="monotone" 
                  dataKey="rateOfReaction" 
                  stroke="#3B82F6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorRateOfReactionHeight)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart for Exit Concentration vs. Reactor Height */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h5 className="text-sm font-semibold mb-4 text-gray-800 text-center">
            Exit Concentration vs. Reactor Height
          </h5>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <AreaChart
                data={exitConcentrationHeightChartData}
                margin={{ top: 10, right: 15, left: 10, bottom: 50 }}
              >
                <defs>
                  <linearGradient id="colorExitConcentrationHeight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="reactorHeight"
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  tickFormatter={formatTick}
                  label={{ 
                    value: "Reactor Height", 
                    position: "bottom",
                    offset: 10,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  label={{
                    value: "Exit Concentration",
                    angle: -90,
                    position: "insideLeft",
                    offset: -5,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <Tooltip content={createCustomTooltip('Exit Concentration', 'Reactor Height')} />
                <Area
                  type="monotone"
                  dataKey="exitConcentration"
                  stroke="#10B981"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorExitConcentrationHeight)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart for Space Time vs. Reactor Height */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h5 className="text-sm font-semibold mb-4 text-gray-800 text-center">
            Space Time vs. Reactor Height
          </h5>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <AreaChart
                data={spaceTimeHeightChartData}
                margin={{ top: 10, right: 15, left: 10, bottom: 50 }}
              >
                <defs>
                  <linearGradient id="colorSpaceTimeHeight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="reactorHeight"
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  tickFormatter={formatTick}
                  label={{ 
                    value: "Reactor Height", 
                    position: "bottom",
                    offset: 10,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  label={{
                    value: "Space Time",
                    angle: -90,
                    position: "insideLeft",
                    offset: -5,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <Tooltip content={createCustomTooltip('Space Time', 'Reactor Height')} />
                <Area 
                  type="monotone" 
                  dataKey="spaceTime" 
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSpaceTimeHeight)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart for Space Velocity vs. Reactor Height */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h5 className="text-sm font-semibold mb-4 text-gray-800 text-center">
            Space Velocity vs. Reactor Height
          </h5>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <AreaChart
                data={spaceVelocityHeightChartData}
                margin={{ top: 10, right: 15, left: 10, bottom: 50 }}
              >
                <defs>
                  <linearGradient id="colorSpaceVelocityHeight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="reactorHeight"
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  tickFormatter={formatTick}
                  label={{ 
                    value: "Reactor Height", 
                    position: "bottom",
                    offset: 10,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  label={{
                    value: "Space Velocity",
                    angle: -90,
                    position: "insideLeft",
                    offset: -5,
                    style: { textAnchor: "middle", fontSize: 12, fill: "#374151", fontWeight: 500 }
                  }}
                />
                <Tooltip content={createCustomTooltip('Space Velocity', 'Reactor Height')} />
                <Area 
                  type="monotone" 
                  dataKey="spaceVelocity" 
                  stroke="#F59E0B"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSpaceVelocityHeight)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
