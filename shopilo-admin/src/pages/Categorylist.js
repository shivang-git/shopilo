import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCategory } from '../features/productCategory/productCategorySlice';

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
    title: 'Action',
    dataIndex: 'actions',
  },
];


const Categorylist = () => {
  const dispatch=useDispatch()


  useEffect(()=>{
    dispatch(getProductCategory())
  })
  const {productsCategories} = useSelector((state)=>state.productCategory)
  const data = [];
  for (let i = 0; i < productsCategories.length; i++) {
    data.push({
      key: i+1,
      sno: `${i}`,
      name: productsCategories[i].title,
    });
  }

  return (
    <div className="mt-4">
        <h3 className="mb-5 title">Product Categories</h3>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
  )
}

export default Categorylist