import React from 'react'
import { Table } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
const Blogcatlist = () => {
  return (
    <div className="mt-4">
        <h3 className="mb-5 title">Blog Categories</h3>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
  )
}

export default Blogcatlist