import React from 'react';
import { Line } from '@ant-design/plots';

const data = [
  {
    Time: '12:00',
    scales: 17002,
  },
  {
    Time: '12:10',
    scales: 18108,
  },
  {
    Time: '12:20',
    scales: 13200,
  },
  {
    Time: '12:30',
    scales: 19855,
  },
  {
    Time: '12:40',
    scales: 19405,
  },
  {
    Time: '12:50',
    scales: 19045,
  },
  {
    Time: '13:00',
    scales: 19045,
  },
  {
    Time: '2010-10',
    scales: 19405,
  },
];

function ChartLine() {
  const config: any = {
    data,
    padding: 'auto',
    xField: 'Time',
    yField: 'scales',
    xAxis: {
      tickCount: 7,
    },
    smooth: true,
  };
  return (
    <div className="chart_line">
      <Line className="line" {...config} />
    </div>
  );
}

export default ChartLine;
