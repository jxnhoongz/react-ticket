import React,{useState} from "react";
import { useRoutes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Titlebar from "../components/Titlebar";
import { Layout } from "antd";
import HomePage from "./HomePage";
import CreateTicketPage from "./CreateTicketPage";
import TicketsPage from "./TicketsPage";
import StatisticsPage from "./StatisticsPage";

const Dashboard: React.FC = () => {
  let element = useRoutes([
    { path: "/home", element: <HomePage /> },
    { path: "/create-ticket", element: <CreateTicketPage /> },
    { path: "/tickets", element: <TicketsPage /> },
    { path: "/statistics", element: <StatisticsPage /> },
  ]);

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Titlebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div style={{ display: "flex" }}>
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar collapsed={collapsed} />
          {element}
        </Layout>
      </div>
    </div>
  );
};

export default Dashboard;
