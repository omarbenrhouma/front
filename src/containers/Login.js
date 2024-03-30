import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Services/services';
import Loading from '../components/Loading';
import Globe from '../components/globle';
import Erreur from '../components/Erreur';
function LoginForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = useSelector((state) => state.token);


  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
  };

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token, navigate])
  return (

    <div className='Auth'>
      <div className="container">
        <div className="center-text title-with-bg center-text margin-0 block"><span className="small-title">CYTEKIA
        </span><span className="big-title">WELCOME
          </span></div>
        <form onSubmit={handleSubmit}  >
          <div className="input-group">
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="input-group">
            <button type="submit" className='btn' href="/"> <Loading name={"login"}></Loading> </button>
          </div>
          <p className="login-register-text">Don't you have an account ? <a href="/Register"> Sign up </a>.</p>
        </form>
      </div>
      <Globe />
      <Erreur></Erreur>

    </div>
  );
};

export default LoginForm;
