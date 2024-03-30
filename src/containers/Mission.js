import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import '../assets/css/Mission.css';
import "../assets/css/datepicker.css";
import Menu from '../components/Menu';
import jwt_decode from "jwt-decode";
import { DatePicker, Input } from 'antd';
import { mission } from '../Services/services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Step from '../components/Steps';
const { RangePicker } = DatePicker;

function Mission() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newmission = useSelector((state) => state.newmission);

  const monToken = localStorage.getItem('token');
  var decoded = jwt_decode(monToken);

  const iduser = useState(decoded.id);

  const [name, setName] = useState("");
  const [dates, setDates] = useState(["", ""]);

  const [budget, setBudget] = useState(0);
  const [validateur, setValidateur] = useState('');

  const nbdejour = dates && dates[1] && dates[0] ? Math.ceil((dates[1] - dates[0]) / (1000 * 60 * 60 * 24)) : 0;



  const handleDatesChange = (value) => {
    setDates(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      toast.error('Please enter a name ')
    }else if (!dates[0] || !dates[1]) {
      toast.error('Please enter a date range');
    }
    else if (!validateur) {
      toast.error('Please enter a validateur')
    }else{
    await dispatch(mission(name, nbdejour, dates[0], dates[1], budget, validateur, iduser[0]));}
  };

  useEffect(() => {
    if (newmission) {
      navigate('/Project')
    }
  }, [newmission, navigate])
  return (
    <div className='missionbody'>
      <Step curentpage={0}></Step>
      <Menu></Menu>
      <ToastContainer theme='black' position='top-center' />
      <div className="containerti">
        <div className="center-text title-with-bg center-text margin-0 block"><span className="small-title">Mission
        </span><span className="big-title">CREATE
          </span></div>
        <form onSubmit={handleSubmit}  >
          <p className='login-text'>Name of mission</p>

          <div className="input-group">
            <input type="Name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <p className='login-text'>Date</p>
          <RangePicker className='date' onChange={handleDatesChange}  />

          <div className="input-grou">
            <p className='login-text'>Number of days</p>

            <input className='email'  value={nbdejour} readOnly />
          </div>

          <div className="input-grous">
            <p className='tsst'>Budget</p>

            <Input className='ss' addonAfter="DT" defaultValue={100} placeholder="budget" value={budget} onChange={e => setBudget(e.target.value)} />
          </div>
          <p className='login-text'>validator</p>
          <div className="input-group">
            <input placeholder="validator" value={validateur} onChange={e => setValidateur(e.target.value)} />
          </div>
          <div className="input-group">
            <button type="submit" className='btn' href="/"> <Loading name={"ADD"}></Loading> </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mission;
