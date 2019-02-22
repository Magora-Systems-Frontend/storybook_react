import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/lib/table/style';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park'
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => console.log({selectedRowKeys, selectedRows})
};

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Selection</h3>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </section>
    );
  }
}

export default Basic;