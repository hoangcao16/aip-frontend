import CustomTabs from 'app/components/Tabs/CustomTabs';
import HeaderDashboard from 'app/components/HeaderDashboard';
import PersonalInformation from './components/PersonalInformation';
import ChangePassword from './components/ChangePassword';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { authService } from 'services/authService';
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
      <CustomTabs dataTabs={tabManage} onLogout={confirm} />
    </Container>
  );
};

export default ManageAccount;
