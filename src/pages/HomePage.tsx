import React from "react";
import { Button, Card, Col, Row } from "antd";
import SmallStatCard from "../components/SmallStatCard";
import RecentTickets from "../components/RecentTickets";
import QuickActions from "../components/QuickActions";
import WelcomeMessage from "../components/WelcomeMessage";


import {
  HomeOutlined,
  UserOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import "../styles/HomePage.css";

const HomePage: React.FC = () => {
  const recentTickets = [
    { id: 1, title: "Ticket 1", lastUpdated: "2023-06-01" },
    { id: 2, title: "Ticket 2", lastUpdated: "2023-06-02" },
    // Add more tickets as needed
  ];

  const ticketData = [
    { type: "Open Tickets", value: 30 },
    { type: "Closed Tickets", value: 48 },
  ];
  const config = {
    appendPadding: 10,
    data: ticketData,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {},
    interactions: [{ type: "element-active" }],
  };

  return (
    <div>
      <WelcomeMessage />
      <p>
        From here you can create new tickets, view existing tickets, and see
        statistics.
      </p>
      {/* More content goes here */}
      <div className="sm-cards-container">
        <SmallStatCard
          title="Total Tickets"
          data={123}
          icon={<HomeOutlined />}
          iconBgColor="#e6f0fa"
          iconColor="#00008b"
        />
        <SmallStatCard
          title="My Tickets"
          data={45}
          icon={<UserOutlined />}
          iconBgColor="#e5fae5"
          iconColor="#006400"
        />
        <SmallStatCard
          title="Open Tickets"
          data={30}
          icon={<FileDoneOutlined />}
          iconBgColor="#fae5e5"
          iconColor="#8b0000"
        />
        <SmallStatCard
          title="Closed Tickets"
          data={48}
          icon={<CheckCircleOutlined />}
          iconBgColor="#f0e5fa"
          iconColor="#800080"
        />
      </div>
      <Row gutter={16}>
        <Col span={16}>
          <h2>Recently Updated Tickets</h2>
          <RecentTickets tickets={recentTickets} />
        </Col>
        <Col span={8}>
          <QuickActions />
        </Col>
      </Row>
      
    </div>
  );
};

export default HomePage;
