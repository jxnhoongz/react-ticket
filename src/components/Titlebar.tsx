import React from 'react';
import { Layout, Typography, Button, Badge, Menu } from 'antd';
import { BellOutlined, MenuOutlined } from '@ant-design/icons';
import "../styles/TitleBar.css"

const { Header } = Layout;
const { Title } = Typography;

const Titlebar: React.FC <{ collapsed: boolean; setCollapsed: (collapsed: boolean) => void }> = ({ collapsed, setCollapsed }) => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#001529' }}>
      <Button type="text" icon={<MenuOutlined />} style={{ color: 'white' }} onClick={() => setCollapsed(!collapsed)}
       className={collapsed ? "menu-button rotated" : "menu-button"} />
      <Title style={{ flex: 1, color: 'white', textAlign: 'center' }}>Ticket System</Title>
      <Badge count={5}>
        <BellOutlined style={{ color: 'white',fontSize:24 }} />
      </Badge>
    </Header>
  );
};

export default Titlebar;
