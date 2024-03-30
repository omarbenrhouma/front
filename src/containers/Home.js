import React from 'react';
import '../style.css'
import { useNavigate } from 'react-router-dom';
import ChatBox from '../components/chat';
import '../assets/css/Home.css';
import { logout } from '../Services/services';
import { useDispatch } from 'react-redux';
import Footer from '../components/Footer';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.clear();
    dispatch(logout())
    navigate('/Login');
  };

  return (
    <div className='homebody'>
      <div className="all">
        <div className="lefter" onClick={() => { navigate('/Mission') }}>
          <div className="textt" href='/Mission'>Create New Mission</div>
        </div>
        <div className="left" onClick={() => { navigate('/ListMission') }}>
          <div className="text" style={{ marginLeft: 44 }} >List Of Missions</div>
        </div>
        <div className="center" href='https://www.cytekia.com/'>
          <div className="text" >CYTEKIA</div>
        </div>
        <div className="right" onClick={() => { navigate('/Profile') }}>
          <div className="text" onClick={() => { navigate('/Profile') }}>My Profile</div>
        </div>
        <div className="righter" onClick={() => { handleSubmit() }}>
          <div className="text" > Logout</div>
        </div>
      </div>
      <Footer></Footer>
      <ChatBox></ChatBox>

    </div>
  );
};

export default Home;
