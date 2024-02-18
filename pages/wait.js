import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const ROOT_PATH = 'https://echarts.apache.org/examples';

const MyChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);

    myChart.showLoading();
    fetch(ROOT_PATH + '/data/asset/data/confidence-band.json')
      .then((response) => response.json())
      .then((data) => {
        myChart.hideLoading();
        const base = -data.reduce((min, val) => Math.floor(Math.min(min, val.l)), Infinity);

        const option = {
          title: {
            text: 'Confidence Band',
            subtext: 'Example in MetricsGraphics.js',
            left: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              animation: false,
              label: {
                backgroundColor: '#ccc',
                borderColor: '#aaa',
                borderWidth: 1,
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                color: '#222'
              },
            },
            formatter: (params) => {
              return (
                params[2].name +
                '<br />' +
                ((params[2].value - base) * 100).toFixed(1) +
                '%'
              );
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            data: data.map((item) => item.date),
            axisLabel: {
              formatter: (value, idx) => {
                const date = new Date(value);
                return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
              },
            },
            boundaryGap: false,
          },
          yAxis: {
            axisLabel: {
              formatter: (val) => (val - base) * 100 + '%',
            },
            axisPointer: {
              label: {
                formatter: (params) => ((params.value - base) * 100).toFixed(1) + '%',
              },
            },
            splitNumber: 3,
          },
          series: [
            {
              name: 'L',
              type: 'line',
              data: data.map((item) => item.l + base),
              lineStyle: {
                opacity: 0,
              },
              stack: 'confidence-band',
              symbol: 'none',
            },
            {
              name: 'U',
              type: 'line',
              data: data.map((item) => item.u - item.l),
              lineStyle: {
                opacity: 0,
              },
              areaStyle: {
                color: '#ccc',
              },
              stack: 'confidence-band',
              symbol: 'none',
            },
            {
              type: 'line',
              data: data.map((item) => item.value + base),
              itemStyle: {
                color: '#333',
              },
              showSymbol: false,
            },
          ],
        };

        myChart.setOption(option);
      });
  }, []);

  return <div id="main" style={{ width: '100%', height: '400px' }}></div>;
};

export default MyChart;
