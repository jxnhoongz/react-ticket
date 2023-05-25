import { Button, Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";

const QuickActions: React.FC = () => {
  const navigate = useNavigate();

  const goToCreateTicket = () => {
    navigate("/create-ticket");
  };

  const goToAssignedTickets = () => {
    navigate("/tickets");
  };

  return (
    <div>
      <Card title="Quick Actions" bordered={false}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          block
          style={{ marginBottom: "10px" }}
          onClick={goToCreateTicket}
        >
          Create New Ticket
        </Button>
        <Button
          type="default"
          icon={<UnorderedListOutlined />}
          size="large"
          block
          onClick={goToAssignedTickets}
        >
          View Assigned Tickets
        </Button>
      </Card>
    </div>
  );
};

export default QuickActions;
