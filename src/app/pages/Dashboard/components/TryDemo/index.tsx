import { Tabs } from 'antd';
import React from 'react';
import DocumentRecognition from '../DocumentRecognition';
import FaceMatching from '../FaceMatching';
import Styled from './styled';

const { TabPane } = Tabs;

const TryDemo = () => {
  return (
    <Styled.TryDemo>
      <h2>Try demo</h2>
      <Tabs defaultActiveKey="1" className="tabs">
        <TabPane tab="Document Recognition" key="1">
          <DocumentRecognition />
        </TabPane>
        <TabPane tab="Face Matching" key="2">
          <FaceMatching />
        </TabPane>
      </Tabs>
    </Styled.TryDemo>
  );
};

export default TryDemo;
