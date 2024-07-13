import React from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

const EVProjectedGrowth = () => {
  const data = {
    labels: [2030, 2025, 2022],
    datasets: [
      {
        label: "EV sales (units)",
        axis: "y",
        data: [500000, 150000, 40000],
        backgroundColor: [
          "rgba(207, 115, 53, 0.2)",
          "rgba(75, 192, 81, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: ["#f0691b", "#5fc04b", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    indexAxis: "y",
    resposive: true,
    plugins: {
      legend: {
        labels: {
          color: "whitesmoke",
          font: {
            size: 12,
            family: "Roboto",
          },
          boxWidth: 20,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "whitesmoke",
          font: {
            size: 12,
            family: "Roboto",
          },
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: "whitesmoke",
          font: {
            size: 12,
            family: "Roboto",
          },

          beginAtZero: true,
        },
      },
    },
  };
  return (
    <section className="sub-section-1">
      <Bar data={data} options={options} style={{ height: 400 }} />
    </section>
  );
};

export default EVProjectedGrowth;
