import React,{useState} from 'react';
import { Layout , Menu} from 'antd';
import { PieChartOutlined} from '@ant-design/icons'

const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Table', '1', <PieChartOutlined />),

];


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} data-testid = "sidebar">
    <div
      style={{
        height: 32,
        margin: 16,
        background: 'rgba(255, 255, 255, 0.2)',
      }} 
    />
    
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
  </Sider>
  );
};
export default Sidebar;