import React, { useState } from 'react';
import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header/Header';
import CustomTabs from 'app/components/Tabs/CustomTabs';
import IntegrationGuide from './components/IntegrationGuide';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

export const Container = styled.div`
  .ant-tabs-tab-active {
    background-color: ${({ theme }) => theme.neutral_100} !important;
  }
  .custom-tabs {
    margin-top: 8rem;
    margin-bottom: 4.5rem;
  }
`;

const tabDocumentation = [
  { tab: 'API References', component: 'API References' },
  { tab: 'API + SDK Android', component: 'API + SDK Android' },
  { tab: 'API + SDK iOS', component: 'API + SDK iOS' },
  { tab: 'API + SDK Web', component: 'API + SDK Web' },
  { tab: 'Integration Guide', component: <IntegrationGuide /> },
];

export const Documentation = () => {
  const [keyTabs, setKeyTabs] = useState('API References');

  return (
    <>
      <Helmet>
        <title>Documentation</title>
        <meta
          name="description"
          content="A Synodus application documentation"
        />
      </Helmet>
      <Container>
        <Header />
        <CustomTabs
          dataTabs={tabDocumentation}
          keyTabs={keyTabs}
          onTabClick={(key: string) => setKeyTabs(key)}
        />
        <Footer />
      </Container>
    </>
  );
};
