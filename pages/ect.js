import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { randomInt } from 'crypto';

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    const data = [
      {
          "value": 1.1618426259,
          "date": "2012-08-28",
          "l": -1.6017329022,
          "u": 0.1618426259
      },
      {
          "value": 0.5828247293,
          "date": "2012-08-29",
          "l": -1.3166963635,
          "u": 0.1324086347
      },
      {
          "value": 0.3790770636,
          "date": "2012-08-30",
          "l": -0.8712221305,
          "u": 0.0956413566
      },
      {
          "value": 0.2792926002,
          "date": "2012-08-31",
          "l": -0.6541832008,
          "u": 0.0717120241
      },
      {
          "value": 0.2461165469,
          "date": "2012-09-01",
          "l": -0.5222677907,
          "u": 0.0594188803
      },
      {
          "value": 0.2017354137,
          "date": "2012-09-02",
          "l": -0.4434280535,
          "u": 0.0419213465
      },
      {
          "value": 0.1457476871,
          "date": "2012-09-03",
          "l": -0.3543957712,
          "u": 0.0623761171
      },
      {
          "value": 0.002610973,
          "date": "2012-09-04",
          "l": -0.3339911495,
          "u": 0.031286929
      },
      {
          "value": 0.0080692734,
          "date": "2012-09-05",
          "l": -0.2951839941,
          "u": 0.0301762553
      },
      {
          "value": 0.0296490933,
          "date": "2012-09-06",
          "l": -0.2964395801,
          "u": -0.0029821004
      },
      {
          "value": 0.001317397,
          "date": "2012-09-07",
          "l": -0.2295443759,
          "u": 0.037903312
      },
      {
          "value": 0.0117649838,
          "date": "2012-09-08",
          "l": -0.2226376418,
          "u": 0.0239720183
      },
      {
          "value": 0.0059394263,
          "date": "2012-09-09",
          "l": -0.2020479849,
          "u": 0.0259489347
      },
      {
          "value": -0.0115565898,
          "date": "2012-09-10",
          "l": -0.2042048037,
          "u": 0.0077863806
      },
      {
          "value": 0.0041183019,
          "date": "2012-09-11",
          "l": -0.1837263172,
          "u": 0.0137898406
      },
      {
          "value": 0.0353559544,
          "date": "2012-09-12",
          "l": -0.136610008,
          "u": 0.051403828
      },
      {
          "value": 0.1070046011,
          "date": "2012-09-13",
          "l": -0.1569988647,
          "u": 0.0202266411
      },
      {
          "value": 0.2004251807,
          "date": "2012-09-14",
          "l": -0.1410340292,
          "u": 0.0273410185
      },
      {
          "value": 0.3035461023,
          "date": "2012-09-15",
          "l": -0.1438653689,
          "u": 0.0165445684
      },
      {
          "value": 0.407797889,
          "date": "2012-09-16",
          "l": -0.1291975355,
          "u": 0.0232461153
      },
      {
          "value": 0.5025402723,
          "date": "2012-09-17",
          "l": -0.133972479,
          "u": 0.0116753921
      },
      {
          "value": 0.405317381,
          "date": "2012-09-18",
          "l": -0.1269266586,
          "u": 0.0129723291
      },
      {
          "value": 0.3075841521,
          "date": "2012-09-19",
          "l": -0.1283478383,
          "u": 0.0056371616
      },
      {
          "value": 0.2391388721,
          "date": "2012-09-20",
          "l": -0.1571172198,
          "u": -0.0311678828
      },
      {
          "value": 0.1075430252,
          "date": "2012-09-21",
          "l": -0.1097354417,
          "u": 0.0141132062
      },
      {
          "value": 0.1850284663,
          "date": "2012-09-22",
          "l": 0.0333682152,
          "u": 0.2140709422
      },
      {
          "value": 0.076629596,
          "date": "2012-09-23",
          "l": -0.0068472967,
          "u": 0.1101280569
      },
      {
          "value": 0.0314292271,
          "date": "2012-09-24",
          "l": -0.1074281762,
          "u": 0.0032669363
      },
      {
          "value": 0.0232608674,
          "date": "2012-09-25",
          "l": -0.0905197842,
          "u": 0.0164250295
      },
      {
          "value": 0.01968615,
          "date": "2012-09-26",
          "l": -0.084319856,
          "u": 0.0193319465
      },
      {
          "value": 0.0310196816,
          "date": "2012-09-27",
          "l": -0.0914356781,
          "u": 0.0094436256
      },
      {
          "value": 0.0758746967,
          "date": "2012-09-28",
          "l": -0.1169814745,
          "u": -0.019659551
      },
      {
          "value": 0.0233974572,
          "date": "2012-09-29",
          "l": -0.0356839258,
          "u": 0.0610712506
      },
      {
          "value": 0.011073579,
          "date": "2012-09-30",
          "l": -0.0558712863,
          "u": 0.0346160081
      },
      {
          "value": 0.002094822,
          "date": "2012-10-01",
          "l": -0.0707143388,
          "u": 0.0152899266
      },
      {
          "value": 0.1083707096,
          "date": "2012-10-02",
          "l": -0.1718101335,
          "u": -0.0886271057
      },
      {
          "value": 0.1098258972,
          "date": "2012-10-03",
          "l": -0.1881274065,
          "u": -0.1072157972
      },
      {
          "value": 0.1872970297,
          "date": "2012-10-04",
          "l": -0.1731903321,
          "u": -0.064381434
      },
      {
          "value": 0.2761992047,
          "date": "2012-10-05",
          "l": -0.1770373817,
          "u": 0.100085727
      },
      {
          "value": 0.3416654249,
          "date": "2012-10-06",
          "l": -0.1502479611,
          "u": 0.0751148102
      },
      {
          "value": 0.4410128962,
          "date": "2012-10-07",
          "l": -0.1618694445,
          "u": 0.0881453482
      },
      {
          "value": 0.5214289042,
          "date": "2012-10-08",
          "l": -0.1590852977,
          "u": 0.0871880288
      },
      {
          "value": 0.6430880604,
          "date": "2012-10-09",
          "l": 0.063624221,
          "u": 0.2455101587
      },
      {
          "value": 0.5472823479,
          "date": "2012-10-10",
          "l": 0.1553854927,
          "u": 0.3583991097
      },
      {
          "value": 0.4360734074,
          "date": "2012-10-11",
          "l": 0.2055952772,
          "u": 0.3812162823
      },
      {
          "value": 0.3463648355,
          "date": "2012-10-12",
          "l": -0.0626466998,
          "u": 0.0037342957
      },
      {
          "value": 0.2867009379,
          "date": "2012-10-13",
          "l": -0.0867594055,
          "u": -0.0223791074
      },
      {
          "value": 0.2288672826,
          "date": "2012-10-14",
          "l": -0.1161709129,
          "u": -0.0534789124
      },
      {
          "value": 0.1474426821,
          "date": "2012-10-15",
          "l": -0.1559759048,
          "u": -0.0646995092
      },
      {
          "value": 0.1502405066,
          "date": "2012-10-16",
          "l": -0.1604364638,
          "u": -0.0602562376
      },
      {
          "value": 0.1203765529,
          "date": "2012-10-17",
          "l": -0.1569023195,
          "u": -0.0578129637
      },
      {
          "value": 0.0649122919,
          "date": "2012-10-18",
          "l": -0.0782987564,
          "u": -0.0501999174
      }
  ]
    const base = -data.reduce((min, val) => Math.floor(Math.min(min, val.l)), Infinity);

    const option = {
      title: {
        text: '用电量聚合估计',
        subtext: '并显示早高峰晚高峰',
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
        left: '10%',
        right: '10%',
        bottom: '10%',
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
          formatter: (val) => (val + base * 2) * 100 + 'W',
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
          data: data.map((item) => item.l * 30 + base *5),
          lineStyle: {
            opacity: 0,
          },
          stack: 'confidence-band',
          symbol: 'none',
        },
        {
          name: 'U',
          type: 'line',
          data: data.map((item) => item.value * 100 - item.l * 5 + base * 5),
          lineStyle: {
            opacity: 0,
          },
          areaStyle: {
            color: 'rgba(22, 93, 215, 0.6)',
          },
          stack: 'confidence-band',
          symbol: 'none',
        },
        {
          name: 'L',
          type: 'line',
          data: data.map((item) => item.l * 30 + base),
          lineStyle: {
            opacity: 0,
          },
          stack: 'confidence-band',
          symbol: 'none',
        },
        {
          name: 'U',
          type: 'line',
          data: data.map((item) => item.value * 100 + item.l  + base * 7),
          lineStyle: {
            opacity: 0,
          },
          areaStyle: {
            color: 'rgba(225, 93, 215, 0.7)',
          },
          stack: 'confidence-band',
          symbol: 'none',
        },
        {
          type: 'line',
          data: data.map((item) => item.value * 20 + base * 5),
          itemStyle: {
            color: 'rgba(255, 0, 0, 1)',
          },
          type: 'line',
          data: data.map((item) => item.value * 30 - item.u * 10 + base * 10),
          itemStyle: {
            color: 'rgba(255, 235, 198, 1)',
          },
          markArea: {
            itemStyle: {
              color: 'rgba(255, 173, 177, 0.4)'
            },
            data: [
              [
                {
                  name: 'Morning Peak',
                  xAxis: '2012-09-13'
                },
                {
                  xAxis: '2012-09-22'
                }
              ],
              [
                {
                  name: 'Evening Peak',
                  xAxis: '2012-09-30'
                },
                {
                  xAxis: '2012-10-16'
                }
              ]
            ]
          },
          showSymbol: false,
        },
      ],
    };

    chartInstance.setOption(option);

  }, []);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <div ref={chartRef} style={{ width: '90%', height: '100%' }} />
    </div>
  );
};

export default ChartComponent;
