import React, { useEffect } from 'react'
import { Skeleton, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerData } from '../features/customers/customerSlice';

const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstname',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Mobile No.',
      dataIndex: 'mobile',
    },
];




const Customers = () => {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(getCustomerData())
  },[])
  
  const {customers} = useSelector((state)=>state.customers)


  const data = [];
  for (let i = 0; i < customers.length; i++) {
    data.push({
      key: i+1,
      firstname: customers[i].firstname,
      lastname: customers[i].lastname,
      email: customers[i].email,
      mobile: customers[i].mobile,
    });
  }


  return (
    <div className="mt-4">
    <h3 className="mb-5 title">Customers</h3>
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  </div>
  )
}

export default Customers