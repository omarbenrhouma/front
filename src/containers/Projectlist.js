import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/planning.png';
import '../assets/css/list.css';
import { Card } from 'antd';
import { animated } from 'react-spring';
import { getproject } from '../Services/services';
import DeleteProject from '../components/Deleteproject';
import Menu from '../components/Menu';
import { Empty } from 'antd';
import Updateprojet from '../components/Updateprojet'
import { useNavigate, useParams } from 'react-router-dom';
import BtnProject from '../components/BtnProject';
import ChatBox from '../components/chat';

const { Meta } = Card;

const Projectlist = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const newprojects = useSelector((state) => state.newproject);

  const projects = useSelector((state) => state.project);
  const dispatch = useDispatch()
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
  useEffect(() => {
    dispatch(getproject(id))
  }, [dispatch,id,newprojects ])

  const nav = (id) => {

    navigate('/table/' + id)
  }
  if (!projects || projects.length === 0) {
    return <div className='nodata'><Menu></Menu> <h1 className='titrepage'>List of Projects</h1>
      <BtnProject idmission={id}></BtnProject>

      <div className='data'><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className='imgdata' /></div></div>;
  }
  return (
    <div className='listbody'>

      <Menu></Menu>
      <h1 className='titrepage'>List of Projects</h1>
      <BtnProject idmission={id}></BtnProject>
      <div className="card-list" style={{ width: '100%' }} >
        {projects.map((card) => (
          <animated.div key={card._id} className="card-wrapper"
          >
            <Card
              key={card.name}
              style={{ height: '100%' }}
              hoverable
              className="card"
              cover={
                <img alt={card._id} src={logo} style={{ width: 65 }}                  
                onClick={() => nav(card.filename)}
                />
                
              }
            >
              <Meta
                title={<span className='des' ><h4 style={{ color: "aqua" }}>Name : </h4> {card.name}</span>}
                description={<span className='des' ><h4 style={{ color: "aqua" }}>delais : </h4> {card.details}</span>}
                onClick={() => nav(card.filename)}
              />
              <div className="card-state" style={{ fontWeight: "bold", color: "black" }}>
                <span className='des' style={{ marginTop: 5, marginBottom: 12 }} ><h4 style={{ color: "aqua" }}>State : </h4> {stat(card.debut, card.fin)}</span>
              </div>

              <div className="card-state" style={{ fontWeight: "bold", color: "black" }}>
                <span className='des' style={{ marginTop: 1, marginBottom: 5 }} ><h4 style={{ color: "aqua" }}>nom fichier: </h4> </span>
                <span className='des' style={{ marginTop: 5, marginBottom: 12 }} >{card.filename.split("_")[1]} </span>

              </div>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Updateprojet record={card} idmission={id}></Updateprojet>
                <DeleteProject record={card} idmission={id}></DeleteProject>
              </div>
            </Card>
          </animated.div>
        ))}</div>
        <ChatBox></ChatBox>
    </div>
  );
};

export default Projectlist;
