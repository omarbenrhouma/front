import React from 'react';
import { deleteData} from '../Services/Service';
import { DeleteOutlined} from '@ant-design/icons'
import { Modal} from 'antd';
import { useDispatch } from 'react-redux';


const Delete = ({record}) => {
const dispatch = useDispatch();

const handleDelete =() =>{
    Modal.confirm({
      title:"surreee ??",
      okText:"Yes",
      okType:"dang",
      onOk: ()=>{ dispatch(deleteData(record.id));}
        });
      }
  return (
    <DeleteOutlined    onClick=  {()=>
        handleDelete(record)} style={{ color:"red"}} data-testid="delete-button" />
  );
};
export default Delete;