import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../Services/services';
import Loading from '../components/Loading';
import Globe from '../components/globle';
import '../style.css'
import '../assets/css/swal.css'
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Erreur from '../components/Erreur';

const RegisterForm = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwords, setPasswords] = useState('');
  
  const navigate = useNavigate()

  const user = useSelector((state) => state.user);



  useEffect(() => {
    if (user) {
      swal("Success!", "User has been registred !", "success");
      navigate('/login')
    }
  }, [user, navigate])

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== passwords) {
      toast.error('password do not match')
    }  else {
      dispatch(register(name, email, password));
    }

  };



  return (
    <div className='Auth'>
      <div className="container">
        <div className="center-text title-with-bg center-text margin-0 block"><span className="small-title">CYTEKIA
        </span><span className="big-title">WELCOME
          </span></div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Rewrite Password" value={passwords} onChange={e => setPasswords(e.target.value)} required />
          </div>
          <div className="input-group">
            <button type="submit" className='btn' > <Loading name={"Register"}></Loading></button><ToastContainer theme='black' position='top-center' />
          </div>
          <p className="login-register-text">Do you already have an account? <a href="/login"> Log in</a>.</p>
        </form>
      </div>
      <Erreur></Erreur>
      <Globe></Globe>
    </div>
  );
};

export default RegisterForm;