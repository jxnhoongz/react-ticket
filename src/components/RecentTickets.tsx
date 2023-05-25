import React from 'react';
import { Table } from 'antd';

type Ticket = {
  id: number;
  title: string;
  lastUpdated: string;
};

type RecentTicketsProps = {
  tickets: Ticket[];
};

const RecentTickets: React.FC<RecentTicketsProps> = ({ tickets }) => {
  const columns = [
    {
      title: 'Ticket ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Support Agent',
      dataIndex: 'supportAgent',
      key: 'supportAgent',
    },
    {
      title: 'Last Updated',
      dataIndex: 'lastUpdated',
      key: 'lastUpdated',
    },
  ];

  return (
    <Table columns={columns} dataSource={tickets} pagination={false} />
  );
};

export default RecentTickets;

