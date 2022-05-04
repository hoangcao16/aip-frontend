import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import NOT_FOUND from '../../assets/images/imagesGuide/404.png';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>404 {t('page-not-found')}</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <img src={NOT_FOUND} alt="404" />
        <p>Oops... Somethings went wrong!</p>
        <Button size="large">
          <Link to={'/'}>Back to home</Link>
        </Button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  img {
    /* width: 100%; */
  }
  p {
    margin-top: 5.6rem;
    font-weight: 700;
    font-size: 1.8rem;
    color: #404e5c;
  }

  .ant-btn {
    margin-top: 5.6rem;
    background: #c0292c;
    color: white;
    height: 5.6rem;
    width: 14rem;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;
