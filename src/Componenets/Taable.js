import React, { useState,useEffect } from 'react';
import { useDispatch,  } from 'react-redux';
import { fetchData } from '../Services/Service';
import { Table ,Breadcrumb, Layout ,Space , Input} from 'antd';
import Sidebar from './Sidebar';
import Buttons from './Buttons';
import Inserting from './Inserting';
import columns from './columns';
import useData from '../Selector/Usedata'

const { Content } = Layout;


const Taable = () => {
  const data = useData();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const[query,setQuery] = useState("");
  const Search = (dat) =>{
    return dat.filter((item) => item.firstName.toLowerCase().includes(query) || item.address.toLowerCase().includes(query)|| item.age.toString().includes(query) || item.lastName.toLowerCase().includes(query));
  }
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  return (
    <Layout
    style={{
      minHeight: '100vh',
    }}
  >
    <Sidebar></Sidebar>
    <Layout className="site-layout">
      <Content
        style={{
          margin: '0 16px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        > 
        </Breadcrumb>
        <Space direction="vertical" style={{ width: '100%' }}>
   </Space>
<Buttons></Buttons>  
    <Inserting/>
        <div>          
      <Input type='text' placeholder='Recherche' onChange={(e) => setQuery(e.target.value)}></Input>
      <Table columns={columns} dataSource={Search(data)} onChange={onChange}     title={() => 'Table'}/></div>
      </Content>
    </Layout>
  </Layout>
  );
};
export default Taable;