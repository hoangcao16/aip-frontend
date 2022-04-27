import React from 'react';
import { Button, Col, Row } from 'antd';
// import './style.scss';
import IMAGE_ACCURACY from '../../../assets/images/imagesGuide/image-accuracy.png';
import IMAGE_OPTION from '../../../assets/images/imagesGuide/image-option.png';
import IMAGE_SAMPLE from '../../../assets/images/imagesGuide/image-sample.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { CheckOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import Styled from './styled';
import { useNavigate } from 'react-router-dom';

const HomePageContent = (props: any) => {
  const token = localStorage.getItem('access_token');
  const navigate = useNavigate();
  const listOption = [
    'Verify document with near-perfect accuracy',
    'Recognize customers based on their selfies and ID photos',
    'Fraud detection',
    'On-premise deployment',
    'Anti spoofing face and document',
  ];

  const data = {
    iss: 'https://my-domain.auth0.com/',
    sub: 'auth0|123456',
    aud: [
      'https://example.com/health-api',
      'https://my-domain.auth0.com/userinfo',
    ],
    azp: 'my_client_id',
    exp: 1311281970,
    iat: 1311280970,
    scope: 'openid profile read:patients read:admin',

    azp2: 'my_client_id',
    exp2: 1311281970,
    iat2: 1311280970,
    scope2: 'openid profile read:patients read:admin',
  };
  return (
    <Styled.HomePage>
      <div className="homepage">
        <Row justify="center">
          <Col span={19}>
            <div className="info">
              <div className="line"></div>
              <h3 className="info__title">
                Intelligent eKYC to take online trust to next level
              </h3>
              <div className="info__desc">
                <p>Fast, secure, easy, instantaneous customer onboarding.</p>
                <Button
                  size="large"
                  className="info__btn"
                  onClick={() => {
                    token ? navigate('/dashboard') : navigate('/login');
                    localStorage.setItem('tab_dashboard', 'Try demo');
                  }}
                >
                  Try now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        {/* accuracy */}
        <Row justify="center">
          <Col span={19}>
            <div className="accuracy">
              <div>
                <img src={IMAGE_ACCURACY} alt="img" />
              </div>
              <div className="accuracy__box">
                <h4>eKYC</h4>
                <p>Now Verify Identity & Know Your Customer in Seconds.</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="line-full"></div>
        {/* option */}
        <Row justify="center">
          <Col span={19}>
            <div className="option">
              <div className="line"></div>
              <h3 className="option__title">Why we are the best option?</h3>
              <Row className="option__content">
                <Col span={12}>
                  <img src={IMAGE_OPTION} alt="img" />
                </Col>
                <Col span={12}>
                  <div className="option__desc">
                    <div className="option__heading">
                      <span>Why Choose Us</span>
                      <h4>
                        eKYC Solution Powered by Machine Learning & Artificial
                        Intelligence
                      </h4>
                      <p>
                        A high-precision electronic identification solution to
                        digitize customer experience, increase conversion rates,
                        and reduce risks for organizations.
                      </p>
                    </div>
                    <div className="option__list">
                      {listOption.map((item, index) => (
                        <div className="option__item" key={index}>
                          <span className="option__type">
                            <CheckOutlined className="icon" />
                          </span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        {/* sample */}
        <Row justify="center">
          <Col span={19}>
            <div className="sample">
              <div className="line"></div>
              <div className="sample__header">
                <h3 className="sample__title">
                  Let’s get started with our sample!
                </h3>
                <Button
                  size="large"
                  className="sample__btn"
                  onClick={() => {
                    token ? navigate('/dashboard') : navigate('/login');
                    localStorage.setItem('tab_dashboard', 'Try demo');
                  }}
                >
                  Try now
                </Button>
              </div>
              <Row className="sample__content">
                <Col span={12}>
                  <div className="sample__carousel">
                    <Carousel
                      infiniteLoop
                      showStatus={false}
                      width="100%"
                      renderArrowPrev={(onClickHandler, hasNext, label) =>
                        hasNext && (
                          <LeftOutlined
                            className="arrow-left"
                            onClick={onClickHandler}
                            title={label}
                          />
                        )
                      }
                      renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                          <RightOutlined
                            className="arrow-right"
                            onClick={onClickHandler}
                            title={label}
                          />
                        )
                      }
                      thumbWidth={204}
                    >
                      <div>
                        <img src={IMAGE_SAMPLE} alt="img" />
                      </div>
                      <div>
                        <img src={IMAGE_SAMPLE} alt="img" />
                      </div>
                      <div>
                        <img src={IMAGE_SAMPLE} alt="img" />
                      </div>
                    </Carousel>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="sample__code">
                    <p className="result-title">Result code</p>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Styled.HomePage>
  );
};

export default HomePageContent;
