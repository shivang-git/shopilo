import React, { useEffect} from 'react'
import { Table } from 'antd';
import { getOrders } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';


const columns = [
  {
    
    title: 'S.No.',
    dataIndex: 'sno',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  }
];


const Orders = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getOrders())
  },[])

  const {orders} = useSelector((state)=>state.auth)
  console.log(orders);
  const data = [];
  for (let i = 0; i < orders.length; i++) {
    data.push({
      key: i+1,
      sno: `${i+1}`,
      name: orders[i].orderby.firstname,
      product:orders[i].products.map((prod)=>{
        return <span>prod.product.title</span>
      }),
      action:"jfkd"
    });
  }

  return (
    <div className="mt-4">
        <h3 className="mb-5 title">Order List</h3>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
  )
}

export default Orders