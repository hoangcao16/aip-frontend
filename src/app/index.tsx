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
import { useEffect } from 'react';

import { GlobalStyle } from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { HomePage } from './pages/HomePage/Loadable';
import {
  LoginPage,
  RegisterPage,
  ForgetPasswordPage,
  UpdatePasswordPage,
  ActiveAccountPage,
} from './pages/Auth/Loadable';
import { authService } from 'services/authService';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from 'app/components/common/themeContext';
import { darkTheme, lightTheme } from 'theme/theme';
import 'antd/dist/antd.min.css';
import PrivateRoute from 'app/components/common/privateRoute';
import PublicRoute from 'app/components/common/publicRoute';
import 'react-phone-number-input/style.css';
import { Documentation } from './pages/Documentation/Loadable';
import { Dashboard } from './pages/Dashboard/Loadable';
import { ManageAccount } from './pages/ManageAccount/Loadable';

export function App() {
  const { theme } = useThemeContext();
  const { i18n } = useTranslation();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // check access token
  useEffect(() => {
    authService.checkAccessToken();
    authService.autoRefreshAccessToken();
  }, []);
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <Helmet htmlAttributes={{ lang: i18n.language }}>
          <meta name="description" content="Synodus eKYC" />
        </Helmet>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/manage"
            element={
              <PrivateRoute>
                <ManageAccount />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/forget"
            element={
              <PublicRoute>
                <ForgetPasswordPage />
              </PublicRoute>
            }
          />
          <Route
            path="/change-pass/:id"
            element={
              <PublicRoute>
                <UpdatePasswordPage />
              </PublicRoute>
            }
          />
          <Route
            path="/active/:userActiveId"
            element={
              <PublicRoute>
                <ActiveAccountPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
