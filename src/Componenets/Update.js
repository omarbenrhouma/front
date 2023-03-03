import React, { useState } from 'react';

import {updateData } from '../Services/Service';
import { EditOutlined } from '@ant-design/icons'
import { Modal,Input} from 'antd';
import { useDispatch  } from 'react-redux';


const Update = ({record}) => {
    const dispatch = useDispatch();
    const [isEditing,setIsEditing]= useState(false);
    const [editingrow,setEditingrow]=useState(record);
    const onEditrow =()=>{
        setIsEditing(true);
      };
      const resetEditing = () => {
        setIsEditing(false);
        setEditingrow({});
      };

  return (
    <div>
    <EditOutlined
    onClick={() => {
      onEditrow();
    }}
  />
  <Modal
  title="Editing"
  visible={isEditing}
  okText="Save"
  onCancel={() => {
    resetEditing();
  }}
  onOk={() => {
    dispatch(updateData(editingrow.id,editingrow));
    resetEditing();
  }}

  
>

  <output>FirstName :</output>
  <Input
    
    value={editingrow?.firstName}
    onChange={(e) => {
      setEditingrow((pre) => {
        return { ...pre, firstName: e.target.value };
      });
    }}
  />
  <output>lastName :</output>
  <Input
    
    value={editingrow?.lastName}
    onChange={(e) => {
      setEditingrow((pre) => {
        return { ...pre, lastName: e.target.value };
      });
    }}
  />
  <output>email :</output>
  <Input
    
    value={editingrow?.email}
    onChange={(e) => {
      setEditingrow((pre) => {
        return { ...pre, email: e.target.value };
      });
    }}
  />
  <output>contactNumber :</output>
  <Input
    
    value={editingrow?.contactNumber}
    onChange={(e) => {
      setEditingrow((pre) => {
        return { ...pre, contactNumber: e.target.value };
      });
    }}
  />
  <output>age :</output>
  <Input
    
    value={editingrow?.age}
    onChange={(e) => {
      setEditingrow((pre) => {
        return { ...pre, age: e.target.value };
      });
    }}
  />
  <output>date de naissance :</output>
  <Input
    
    value={editingrow?.dob}
    onChange={(e) => {
      setEditingrow((pre) => {
        return { ...pre, dob: e.target.value };
      });
    }}
  />
  <output>salary :</output>
  <Input
    
    value={editingrow?.salary}
    onChange={(e) => {
      setEditingrow((pre) => {
        return { ...pre, salary: e.target.value };
      });
    }}
  />
  <output>address :</output>
  <Input
    
    value={editingrow?.address}
    onChange={(e) => {
      setEditingrow((pre) => {
        return { ...pre, address: e.target.value };
      });
    }}/></Modal>
</div>
  );
};
export default Update;