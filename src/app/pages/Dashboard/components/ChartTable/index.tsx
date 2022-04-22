import React from 'react';
import { Table } from 'antd';
// import './style.scss';

const columns = [
  {
    title: 'API Name',
    dataIndex: 'apiName',
    width: 300,
  },
  {
    title: 'URI',
    dataIndex: 'url',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    width: 165,
    className: 'total',
  },
  {
    title: 'Success API',
    dataIndex: 'successApi',
    width: 165,
    className: 'successApi',
  },
  {
    title: 'Client Errors',
    dataIndex: 'clientErrors',
    width: 166,
    className: 'clientErrors',
  },
  {
    title: 'System Errors',
    dataIndex: 'systemErrors',
    width: 165,
    className: 'systemErrors',
  },
];

const data = [
  {
    key: '1',
    apiName: 'Add face',
    url: '/face-service/face/add',
    total: '1',
    successApi: '12',
    clientErrors: '23',
    systemErrors: '4',
  },
  {
    key: '2',
    apiName: 'Add face',
    url: '/face-service/face/add',
    total: '1',
    successApi: '12',
    clientErrors: '23',
    systemErrors: '4',
  },
  {
    key: '3',
    apiName: 'Add face',
    url: '/face-service/face/add',
    total: '1',
    successApi: '12',
    clientErrors: '23',
    systemErrors: '4',
  },
  {
    key: '4',
    apiName: 'Add face',
    url: '/face-service/face/add',
    total: '1',
    successApi: '12',
    clientErrors: '23',
    systemErrors: '4',
  },
];

const ChartTable = () => {
  return (
    <Table
      className="chart-table"
      columns={columns}
      dataSource={data}
      bordered
    />
  );
};

export default ChartTable;
