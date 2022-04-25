import CustomTabs from 'app/components/Tabs/CustomTabs';
import HeaderDashboard from 'app/components/HeaderDashboard';
import PersonalInformation from './components/PersonalInformation';
import ChangePassword from './components/ChangePassword';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { authService } from 'services/authService';

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
    <div>
      <HeaderDashboard />
      <CustomTabs dataTabs={tabManage} onLogout={confirm} />
    </div>
  );
};

export default ManageAccount;
