/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from 'app/components/common/themeContext';
import { darkTheme, lightTheme } from 'theme/theme';
import 'antd/dist/antd.min.css';
import Documentation from './pages/Documentation';

export function App() {
  const { theme } = useThemeContext();
  const { i18n } = useTranslation();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <Helmet htmlAttributes={{ lang: i18n.language }}>
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} element={<HomePage />} />
          <Route path={process.env.PUBLIC_URL + '/documentation'} element={<Documentation />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
