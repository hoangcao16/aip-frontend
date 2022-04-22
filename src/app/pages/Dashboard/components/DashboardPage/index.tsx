import {
  BarChartOutlined,
  CheckSquareOutlined,
  HddOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Card, Col, Row, Select, Tabs } from 'antd';
import React from 'react';
import ChartLine from '../ChartLine';
import ChartTable from '../ChartTable';
import Styled from './styled';

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
    <Styled.DashboardPage>
      <div className="data">
        <h2>Dasboard</h2>

        <Row gutter={24}>
          <Col className="gutter-row" span={6}>
            <Card style={{ width: '100%' }}>
              <h3>123</h3>
              <div className="card-info">
                <span style={{ backgroundColor: '#EBF4FF' }}>
                  <BarChartOutlined
                    className="icon"
                    style={{ color: '#202125' }}
                  />
                </span>
                <p>Total requests</p>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card style={{ width: '100%' }}>
              <h3>99</h3>
              <div className="card-info">
                <span style={{ backgroundColor: '#D4F2D7' }}>
                  <CheckSquareOutlined
                    className="icon"
                    style={{ color: '#21874A' }}
                  />
                </span>
                <p>Successful request(s)</p>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card style={{ width: '100%' }}>
              <h3>13</h3>
              <div className="card-info">
                <span style={{ backgroundColor: '#FFEAEA' }}>
                  <TeamOutlined className="icon" style={{ color: '#C0292C' }} />
                </span>
                <p>Client error(s)</p>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card style={{ width: '100%' }}>
              <h3>08</h3>
              <div className="card-info">
                <span style={{ backgroundColor: '#FFEAEA' }}>
                  <HddOutlined className="icon" style={{ color: '#C0292C' }} />
                </span>
                <p>System error(s)</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
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
    </Styled.DashboardPage>
  );
};

export default DashboardPage;
