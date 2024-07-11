import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import React from "react";
import { datasetWHS } from "../../dataset/widelyHeldStocks";
import { datasetTRS } from "../../dataset/topRankedStocks";

const valueFormatter = (value) => `${value}%`;

const style = {
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
};

const SubReportTRS = () => {
  return (
    <section className="sub-section-1">
      <BarChart
        sx={style}
        className="barChart"
        dataset={datasetTRS}
        xAxis={[{ scaleType: "band", dataKey: "stock" }]}
        series={[
          { dataKey: "FPE", label: "Forward P/E" },
          { dataKey: "PEG", label: "PEG Ratio" },
          { dataKey: "DY", label: "Yeild (%)" },
        ]}
        height={400}
      />
    </section>
  );
};

export default SubReportTRS;
