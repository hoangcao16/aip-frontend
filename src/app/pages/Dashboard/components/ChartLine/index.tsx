import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'src/redux/reducers';
import { Line } from '@ant-design/plots';

import styled from 'styled-components';
import { Icon, Col, Row, Button } from 'antd';

const mapState = ({ auth: { auth } }: RootState) => ({
  auth,
});

const connector = connect(mapState, {});
type ReduxProps = ConnectedProps<typeof connector>;
interface IProps extends ReduxProps {
  showButton?: any;
  selectedItems?: any;
}

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

function ChartLine(props: IProps) {
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
  return <Line {...config} />;
}

export default connector(ChartLine);
