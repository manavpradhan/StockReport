import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { datasetARS } from "../../dataset/analystRecomendedScore";

const valueFormatter = (value) => `${value}`;
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
const SubReportARS = () => {
  return (
    <section className="sub-section-1">
      <BarChart
        colors={["#7BC9FF"]}
        dataset={datasetARS}
        margin={{ bottom: 40 }}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "stock",
            label: "Analyst Recommended Score (%)",
          },
        ]}
        series={[{ dataKey: "score", valueFormatter, label: "Score" }]}
        {...chartSetting}
      />
    </section>
  );
};

export default SubReportARS;
