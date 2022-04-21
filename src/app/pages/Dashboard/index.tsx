import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'src/redux/reducers';
import Loading from 'src/components/Loading';
import { Row, Col } from 'antd';

import Header from './components/Header/Header';
import ChartLine from './components/ChartLine';
import CustomTabs from 'src/components/Tabs/CustomTabs';
import DashboardPage from './pages/DashboardPage';
import TokenManagement from './pages/TokenManagement';
import Feedback from './pages/Feedback';
import ExperienceProduct from './pages/ExperienceProduct';

const tabDasboard = [
  { tab: 'Dashboard', component: <DashboardPage />, icon: 'appstore' },
  { tab: 'Token Management', component: <TokenManagement />, icon: 'file-text' },
  { tab: 'Feedback', component: <Feedback />, icon: 'message' },
  { tab: 'Experience product', component: <ExperienceProduct />, icon: 'table' },
];

const mapStateToProps = (state: RootState) => {
  return {
    isLogin: !!state.auth.auth?.data,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Dashboard = (props: PropsFromRedux) => {
  const currentTime = Date.now();
  const [selectedTime, setSelectedTime] = React.useState(currentTime); // time to get report;
  const [departmentId, setDepartmentId] = useState('');

  return (
    <Wrapper>
      <Header isLogin={props.isLogin} />
      <CustomTabs dataTabs={tabDasboard} />
    </Wrapper>
  );
};
//     <Wrapper>
//       <Header />
//       <ChartLine />
//       {/* <StyledRow gutter={20} style={{display: "flex", alignItems: "stretch"}}>
// 				<Col md={5} style={{maxHeight: '394px'}}>
// 					<Employee/>
// 				</Col>
// 				<Col md={19}>
// 					<FilterSection
// 						selectedTime={selectedTime}
// 						setSelectedTime={setSelectedTime}
// 						departmentId={departmentId}
// 						setDepartmentId={setDepartmentId}
// 					/>
// 				</Col>
// 			</StyledRow> */}

//       {/* <StyledRow gutter={20} style={{display: "flex", alignItems: "stretch"}}>
// 				<Col span={15}>
// 					<TimesheetWidget selectedTime={selectedTime} setSelectedTime={setSelectedTime} departmentId={departmentId}/>
// 				</Col>
// 				<Col span={9}>
// 					<AttendaceHistory selectedTime={selectedTime} setSelectedTime={setSelectedTime} departmentId={departmentId}/>
// 				</Col>
// 			</StyledRow> */}
//     </Wrapper>
//   );
// };

const Wrapper = styled.div`
  .ant-tabs {
    // height: calc(100vh - 80px);
    height: auto;
  }
  .custom-tabs .ant-tabs .ant-tabs-left-bar {
    background: #f7f7f7;
    height: calc(100vh - 80px);
  }
  .custom-tabs .ant-tabs .ant-tabs-left-content {
    min-height: calc(100vh - 80px);
    height: auto;
  }
  .custom-tabs .ant-tabs-nav .ant-tabs-tab-active {
    background-color: white;
    margin-right: 2px;
    border: 1px solid #ebebeb;
  }
`;

export default connector(Dashboard);
