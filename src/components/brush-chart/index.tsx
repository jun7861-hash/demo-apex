import React from "react";
import ReactApexChart from "react-apexcharts";

const BrushChart = ({
  options,
  optionsLine,
  state,
}: {
  options: any;
  optionsLine: any;
  state: any;
}) => {
  return (
    <div>
      {typeof window !== "undefined" && options && optionsLine && state && (
        <div id="wrapper" style={{ padding: "20px" }}>
          <div id="chart-line2">
            <ReactApexChart
              options={options}
              // series
              series={state?.series}
              type="line"
              height={400}
            />
          </div>
          <div id="chart-line">
            <ReactApexChart
              options={optionsLine}
              series={state?.seriesLine}
              type="area"
              height={200}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BrushChart;
