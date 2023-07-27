import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import fetchData from '../services/dataService';

const ChartComponent = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchData()
      .then(res => {
        // assuming the data is an array of objects with 'label' and 'value' properties
        const labels = res.map(item => item.label);
        const data = res.map(item => item.value);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Your Label',
              data: data,
              backgroundColor: 'rgba(75,192,192,0.6)',
            }
          ]
        });
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Bar
        data={chartData}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default ChartComponent;
