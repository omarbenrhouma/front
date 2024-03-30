import React, { useState } from 'react';
import Erreur from './Erreur';
import { Modal, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { Upload,DatePicker } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { project } from '../Services/services';
import { ToastContainer, toast } from 'react-toastify';

const { Dragger } = Upload;
const { RangePicker } = DatePicker;

const BtnProject = ({ idmission }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [dates, setDates] = useState(["", ""]);
    const [details, setDetails] = useState('');
    const [fileList, setFileList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    const handleUpload = (info) => {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-1);

        setFileList(fileList);
        const { status } = info.file;

        if (status === 'error') {
            info.file.status = 'done';
            info.file.response = 'siii';
        }
    };
    const onEditrow = () => {
        setIsEditing(true);
    };
    const handleDatesChange = (value) => {
        setDates(value);
    };
    const resetEditing = () => {
        setIsEditing(false);
        setName('')
        setDetails('')
        setDates(["",""])
        setFileList([])


    };
    return (
        <div>
            <div className="buttone">
                <button className='btn' onClick={onEditrow}> Create New Project</button>
                <ToastContainer theme='black' position='top-center' />
            </div>
            <Modal
                title="Create Project"
                open={isEditing}
                okText="Save"
                onCancel={() => {
                    resetEditing();
                }}
                onOk={() => {
                    if (!name) {
                        toast.error('Please enter a name ')
                      }else if (!dates[0] || !dates[1]) {
                        toast.error('Please enter a date range');
                      }
                      else if (!details) {
                        toast.error('Please enter a details')
                      }
                      else if (!fileList[0]) {
                        toast.error('Please enter a file')}
                      else{
                    const formData = new FormData();
                    formData.append('name', name);
                    formData.append('debut', dates[0]);
                    formData.append('fin', dates[1]);
                    formData.append('details', details);
                    formData.append('file', fileList[0].originFileObj);
                    formData.append('idmission', idmission);
                    dispatch(project(formData))             ;       
                    resetEditing();}
                }}
            >

                <p className='login-text'>Name</p>
                <div className="input-group">

                    <Input
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    /></div>
                <p className='login-text'>Delais</p>
                <RangePicker className='date' onChange={handleDatesChange} />
                <p className='login-text'>Details</p>
                <div className="input-group">
                    <Input
                        placeholder="Details"
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                    />      </div>

                <div>
                    <p className='login-text'>file</p>
                    <Dragger name="file" fileList={fileList} onChange={handleUpload} multiple={false} >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined style={{ color: 'white' }} />
                        </p>
                        <p className="ant-upload-text" style={{ color: 'white' }}>Click or drag file to this area to upload</p>
                    </Dragger>      </div>
            </Modal>
            <Erreur></Erreur>
        </div>
    );
};
export default BtnProject;