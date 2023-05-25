import React from "react";
import { Card } from "antd";

type SmallStatCardProps = {
  title: string;
  data: number;
  icon: React.ReactNode;
  iconColor?: string;
  iconBgColor?: string;
};

// card component for the small card in the home page
const SmallStatCard: React.FC<SmallStatCardProps> = ({
  title,
  data,
  icon,
  iconColor = "#000",
  iconBgColor = "#FFF",
}) => {
  return (
    <Card style={{ width: 200, marginTop: 16 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            fontSize: 24,
            marginRight: 16,
            color: iconColor,
            backgroundColor: iconBgColor,
            borderRadius: '50%',  // Makes the background circular
            display: 'inline-flex',  // Centers the icon in the circular background
            justifyContent: 'center', 
            alignItems: 'center',
            width: '40px',  // Width of the circular background
            height: '40px'
          }}
        >
          {icon}
        </div>
        <div>
          <div style={{ fontSize: 16, color: "rgba(0, 0, 0, 0.45)" }}>
            {title}
          </div>
          <div style={{ fontSize: 24 }}>{data}</div>
        </div>
      </div>
    </Card>
  );
};

export default SmallStatCard;
