import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header/Header';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import HomePageContent from './components/HomePageContent';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Synodus application homepage" />
      </Helmet>
      <Header isLogin={false} />
      <HomePageContent />
      <Footer />
    </>
  );
}
