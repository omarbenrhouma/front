import React, { useState } from 'react';
import '../assets/css/Menu.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Services/services';

const Menu = ({R}) => {
  const [isOppenned, setIsOppenned] = useState(false);
  const dispatch = useDispatch();
  const handleOpenClick = (event) => {
    setIsOppenned(true);
    event.stopPropagation();
  };

  const handleCloseClick = (event) => {
    setIsOppenned(false);
    event.stopPropagation();
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.clear();
    dispatch(logout());
    navigate('/Login');
  };

  return (
    <div className={`open ${isOppenned ? 'oppenned' : ''}`} onClick={handleOpenClick}>
      <span className="cls"></span>
      <span>
        <ul className="sub-menu">
          <li>
            <Link to="/" style={{ marginRight: 50 }}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/listMission">LIST DES MISSIONS</Link>
          </li>
          <li>
            <Link to="/Profile" style={{ marginRight: 35 }}>
              PROFILE
            </Link>
          </li>
          <li>
            <p className="logout" onClick={handleSubmit} style={{ marginRight: 33 }}>
              LOGOUT
            </p>
          </li>
        </ul>
      </span>
      <span className="cls" onClick={handleCloseClick}></span>
    </div>
  );
};

export default Menu;
