import React, { useEffect, useRef } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";
import './style.css'

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const Home = () => {
  const chartRefs = useRef([]);

  const chartData = [
    {title: 'Total Number of Registered Users', labels: ["January", "February", "March"], data: [10, 20, 15] },
    {title: 'Total Number of Registered Centers', labels: ["April", "May", "June"], data: [8, 12, 18] },
    { title: 'Total Number of Registered Users', labels: ["July", "August", "September"], data: [5, 15, 10] },
  ];

  useEffect(() => {
    const chartInstances = [];

    chartData.forEach((data, index) => {
      const chartCanvas = chartRefs.current[index].getContext('2d');

      if (chartInstances[index]) {
        chartInstances[index].destroy();
      }

      const chartInstance = new Chart(chartCanvas, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Sample Data',
              data: data.data,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      chartInstances[index] = chartInstance;
    });

    return () => {
      chartInstances.forEach((instance) => {
        if (instance) {
          instance.destroy();
        }
      });
    };
  }, [chartData]);

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="dash-container" >
            {chartData.map((item, index) => (
              <div className="dash-graph-item" key={index}>
                <h2 className="mb-4 " >{item.title}</h2>
                <canvas
                
                ref={(ref) => (chartRefs.current[index] = ref)}
              />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
