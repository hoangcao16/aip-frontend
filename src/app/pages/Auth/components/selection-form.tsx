import { Button, Col, Form, Row } from 'antd';
// import { FormComponentProps } from 'antd/es/form';
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Styled from '../styled/loginStyled';

const IS_SELECTED = 'is_selected';
const SELECT = 'select';

// interface IProps extends FormComponentProps {
//   auth: any;
// }

export const Selection = props => {
  const { getFieldDecorator } = props.form;
  const [data, setData] = useState({ remember: true });
  const [requirePassword, setRequirePassword] = useState(false);
  const [confirmDirty, setConfirmDirty] = useState(false);
  // const history = useHistory();
  const handleSelect = (item: string) => {
    localStorage.setItem(IS_SELECTED, '1');
    localStorage.setItem(SELECT, item);
    // history.push({
    //   pathname: `/admin/home`,
    // });
  };

  console.log('props.auth?.data?.is_main  ', props.auth?.data.is_admin === 1);
  // console.log("props.auth?.loading  ", props.auth?.loading)
  return (
    <Styled.Container>
      {props.auth?.data.is_admin === 1 ? (
        <div className="selectContent">
          <Row gutter={24}>
            <Col span={24}>
              <h3 className="title">MAIN</h3>
              <Button type="primary" onClick={() => handleSelect('main')}>
                Chọn
              </Button>
            </Col>
          </Row>
        </div>
      ) : null}
      <div className="selectContent">
        <Row gutter={24}>
          <Col span={24}>
            <h3 className="title">EKYC</h3>
            <Button type="primary" onClick={() => handleSelect('ekyc')}>
              Chọn
            </Button>
          </Col>
        </Row>
      </div>
      <div className="selectContent">
        <Row gutter={24}>
          <Col span={24}>
            <h3 className="title">VMS</h3>
            <Button type="primary" onClick={() => handleSelect('vms')}>
              Chọn
            </Button>
          </Col>
        </Row>
      </div>
      <div className="selectContent">
        <Row gutter={24}>
          <Col span={24}>
            <h3 className="title">FR</h3>
            <Button type="primary" onClick={() => handleSelect('fr')}>
              Chọn
            </Button>
          </Col>
        </Row>
      </div>
    </Styled.Container>
  );
};

export default Selection;
