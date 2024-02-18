import React, { useEffect } from 'react';
import { Chart } from '@antv/g2';

const data = [
  { year: '1951 年', sales: 38 },
  { year: '1952 年', sales: 52 },
  { year: '1956 年', sales: 61 },
  { year: '1957 年', sales: 145 },
  { year: '1958 年', sales: 48 },
  { year: '1959 年', sales: 38 },
  { year: '1960 年', sales: 38 },
  { year: '1962 年', sales: 38 },
];

const MyChart = () => {
  useEffect(() => {
    const chart = new Chart({
      container: 'chart-container',
      autoFit: true,
    });

    chart.interval().data(data).position('year*sales');
    chart.render();

    return () => {
      chart.destroy(); // 在组件卸载时销毁图表
    };
  }, []); // 传递空数组作为第二个参数，表示仅在组件挂载时执行一次

  return <div id="chart-container"></div>;
};

export default MyChart;

