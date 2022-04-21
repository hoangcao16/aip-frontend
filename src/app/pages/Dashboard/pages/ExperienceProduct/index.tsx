import { Tabs } from 'antd';
import React from 'react';
import FaceMatching from '../../components/FaceMatching';
import LicenseRecognition from '../../components/LicenseRecognition';
import './style.scss';

const { TabPane } = Tabs;

const ExperienceProduct = () => {
  return (
    <div className="experience-product">
      <h2>Experience product</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="License Recognition" key="1">
          <LicenseRecognition />
        </TabPane>
        <TabPane tab="Face Matching" key="2">
          <FaceMatching />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ExperienceProduct;
