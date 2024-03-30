import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons'
import { Modal, Input ,DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import { updateProjet } from '../Services/services';
import moment from 'moment/moment';
const { RangePicker } = DatePicker;


const Updateprojet = ({ record, idmission }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editingrow, setEditingrow] = useState([]);
  const [dates, setDates] = useState([moment(editingrow.debut),moment(editingrow.debut)]);
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
  };
  const handleSave =  () => {
      const updatedEditingRow = {
      ...editingrow,
      debut: dates[0],
      fin: dates[1]
    };
     setEditingrow(updatedEditingRow);
    dispatch(updateProjet(record._id, idmission, updatedEditingRow));
  }
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
        onOk={() => {
          handleSave();
          resetEditing();
        }}
      >
        <div>
          <p className='login-text'>name</p>
          <Input
            value={editingrow?.name}
            onChange={(e) => {
              setEditingrow((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
        <p className='login-text'>Date</p>

        <RangePicker className='date' onChange={handleDatesChange} defaultValue={dates}/>

          <p className='login-text'>details</p>
          <Input
            value={editingrow?.details}
            onChange={(e) => {
              setEditingrow((pre) => {
                return { ...pre, details: e.target.value };
              });
            }}
          />
        </div>

      </Modal>
    </div>
  );
};
export default Updateprojet;