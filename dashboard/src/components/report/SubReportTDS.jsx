import React from "react";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 5, label: "KHC" },
  { id: 1, value: 4.25, label: "WEC" },
  { id: 2, value: 5, label: "USB" },
  { id: 3, value: 6, label: "DOC" },
  { id: 4, value: 6, label: "O" },
];

const SubReportTDS = () => {
  return (
    <section className="sub-section-1">
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            valueFormatter: (item) => `${item.value}%`,
            arcLabel: (item) => `${item.label} (${item.value}%)`,
          },
        ]}
        height={400}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold",
          },
        }}
      />
    </section>
  );
};

export default SubReportTDS;
