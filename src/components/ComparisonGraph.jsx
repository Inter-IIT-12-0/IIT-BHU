"use client"
import React, { useRef, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const colors = [
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'teal',
  'blue',
  'purple',
];

function createGradient(ctx, area) {
  const colorStart = getRandomElement(colors);
  const colorMid = getRandomElement(colors.filter(color => color !== colorStart));
  const colorEnd = getRandomElement(
    colors.filter(color => color !== colorStart && color !== colorMid)
  );

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const ComparisonGraph= () =>  {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      labels,
      datasets: labels.map(label => ({
        label: `Dataset ${label}`,
        data: Array.from({ length: labels.length }, () =>
          getRandomNumberInRange(-1000, 1000)
        ),
        borderColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);

  function getRandomNumberInRange(min, max )  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (<Chart ref={chartRef} type='line' data={chartData} />);
}
export default ComparisonGraph;