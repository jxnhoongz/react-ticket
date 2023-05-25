import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UnorderedListOutlined, PlusSquareOutlined, BarChartOutlined } from '@ant-design/icons';

const Sidebar: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const { Sider } = Layout;
  const location = useLocation();
  return (
      <Sider collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
          <Menu.Item key="/home" icon={<HomeOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="/create-ticket" icon={<PlusSquareOutlined />}>
            <Link to="/create-ticket">Create Ticket</Link>
          </Menu.Item>
          <Menu.Item key="/tickets" icon={<UnorderedListOutlined />}>
            <Link to="/tickets">Tickets List</Link>
          </Menu.Item>
          <Menu.Item key="/statistics" icon={<BarChartOutlined />}>
            <Link to="/statistics">Statistics</Link>
          </Menu.Item>
        </Menu>
      </Sider>
        
      );
};

export default Sidebar;
