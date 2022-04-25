import { Button } from 'antd';
import React from 'react';
import CustomUpload from 'app/components/CustomUpload';

const FaceMatching = () => {
  return (
    <div className="face-matching">
      <div className="remaining">
        <p>
          Remaining request: <span>1,932/5000</span>
        </p>
      </div>
      <div className="execute">
        <div className="execute__image">
          <CustomUpload />
          <CustomUpload />
        </div>
        <div className="execute__button">
          <Button disabled>Execute</Button>
        </div>
      </div>
    </div>
  );
};

export default FaceMatching;
