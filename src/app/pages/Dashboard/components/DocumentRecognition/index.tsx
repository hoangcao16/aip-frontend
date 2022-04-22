import { Radio } from 'antd';
import React, { useState } from 'react';

const DocumentRecognition = () => {
  const [type, setType] = useState('ID Card');
  return (
    <div className="document-recognition">
      <div className="remaining">
        <Radio.Group onChange={e => setType(e.target.value)} value={type}>
          <Radio value="ID Card">ID Card</Radio>
          <Radio value="Passport">Passport</Radio>
          <Radio value="Driver's License">Driver's License</Radio>
        </Radio.Group>
        <p>
          Remaining request: <span>1,932/5000</span>
        </p>
      </div>
    </div>
  );
};

export default DocumentRecognition;