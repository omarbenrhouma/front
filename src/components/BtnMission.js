import React, { useState } from 'react';
import Erreur from './Erreur';
import { Modal, Input } from 'antd';
import { useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import { DatePicker } from 'antd';
import { mission } from '../Services/services';

const { RangePicker } = DatePicker;

const BtnMission = () => {
    const dispatch = useDispatch();

    const monToken = localStorage.getItem('token');
    var decoded = jwt_decode(monToken);

    const iduser = useState(decoded.id);
    const [name, setName] = useState("");
    const [dates, setDates] = useState(["", ""]);

    const [budget, setBudget] = useState(0);
    const [validateur, setValidateur] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    
    const nbdejour = dates && dates[1] && dates[0] ? Math.ceil((dates[1] - dates[0]) / (1000 * 60 * 60 * 24)) : 0;

    const handleDatesChange = (value) => {
        setDates(value);
    };
    const onEditrow = () => {
        setIsEditing(true);
    };
    const resetEditing = () => {
        setIsEditing(false);
        setName('')
        setBudget('')
        setDates(["", ""])
        setValidateur('')

    };

    return (
        <div>
            <div className="buttone">
            <ToastContainer theme='black' position='top-center' />
                <button className='btn' onClick={onEditrow}> Create New Mission</button>
            </div>
            <Modal
                title="Create Mission"
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
                  else if (!validateur) {
                    toast.error('Please enter a validateur')
                  }else{
                    dispatch(mission(name, nbdejour, dates[0], dates[1], budget, validateur, iduser[0]));
                    resetEditing();}
                }}
            >

                <p className='login-text'>Name</p>
                <Input
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <p className='login-text'>Date</p>

                <RangePicker className='date' onChange={handleDatesChange} />

                <div className="input-grou">
                    <p className='login-text'>NB jour</p>

                    <input className='email' placeholder="Email" value={nbdejour} readOnly />
                </div>

                <div className="input-grous">
                    <p className='tsst'>Budget</p>

                    <Input className='ss' addonAfter="DT" defaultValue={100} placeholder="budget" value={budget} onChange={e => setBudget(e.target.value)} />
                </div>

                <p className='login-text'>Validateur</p>
                <Input
                    placeholder="Validateur"
                    value={validateur}
                    onChange={e => setValidateur(e.target.value)}
                />
            </Modal>
            <Erreur></Erreur>
        </div>
    );
};
export default BtnMission;