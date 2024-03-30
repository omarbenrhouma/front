import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/vision.png';
import '../assets/css/list.css';
import { useNavigate } from 'react-router-dom';
import { animated } from 'react-spring';
import { getmission } from '../Services/services';
import { Empty, Card } from 'antd';
import Updatemission from '../components/Updatemission';

import Delete from '../components/Delete';
import Menu from '../components/Menu';
import jwt_decode from "jwt-decode";
import BtnMission from '../components/BtnMission';
import ChatBox from '../components/chat';
const { Meta } = Card;

const MissionList = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const monToken = localStorage.getItem('token');
  var decoded = jwt_decode(monToken);
  const iduser = useState(decoded.id);

  useEffect(() => {
    dispatch(getmission(iduser[0]));
  }, [dispatch, iduser]);


  const missions = useSelector((state) => state.mission);

  const nav = (id) => {

    navigate('/ListProject/' + id)
  }
  const stat = (debut, fin) => {
    const currentDate = new Date();
    const startDate = new Date(debut);
    const endDate = new Date(fin);
    if (currentDate < startDate) {
      return 'à venir';
    } else if (currentDate >= startDate && currentDate <= endDate) {
      return 'en cours';
    } else {
      return 'fin';
    }
  };





  if (!missions || missions.length === 0) {
    return <div className='nodata'><Menu></Menu>
      <h1 className='titrepage'>List of Missions</h1>
      <BtnMission></BtnMission>
      <div className='data'><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className='imgdata' /></div></div>;
  }
  return (
    <div className='listbody'>
      <Menu></Menu>
      <h1 className='titrepage'>List of Missions</h1>
      <BtnMission></BtnMission>

      <div className="card-list" style={{ width: '100%' }} >
        {missions.map((card) => (
          <animated.div key={card._id} className="card-wrapper"
          >
            <Card
              key={card.name}
              style={{ height: '100%' }}
              hoverable
              className="card"
              cover={
                <img alt={card._id} src={logo} style={{ width: 70, height: 70 }}
                  onClick={() => nav(card._id)}
                />
              }
            >
              <Meta
                title={<span className='des' ><h4 style={{ color: "aqua" }}>Name : </h4> {card.name}</span>}
                description={<span className='des' ><h4 style={{ color: "aqua" }}>Nombre de jour : </h4> {card.nbdejour}</span>}
                onClick={() => nav(card._id)}
              />
              <div className="card-state" style={{ fontWeight: "bold", color: "black" }}>
                <span className='des' style={{ marginTop: 5, marginBottom: 12 }} ><h4 style={{ color: "aqua" }}>State : </h4> {stat(card.debut, card.fin)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                <Updatemission record={card}></Updatemission>
                <Delete record={card}></Delete>
              </div>
            </Card>
          </animated.div>
        ))}</div>
        <ChatBox></ChatBox>

    </div>
  );
};

export default MissionList;
