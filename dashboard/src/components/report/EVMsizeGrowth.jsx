import React from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

const EVMsizeGrowth = () => {
  const data = {
    labels: ["Passenger Vehicles", "Commercial Vehicles", "Two-Wheelers"],
    datasets: [
      {
        label: "Current Market Size (Crores)",
        data: [1500, 800, 5000],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
      {
        label: "CAGR",
        data: [1800, 1200, 6500],
        percent: [20, 15, 30],
        backgroundColor: ["rgba(75, 192, 81, 0.2)"],
        borderColor: ["#5fc04b"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
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
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label = tooltipItem.dataset.label;
            let percentage = 0;
            if (label === "CAGR") {
              percentage = tooltipItem.dataset.percent[tooltipItem.dataIndex];
            }
            let value = tooltipItem.dataset.data[tooltipItem.dataIndex]; // Sales value

            const newLbel =
              percentage === 0
                ? `${label}: ${value + " (approx)"}`
                : `${label}: ${value + " (approx)"} (${percentage}%)`;

            return newLbel;
          },
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
      <Bar data={data} options={options} />
    </section>
  );
};

export default EVMsizeGrowth;
