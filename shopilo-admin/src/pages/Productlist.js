import React from 'react'
import { Table,Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../features/product/productSlice';
import { useEffect } from 'react';

import ProductUpdateModal from '../components/ProductUpdateModal';


const columns = [
  {
    title: 'Product Name',
    dataIndex: 'productname',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  }, {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (_) => (
      <Space size="middle">
        <ProductUpdateModal btnName="Update" />
        <ProductUpdateModal btnName="Delete" />
      </Space>
    ),
  }
];

const Productlist = () => {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(getProductData())
  })
  
  const {products} = useSelector((state)=>state.products)
  

  const data = [];
  for (let i = 0; i < products.length; i++) {
    data.push({
      key: i+1,
      productname: products[i].title,
      price: `Rs.${products[i].price}`,
      quantity: products[i].quantity,
      description: products[i].description,
    });
  }

  
  return (
    <div className="mt-4">
    <h3 className="mb-5 title">Product List</h3>
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  </div>
  )
}

export default Productlist