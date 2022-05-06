import React from 'react';
import { Table } from 'antd';
// import './style.scss';

const columns = [
  {
    title: 'API Name',
    dataIndex: 'apiName',
    width: '30rem',
  },
  {
    title: 'URI',
    dataIndex: 'url',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    width: '16.5rem',
    className: 'total',
  },
  {
    title: 'Success API',
    dataIndex: 'successApi',
    width: '16.5rem',
    className: 'successApi',
  },
  {
    title: 'Client Errors',
    dataIndex: 'clientErrors',
    width: '16.6rem',
    className: 'clientErrors',
  },
  {
    title: 'System Errors',
    dataIndex: 'systemErrors',
    width: '16.5rem',
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
      scroll={{ x: 300 }}
    />
  );
};

export default ChartTable;
