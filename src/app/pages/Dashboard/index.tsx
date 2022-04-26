import {
  AppstoreOutlined,
  FileTextOutlined,
  MessageOutlined,
  TableOutlined,
} from '@ant-design/icons';
import CustomTabs from 'app/components/Tabs/CustomTabs';
import React from 'react';
import AccessToken from './components/AccessToken';
import DashboardPage from './components/DashboardPage';
import Feedback from './components/Feedback';
import HeaderDashboard from '../../components/HeaderDashboard';
import TryDemo from './components/TryDemo';
import styled from 'styled-components';

const Container = styled.div`
  .ant-tabs-nav {
    background-color: ${({ theme }) => theme.neutral_100};
    margin-right: 1px;
  }
  .ant-tabs-tab-active {
    background-color: ${({ theme }) => theme.neutral_white} !important;
  }
`;

const tabDasboard = [
  {
    tab: 'Dashboard',
    component: <DashboardPage />,
    icon: <AppstoreOutlined />,
  },
  {
    tab: 'Access token',
    component: <AccessToken />,
    icon: <FileTextOutlined />,
  },
  { tab: 'Feedback', component: <Feedback />, icon: <MessageOutlined /> },
  { tab: 'Try demo', component: <TryDemo />, icon: <TableOutlined /> },
];

const Dashboard = () => {
  return (
    <Container>
      <HeaderDashboard />
      <CustomTabs dataTabs={tabDasboard} />
    </Container>
  );
};

export default Dashboard;
