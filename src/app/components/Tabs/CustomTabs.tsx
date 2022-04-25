import { Tabs } from 'antd';
import Item from 'antd/lib/list/Item';
import React from 'react';
import Styled from './styled';

const { TabPane } = Tabs;

function CustomTabs(props: any) {
  const { dataTabs, onLogout } = props;

  return (
    <Styled.CustomTabs>
      <div className="custom-tabs">
        <Tabs
          tabPosition={'left'}
          defaultActiveKey="Integration Guide"
          onTabClick={(key: any) => {
            if (key === 'Logout') {
              onLogout();
            }
          }}
        >
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
