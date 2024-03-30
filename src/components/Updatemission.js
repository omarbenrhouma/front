import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons'
import { Modal, Input ,DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import { updateData } from '../Services/services';
import jwt_decode from "jwt-decode";
import moment from 'moment/moment';
const { RangePicker } = DatePicker;

const Updatemission = ({ record }) => {
  const dispatch = useDispatch();
  const monToken = localStorage.getItem('token');
  var decoded = jwt_decode(monToken);
  const iduser = useState(decoded.id);
  const [isEditing, setIsEditing] = useState(false);
  const [editingrow, setEditingrow] = useState([]);
  const [dates, setDates] = useState(['','']);
  const handleDatesChange = (value) => {
    setDates(value);
  };
  const onEditrow = () => {
    setIsEditing(true);
    setEditingrow(record)
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingrow([]);
    setDates(['',''])
  };
  const nbdejour = dates && dates[1] && dates[0] ? Math.ceil((dates[1] - dates[0]) / (1000 * 60 * 60 * 24)) :editingrow.nbdejour;
  const handleSave = async (e) => {
    e.preventDefault();
    if (dates[0] === '' && dates[1] === '') {
      const updatedEditingRow = {
      ...editingrow,
      nbdejour: nbdejour
    };
    await setEditingrow('updatedEditingRow');
    dispatch(updateData(record._id, iduser[0], updatedEditingRow));
  }else{    
      const updatedEditingRow = {
      ...editingrow,
      nbdejour: nbdejour,
      debut: dates[0],
      fin: dates[1]
    };
    await setEditingrow(updatedEditingRow);
    dispatch(updateData(record._id, iduser[0], updatedEditingRow));

  }
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
        open={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={(e)=> {
          handleSave(e);
          resetEditing();

        }}
      >

        <p className='login-text'>Name</p>
        <Input
          value={editingrow?.name}
          onChange={(e) => {
            setEditingrow((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <p className='login-text'>Date</p>

        <RangePicker className='date' onChange={handleDatesChange} defaultValue={[moment(editingrow.debut),moment(editingrow.debut)]}/>

        <div className="input-grou">
          <p className='login-text'>NB jour</p>

          <input className='email' placeholder="Email" value={nbdejour} readOnly />
        </div>

        <div className="input-grous">
          <p className='tsst'>Budget</p>

          <Input className='ss' addonAfter="DT" defaultValue={100} placeholder="budget" value={editingrow?.budget} onChange={(e) => {
            setEditingrow((pre) => {
              return { ...pre, budget: e.target.value };
            });
          }} />
        </div>

        <p className='login-text'>Validateur</p>
        <Input

          value={editingrow?.validateur}
          onChange={(e) => {
            setEditingrow((pre) => {
              return { ...pre, validateur: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
};
export default Updatemission;