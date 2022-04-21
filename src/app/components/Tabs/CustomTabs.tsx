import { AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react';
import './style.scss';

const { TabPane } = Tabs;

function CustomTabs(props: any) {
  const { dataTabs } = props;
  return (
    <div className="custom-tabs">
      <Tabs tabPosition={'left'} defaultActiveKey="Integration Guide">
        {dataTabs.map((item: any) => (
          <TabPane
            tab={
              <span>
                <AppleOutlined />
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
  );
}

export default CustomTabs;
