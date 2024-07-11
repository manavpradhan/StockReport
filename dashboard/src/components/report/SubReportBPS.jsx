import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { datasetBPS } from "../../dataset/bestPerformingStocks";

const valueFormatter = (value) => `${value}%`;
const chartSetting = {
  height: 400,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
    //change left yAxis label styles
    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
      strokeWidth: "0.4",
      fill: "whitesmoke",
    },
    // change all labels fontFamily shown on both xAxis and yAxis
    "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
      fontFamily: "Roboto",
    },
    // change bottom label styles
    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
      strokeWidth: "0.5",
      fill: "whitesmoke",
    },
    // bottomAxis Line Styles
    "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
      stroke: "whitesmoke",
      strokeWidth: 1,
    },
    // leftAxis Line Styles
    "& .MuiChartsAxis-left .MuiChartsAxis-line": {
      stroke: "whitesmoke",
      strokeWidth: 0.8,
    },
  },
};

const SubReportBPS = () => {
  return (
    <section className="sub-section-1">
      <BarChart
        colors={["green"]}
        className="barChart"
        dataset={datasetBPS}
        margin={{ bottom: 40 }}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "stock",
            label: "Performance 2024 (%)",
          },
        ]}
        series={[{ dataKey: "growth", label: "Growth Factor", valueFormatter }]}
        {...chartSetting}
      />
    </section>
  );
};

export default SubReportBPS;
