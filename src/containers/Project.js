import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Upload, DatePicker } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import '../assets/css/Mission.css'
import Loading from '../components/Loading';
import Step from '../components/Steps';
import { useNavigate } from 'react-router-dom';
import { project } from '../Services/services';
import Erreur from '../components/Erreur';
import Menu from '../components/Menu';
import { ToastContainer, toast } from 'react-toastify';

const { Dragger } = Upload;
const { RangePicker } = DatePicker;

function Project() {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();

  const mission = useSelector((state) => state.newmission);
  const newproject = useSelector((state) => state.newproject);
  const [dates, setDates] = useState(["", ""]);

  const dispatch = useDispatch();
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
  const handleDatesChange = (value) => {
    setDates(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    const idmission = mission._id;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('debut', dates[0]);
    formData.append('fin', dates[1]);
    formData.append('details', details);
    formData.append('file', fileList[0].originFileObj);
    formData.append('idmission', idmission);
    dispatch(project(formData))}
  };
  useEffect(() => {
    if (newproject) {
      navigate('/ListMission')
    }
    if (!mission) { navigate('/Mission'); }
  }, [newproject, navigate, mission])

  return (
    <div className='missionbody'>
      <Step curentpage={1}></Step>
      <ToastContainer theme='black' position='top-center' />
      <Menu></Menu>
      <div className="containerti">
        <div className="center-text title-with-bg center-text margin-0 block"><span className="small-title">Project
        </span><span className="big-title">CREATE
          </span></div>
        <form onSubmit={handleSubmit}>
          <p className='login-text'>name</p>
          <div className="input-group">
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <p className='login-text'>Delais</p>
          <RangePicker className='date' onChange={handleDatesChange} />
          <p className='login-text'>details</p>
          <div className="input-group">
            <input placeholder="Details" value={details} onChange={e => setDetails(e.target.value)} />
          </div>
          <div>
            <p className='login-text'>file</p>
            <Dragger name="file" fileList={fileList} onChange={handleUpload} multiple={false} >
              <p className="ant-upload-drag-icon">
                <InboxOutlined style={{ color: 'white' }} />
              </p>
              <p className="ant-upload-text" style={{ color: 'white' }}>Click or drag file to this area to upload</p>
            </Dragger>      </div>
          <div className="input-group">
            <button type="submit" className='btn' href="/"> <Loading name={"Create Project"}></Loading> </button>
          </div>
        </form>
      </div>
      <Erreur></Erreur>
    </div>
  );
}

export default Project;
