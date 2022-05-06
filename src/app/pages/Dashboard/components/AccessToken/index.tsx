/* eslint-disable react-hooks/exhaustive-deps */
import { CopyOutlined, EyeOutlined } from '@ant-design/icons';
import { Alert, Button, message } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import Styled from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectTokenaccess } from './slice/selectors';
import { useTokenaccessSlice } from './slice';

const AccessToken = () => {
  const dispatch = useDispatch();
  const { actions } = useTokenaccessSlice();
  const { clientId, clientSecret } = useSelector(selectTokenaccess);
  const clientIdRef = useRef<HTMLInputElement>(null);
  const clientSecretRef = useRef<HTMLInputElement>(null);
  const [typeId, setTypeId] = useState('text');
  const [typeKey, setTypeKey] = useState('text');

  // const data = {
  //   iss: 'https://my-domain.auth0.com/',
  //   sub: 'auth0|123456',
  //   aud: [
  //     'https://example.com/health-api',
  //     'https://my-domain.auth0.com/userinfo',
  //   ],
  //   azp: 'my_client_id',
  //   exp: 1311281970,
  //   iat: 1311280970,
  //   scope: 'openid profile read:patients read:admin',
  // };

  const handleClickCopy = (value: any) => {
    navigator.clipboard.writeText(value);
    message.info('Copied to clipboard');
  };
  useEffect(() => {
    dispatch(actions.getTokenRequest());
  }, []);
  const MessageAlert = () => (
    <>
      Client ID and Client Secret is used to call APIs. Do{' '}
      <Styled.Not>NOT</Styled.Not> share keys.
    </>
  );
  return (
    <Styled.AccessToken>
      <div className="token">
        <h2>Access token</h2>
        <Alert message={<MessageAlert />} type="warning" showIcon />
        <div className="token__id">
          <Styled.Label>Client ID</Styled.Label>
          <div className="token__input">
            <input type={typeId} ref={clientIdRef} value={clientId} readOnly />
            <div className="action">
              <Button
                className="eye"
                icon={
                  <EyeOutlined
                    className={typeId === 'text' ? '' : 'password'}
                  />
                }
                onClick={e => {
                  clientIdRef.current?.type === 'text'
                    ? setTypeId('password')
                    : setTypeId('text');
                }}
              />
              <Button
                className="copy"
                icon={<CopyOutlined />}
                onClick={() => handleClickCopy(clientIdRef.current?.value)}
              />
            </div>
          </div>
        </div>
        <div className="token__key">
          <Styled.Label>Client secret</Styled.Label>
          <div className="token__input">
            <input
              type={typeKey}
              ref={clientSecretRef}
              value={clientSecret}
              readOnly
            />
            <div className="action">
              <Button
                className="eye"
                onClick={() => {
                  clientSecretRef.current?.type === 'text'
                    ? setTypeKey('password')
                    : setTypeKey('text');
                }}
                icon={
                  <EyeOutlined
                    className={typeKey === 'text' ? '' : 'password'}
                  />
                }
              />
              <Button
                className="copy"
                icon={<CopyOutlined />}
                onClick={() => handleClickCopy(clientSecretRef.current?.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </Styled.AccessToken>
  );
};

export default AccessToken;
