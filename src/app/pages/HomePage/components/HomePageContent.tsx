import React from 'react';
import { Button, Col, Icon, Row } from 'antd';
import './style.scss';
import IMAGE_ACCURACY from '../../../assets/images/imagesGuide/image-accuracy.png';
import IMAGE_OPTION from '../../../assets/images/imagesGuide/image-option.png';
import IMAGE_SAMPLE from '../../../assets/images/imagesGuide/image-sample.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const HomePageContent = (props: any) => {
  const listOption = [
    'Verify document with near-perfect accuracy',
    'Recognize customers based on their selfies and ID photos',
    'Fraud detection',
    'On-premise deployment',
    'Solve fake ID and information problems',
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
    <div className="homepage">
      <Row type="flex" justify="center">
        <Col span={19}>
          <div className="info">
            <div className="line"></div>
            <h3 className="info__title">
              Intelligent eKYC to take online trust to next level
            </h3>
            <div className="info__desc">
              <p>Instantaneous customer onboarding. Fast. Secure. Easy.</p>
              <Button size="large" className="info__btn">
                Try now
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      {/* accuracy */}
      <Row type="flex" justify="center">
        <Col span={19}>
          <div className="accuracy">
            <div>
              <img src={IMAGE_ACCURACY} alt="img" />
            </div>
            <div className="accuracy__box">
              <h4>eKYC</h4>
              <p>
                Accuracy is as high as 98%. Identify in many harsh situations
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <div className="line-full"></div>
      {/* option */}
      <Row type="flex" justify="center">
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
                    {listOption.map(item => (
                      <div className="option__item">
                        <span className="option__type">
                          <Icon type="check" className="icon" />
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
      <Row type="flex" justify="center">
        <Col span={19}>
          <div className="sample">
            <div className="line"></div>
            <div className="sample__header">
              <h3 className="sample__title">
                Let’s get started with our sample!
              </h3>
              <Button size="large" type="danger" className="sample__btn">
                Try with my image
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
                        <Icon
                          type="left"
                          className="arrow-left"
                          onClick={onClickHandler}
                          title={label}
                        />
                      )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                      hasNext && (
                        <Icon
                          type="right"
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
  );
};

export default HomePageContent;
