import React from 'react';
import jwt_decode from "jwt-decode";

import { DeleteOutlined} from '@ant-design/icons'
import { Modal} from 'antd';
import { useDispatch } from 'react-redux';
import { deleteMission } from '../Services/services';

import { useState } from 'react';
const Delete = ({record}) => {
const dispatch = useDispatch();
const monToken = localStorage.getItem('token');
var decoded = jwt_decode(monToken,'Cytekia');
const iduser = useState(decoded.id);
const handleDelete =() =>{
    Modal.confirm({
      title:"Are you sure you want to delete this mission "+record.name+"?",
      okText:"yes",
      okType:"dang",
      onOk: ()=>{ dispatch(deleteMission(record._id,iduser[0]));}
        });
      }
  return (
    <DeleteOutlined  onClick=  {()=>
        handleDelete(record)} style={{ color:"red"}}/>
  );
};
export default Delete;