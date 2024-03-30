import React from 'react';
import { DeleteOutlined} from '@ant-design/icons'
import { Modal} from 'antd';
import { useDispatch } from 'react-redux';
import {  deleteproject } from '../Services/services';

const DeleteProject = ({record,idmission}) => {
const dispatch = useDispatch();
const handleDelete =() =>{
    Modal.confirm({
      title:"Are you sure you want to delete this project "+record.name+"?",
      okText:"Yes",
      okType:"dang",
      onOk: ()=>{ dispatch(deleteproject(record._id,idmission));}
        });
      }
  return (
    <DeleteOutlined  onClick=  {()=>
        handleDelete(record)} style={{ color:"red"}}/>
  );
};
export default DeleteProject;