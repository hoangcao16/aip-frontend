import { Button, Card, Select, Tabs } from 'antd';
import React, { useState } from 'react';
import ChartLine from '../../components/ChartLine';
import ChartTable from '../../components/ChartTable';
import HeaderPage from '../../components/HeaderPage';
import './style.scss';
const { TabPane } = Tabs;
const { Option } = Select;

const operations = (
  <Select defaultValue="lucy" size="large" style={{ width: 120 }}>
    <Option value="jack">Jack</Option>
    <Option value="lucy">1 Hour</Option>
    <Option value="Yiminghe">yiminghe</Option>
  </Select>
);

const DashboardPage = () => {
  return (
    <div>
      <HeaderPage />
      <Card className="chart">
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="Statistical chart" key="Statistical chart">
            <ChartLine />
          </TabPane>
          <TabPane tab="Request chart" key="Request chart">
            <ChartTable />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default DashboardPage;
