import React from 'react';
import CustomTabs from 'app/components/Tabs/CustomTabs';
import IntegrationGuide from '../IntegrationGuide';
import './style.scss';

const tabDocumentation = [
  { tab: 'API References', component: 'API References' },
  { tab: 'API + SDK Android', component: 'API + SDK Android' },
  { tab: 'API + SDK iOS', component: 'API + SDK iOS' },
  { tab: 'API + SDK Web', component: 'API + SDK Web' },
  { tab: 'Integration Guide', component: <IntegrationGuide /> },
];

const DocumentationPage = () => {
  return (
    <div className="documentation">
      <CustomTabs dataTabs={tabDocumentation} />
    </div>
  );
};

export default DocumentationPage;
