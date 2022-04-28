import { Tabs } from 'antd';
// import Item from 'antd/lib/list/Item';
import React from 'react';
import Styled from './styled';

const { TabPane } = Tabs;

function CustomTabs(props: any) {
  const { dataTabs, onLogout, onTabClick, keyTabs } = props;

  return (
    <Styled.CustomTabs>
      <div className="custom-tabs">
        <Tabs
          tabPosition={'left'}
          defaultActiveKey={keyTabs}
          onTabClick={(key: any) => {
            if (key === 'Logout') {
              onLogout();
            }
            onTabClick(key);
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
