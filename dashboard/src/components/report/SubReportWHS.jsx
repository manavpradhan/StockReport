import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import React from "react";
import { datasetWHS } from "../../dataset/widelyHeldStocks";

const valueFormatter = (value) => `${value}%`;
// const series = [{ data: [5, 10, 30, 20, -28.3, 121.4] }];
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

const SubReportWHS = () => {
  return (
    <section className="sub-section-1">
      <BarChart
        sx={style}
        height={400}
        dataset={datasetWHS}
        grid={{ horizontal: true }}
        series={[
          {
            dataKey: "growth",
            valueFormatter,
          },
        ]}
        margin={{
          top: 20,
          bottom: 40,
        }}
        yAxis={[
          {
            colorMap: {
              type: "continuous",
              min: -10,
              max: 10,
              color: ["red", "green"],
            },
          },
        ]}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "stock",
            label: "Performance 2024 (%)",
          },
        ]}
      />
    </section>
  );
};

export default SubReportWHS;
