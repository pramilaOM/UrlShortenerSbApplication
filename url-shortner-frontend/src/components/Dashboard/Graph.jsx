import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Legend,
  Filler
);

const Graph = ({ graphData = [] }) => {
  const labels = graphData.length > 0
    ? graphData.map((item) => item.clickDate)
    : Array(14).fill("");

  const userPerDay = graphData.length > 0
    ? graphData.map((item) => item.count)
    : [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1];

  const data = {
    labels,
    datasets: [
      {
        label: "Total Clicks",
        data: userPerDay,
        backgroundColor: graphData.length > 0 ? "#3b82f6" : "rgba(54, 162, 235, 0.1)",
        borderColor: "#1D2327",
        pointBorderColor: "red",
        fill: true,
        tension: 0.4,
        barThickness: 20,
        categoryPercentage: 1.5,
        barPercentage: 1.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return Number.isInteger(value) ? value.toString() : "";
          },
        },
        title: {
          display: true,
          text: "Number Of Click",
          font: {
            family: "Arial",
            size: 16,
            weight: "bold",
          },
        },
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Date",
          font: {
            family: "Arial",
            size: 16,
            weight: "bold",
          },
        },
      },
    },
  };

  return <Bar className="w-full" data={data} options={options} />;
};

export default Graph;
