import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'src/redux/reducers';

import { Icon, Col, Row, Button, Card } from 'antd';
import './style.scss';

const mapState = ({ auth: { auth } }: RootState) => ({
  auth,
});

const connector = connect(mapState, {});
type ReduxProps = ConnectedProps<typeof connector>;
interface IProps extends ReduxProps {
  showButton?: any;
  selectedItems?: any;
}

function Search(props: IProps) {
  return (
    <div className="data">
      <h2>Dasboard</h2>

      <Row gutter={24}>
        <Col className="gutter-row" span={6}>
          <Card style={{ width: '100%' }}>
            <h3>123</h3>
            <div className="card-info">
              <span style={{ backgroundColor: '#EBF4FF' }}>
                <Icon type="bar-chart" className="icon" style={{ color: '#202125' }} />
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
                <Icon type="check-square" className="icon" style={{ color: '#21874A' }} />
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
                <Icon type="team" className="icon" style={{ color: '#C0292C' }} />
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
                <Icon type="hdd" className="icon" style={{ color: '#C0292C' }} />
              </span>
              <p>System error(s)</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default connector(Search);
