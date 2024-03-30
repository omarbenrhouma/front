import React, { useState, useEffect } from 'react';
import { Table, Breadcrumb, Layout, Space, Input} from 'antd';
import '../assets/css/table.css';
import columns from './columns';
import { useParams } from 'react-router-dom';
import Dashboard from './dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { getdata } from '../Services/services';
import Menu from '../components/Menu';

const { Content } = Layout;

const LTable = () => {
  const { filename } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getdata(filename));
  }, [dispatch, filename]);

  const Search = (dat) => {
    if (!dat) return [];
    return dat.filter((item) => item['Sous-catégorie de contrôle de sécurité'].toLowerCase().includes(query)||item['Catégorie de contrôle de sécurité'].toLowerCase().includes(query)||item['ID-ISO'].toLowerCase().includes(query)||item['ID-NIST'].toLowerCase().includes(query)||item['clause'].toLowerCase().includes(query));
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
          <Space direction="vertical" style={{ width: '100%', marginBottom: 50 }}></Space>
          <div>
            <Input type="text" placeholder="Recherche" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
            <Table columns={columns} dataSource={Search(data)} onChange={onChange} title={() => 'Table'} />
          </div>
          <Dashboard></Dashboard>
        </Content>
      </Layout>
      <Menu ></Menu>

    </Layout>
  );
};

export default LTable;
