import { Anchor, Col, Row } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import './style.scss';
import Styled from './styled';

const { Link } = Anchor;

const IntegrationGuide = () => {
  const dataPassport = {
    request_id: '36f600af-112e-44d6-b5a8-82f7062e530c',
    message: {
      status_code: 'OK',
      content: {
        name: 'ĐÀO TIẾN THÀNH',
        nationality: 'VIỆT NAM',
        type: 'P',
        code: 'VNM',
        passport_no: 'B8170577',
        dob: '18 / 08 / 1990',
        gender: 'NAM',
        pob: 'HÀ NỘI',
        id_card_no: '112514326',
        doi: '12 / 07 / 2013',
        poi: 'Cục Quản lý xuất nhập cảnh',
        doe: '12/07/2023',
      },
    },
  };
  const dataDriversLicense = {
    request_id: '36f600af-112e-44d6-b5a8-82f7062e530c',
    content: {
      status_code: 'OK',
      content: {
        no: '790130002808',
        name: 'WAK JUSEOP',
        dob: '25/03/1955',
        nationality: 'South Korea',
        address: '162 Trần Duy Hưng, Hà Nội',
        doi: '22/07/2013',
        poi: 'Hà Nội',
        license_class: 'A1, B2',
        doe: '05/07/2015',
      },
    },
  };

  const dataFace = {
    request_id: '36f600af-112e-44d6-b5a8-82f7062e530c',
    is_matched: true,
    confidence: 0.95,
    is_real_face: true,
  };

  return (
    <Styled.IntegrationGuide>
      <Row className="integration-guide">
        <Col xs={24} md={20}>
          <div id="scroll-layout-guide" className="scroll-layout-guide">
            <h1>Giới Thiệu</h1>
            <div>
              <p>
                Nền tảng cung cấp các dịch vụ eKYC qua RESTful API tại địa chỉ:
                <br />
                <a href="https://aip-ekyc.edsolabs.com/">
                  https://aip-ekyc.edsolabs.com/
                </a>
              </p>
              <p>
                Để sử dụng các API này, cần cung cấp Client ID và Client Secret
                tại header của mỗi request (Xem mục Lấy Client ID & Secret).
              </p>
              <p>Mô tả cụ thể các đầu API được trình bày phía dưới.</p>
            </div>
            <div>
              <div className="item">
                <h2 id="client_id">Lấy Client ID & Secret</h2>
                <p>
                  Bước 1: Đăng nhập vào website:{' '}
                  <a href="https://aip-frontend.edsolabs.com/login">
                    https://aip-frontend.edsolabs.com/login
                  </a>
                </p>
                <p>
                  Bước 2: Vào mục Access token để lấy Client ID và Client Secret
                </p>
                <p>
                  Bước 3: Gắn Client ID và Client Secret vào header của mỗi
                  request.
                </p>
              </div>

              <div className="item">
                <h2 id="id_card">API Nhận ID Card</h2>
                <p>
                  Path: /id_card <br /> Method: POST
                  <br /> Header:
                </p>
                <table className="table-header">
                  <tr>
                    <td>client-id</td>
                    <td>client-id</td>
                  </tr>
                  <tr>
                    <td>client_secret</td>
                    <td>client_secret</td>
                  </tr>
                </table>
                <p>Body: form-data</p>
                <table className="table-body">
                  <tr>
                    <td>Key</td>
                    <td>Type</td>
                    <td>Mô tả</td>
                  </tr>
                  <tr>
                    <td>image</td>
                    <td>File</td>
                    <td>Ảnh passport</td>
                  </tr>
                </table>
                <p>Output: json</p>
                <p>Trường hợp thành công:</p>
                <div className="data-json">
                  <pre>{JSON.stringify(dataPassport, null, 2)}</pre>
                </div>
              </div>

              <div className="item">
                <h2 id="drivers_license">API Nhận Bằng Lái Xe</h2>
                <p>
                  Path: /drivers_license <br /> Method: POST
                  <br /> Header:
                </p>
                <table className="table-header">
                  <tr>
                    <td>client-id</td>
                    <td>client-id</td>
                  </tr>
                  <tr>
                    <td>client_secret</td>
                    <td>client_secret</td>
                  </tr>
                </table>
                <p>Body: form-data</p>
                <table className="table-body">
                  <tr>
                    <td>Key</td>
                    <td>Type</td>
                    <td>Mô tả</td>
                  </tr>
                  <tr>
                    <td>image</td>
                    <td>File</td>
                    <td>Ảnh bằng lái xe</td>
                  </tr>
                </table>
                <p>Output: json</p>
                <p>Trường hợp thành công:</p>
                <div className="data-json">
                  <pre>{JSON.stringify(dataDriversLicense, null, 2)}</pre>
                </div>
              </div>

              <div className="item">
                <h2 id="face_verification">API Xác Thực Khuôn Mặt</h2>
                <p>
                  Path: /face_verification <br /> Method: POST
                  <br /> Header:
                </p>
                <table className="table-header">
                  <tr>
                    <td>client-id</td>
                    <td>client-id</td>
                  </tr>
                  <tr>
                    <td>client_secret</td>
                    <td>client_secret</td>
                  </tr>
                </table>
                <p>Body: form-data</p>
                <table className="table-body">
                  <tr>
                    <td>Key</td>
                    <td>Type</td>
                    <td>Mô tả</td>
                  </tr>
                  <tr>
                    <td>face_image_1</td>
                    <td>File</td>
                    <td>Ảnh giấy tờ chứa khuôn mặt</td>
                  </tr>
                  <tr>
                    <td>face_image_2</td>
                    <td>File</td>
                    <td>Ảnh chụp chân dung</td>
                  </tr>
                </table>
                <p>Output: json</p>
                <p>Trường hợp thành công:</p>
                <div className="data-json">
                  <pre>{JSON.stringify(dataFace, null, 2)}</pre>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={0} md={4}>
          <div>
            <Anchor affix={false} offsetTop={100}>
              <Link href="#client_id" title="Lấy Client ID & Secret" />
              <Link href="#id_card" title="API Nhận ID Card" />
              <Link href="#drivers_license" title="API Nhận Bằng Lái Xe" />
              <Link href="#face_verification" title="API Xác Thực Khuôn Mặt" />
            </Anchor>
          </div>
        </Col>
      </Row>
    </Styled.IntegrationGuide>
  );
};

export default IntegrationGuide;
