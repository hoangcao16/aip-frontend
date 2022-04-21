import { Alert, Button, Input, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import './style.scss';

const TokenManagement = () => {
  const tokenId = useRef<HTMLInputElement>(null);
  const tokenKey = useRef<HTMLInputElement>(null);
  const [typeId, setTypeId] = useState('text');
  const [typeKey, setTypeKey] = useState('text');

  const data = {
    iss: 'https://my-domain.auth0.com/',
    sub: 'auth0|123456',
    aud: ['https://example.com/health-api', 'https://my-domain.auth0.com/userinfo'],
    azp: 'my_client_id',
    exp: 1311281970,
    iat: 1311280970,
    scope: 'openid profile read:patients read:admin',
  };

  const handleClickCopy = (value: any) => {
    navigator.clipboard.writeText(value);
    message.info('Copied to clipboard');
  };

  return (
    <div className="token">
      <h2>Token information</h2>
      <Alert
        message="Token ID, Token Key and Access Token is used to call API. Please don’t share key for securities policy."
        type="warning"
        showIcon
      />
      <div className="token__id">
        <h3>1. Token ID</h3>
        <div className="token__input">
          <input
            type={typeId}
            ref={tokenId}
            value="eyJraWQiOiJzMTZ0cVNtODhwREo4VGZCXzdrSEtQUkFQRjg1d1VEVGCXzdrSEtQUkFQRjg1d1VEVG"
            readOnly
          />
          <div className="action">
            <Button
              className="eye"
              icon="eye"
              onClick={e => {
                tokenId.current?.type === 'text' ? setTypeId('password') : setTypeId('text');
                console.log(e.target);
              }}
            />
            <Button className="copy" icon="copy" onClick={() => handleClickCopy(tokenId.current?.value)} />
          </div>
        </div>
      </div>
      <div className="token__key">
        <h3>2. Token key</h3>
        <div className="token__input">
          <input
            type={typeKey}
            ref={tokenKey}
            value="vCwWSQiaYhMHN2IbnEijtDWJ-BpiHbPohI6tOVrkrUrL2MqlF05K84"
            readOnly
          />
          <div className="action">
            <Button
              className="eye"
              onClick={() => {
                tokenKey.current?.type === 'text' ? setTypeKey('password') : setTypeKey('text');
              }}
              icon="eye"
            />
            <Button className="copy" icon="copy" onClick={() => handleClickCopy(tokenKey.current?.value)} />
          </div>
        </div>
      </div>
      <div className="token__access">
        <h3>3. Access token</h3>
        <div className="access-data">
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <div className="action">
            <Button className="eye" icon="eye" />
            <Button className="copy" icon="copy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenManagement;
