import React from "react";
import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(...registerables);

const EVMshare = () => {
  const data = {
    labels: ["Passenger Vehicles", "Commercial Vehicles", "Two-Wheelers"],
    datasets: [
      {
        label: "Market Share",
        axis: "y",
        data: [0.35, 1.14, 5.17],
        backgroundColor: [
          "rgba(75, 192, 81, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: ["#5fc04b", "#f0691b", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    aspectRatio: 2,
    responsive: true,
    plugins: {
      legend: {
        position: "right",
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
            let value = tooltipItem.dataset.data[tooltipItem.dataIndex];

            const newLbel = `${label}: ${value}%`;
            return newLbel;
          },
        },
      },
    },
  };
  return (
    <section className="sub-section-1">
      <Doughnut data={data} options={options} />
    </section>
  );
};

export default EVMshare;
