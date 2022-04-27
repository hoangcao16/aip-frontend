import React, { useState } from 'react';
import CustomTabs from 'app/components/Tabs/CustomTabs';
import IntegrationGuide from '../IntegrationGuide';
import { Container } from './styled';

const tabDocumentation = [
  { tab: 'API References', component: 'API References' },
  { tab: 'API + SDK Android', component: 'API + SDK Android' },
  { tab: 'API + SDK iOS', component: 'API + SDK iOS' },
  { tab: 'API + SDK Web', component: 'API + SDK Web' },
  { tab: 'Integration Guide', component: <IntegrationGuide /> },
];

const DocumentationPage = () => {
  const [keyTabs, setKeyTabs] = useState('Integration Guide');
  return (
    <Container>
      <div className="documentation">
        <CustomTabs
          dataTabs={tabDocumentation}
          keyTabs={keyTabs}
          onTabClick={(key: string) => setKeyTabs(key)}
        />
      </div>
    </Container>
  );
};

export default DocumentationPage;
