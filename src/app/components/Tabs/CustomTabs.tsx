import { Tabs } from 'antd';
import React from 'react';
import Styled from './styled';
// import './style.scss';

const { TabPane } = Tabs;

function CustomTabs(props: any) {
  const { dataTabs } = props;
  return (
    <Styled.CustomTabs>
      <div className="custom-tabs">
        <Tabs tabPosition={'left'} defaultActiveKey="Integration Guide">
          {dataTabs.map((item: any) => (
            <TabPane
              tab={
                <span>
                  {item.icon}
                  {item.tab}
                </span>
              }
              key={item.tab}
            >
              {item.component}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </Styled.CustomTabs>
  );
}

export default CustomTabs;
