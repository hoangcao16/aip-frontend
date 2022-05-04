import CustomTabs from 'app/components/Tabs/CustomTabs';
import HeaderDashboard from 'app/components/HeaderDashboard';
import PersonalInformation from './components/PersonalInformation';
import ChangePassword from './components/ChangePassword';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { authService } from 'services/authService';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  .ant-tabs-nav {
    background-color: ${({ theme }) => theme.neutral_100};
    margin-right: 1px;
  }
  .ant-tabs-tab-active {
    background-color: ${({ theme }) => theme.neutral_white} !important;
  }
  @media screen and (max-width: 767px) {
    .ant-tabs-tab-btn {
      padding-left: 0.3rem !important;
    }
  }
  @media screen and (max-width: 575px) {
    .ant-tabs-tab-btn {
      padding-left: 0.5rem !important;
    }
  }
`;

const tabManage = [
  {
    tab: 'Personal information',
    component: <PersonalInformation />,
  },
  {
    tab: 'Change password',
    component: <ChangePassword />,
  },
  {
    tab: 'Logout',
  },
];

const ManageAccount = () => {
  const navigate = useNavigate();
  const [keyTabs, setKeyTabs] = useState('Personal information');
  function confirm() {
    Modal.confirm({
      title: 'Do you want to log out?',
      okText: 'Logout',
      cancelText: 'Later',
      onOk() {
        authService.logout();
        navigate('/');
      },
      style: {},
    });
  }

  return (
    <Container>
      <HeaderDashboard />
      <CustomTabs
        dataTabs={tabManage}
        onLogout={confirm}
        keyTabs={keyTabs}
        onTabClick={(key: string) => setKeyTabs(key)}
      />
    </Container>
  );
};

export default ManageAccount;
