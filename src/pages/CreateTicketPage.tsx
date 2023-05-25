import React from "react";
import { Form, Input, Select, Button, Card } from "antd";

const { Option } = Select;

const CreateTicketPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    // Handle form submission logic here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card title="Create New Ticket" style={{ width: '50%' }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input the description!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please select a category!" }]}
          >
            <Select placeholder="Select a category">
              <Option value="bug">Bug</Option>
              <Option value="feature">Feature Request</Option>
              <Option value="support">Support Question</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Priority"
            name="priority"
            rules={[{ required: true, message: "Please select a priority!" }]}
          >
            <Select placeholder="Select a priority">
              <Option value="low">Low</Option>
              <Option value="medium">Medium</Option>
              <Option value="high">High</Option>
            </Select>
          </Form.Item>

          {/* Add more fields as needed */}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CreateTicketPage;
