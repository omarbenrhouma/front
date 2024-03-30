import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { edit } from '../Services/services';
import Loading from '../components/Loading';
import '../assets/css/Profile.css';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import jwt_decode from "jwt-decode";
import ChatBox from '../components/chat';

function Profile() {

  const dispatch = useDispatch();
  const monToken = localStorage.getItem('token');
  var decoded = jwt_decode(monToken);

  const [email, setEmail] = useState(decoded.email);
  const [Name, setName] = useState(decoded.name);
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(edit(decoded.id, Name, email, password));
  };


  return (
    <div className='Profilebody'>
      <Menu></Menu>
      <div className="contaier">
        <div className="center-text title-with-bg center-text margin-0 block"><span className="small-title">PROFILE
        </span><span className="big-title">CHANGE
          </span></div>
        <form onSubmit={handleSubmit}  >
          <div className="input-group">
            <input type="Name" placeholder="Name" value={Name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="input-group">
            <button type="submit" className='btn' href="/"> <Loading name={"Edit"}></Loading> </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
      <ChatBox></ChatBox>

    </div>
  );
};

export default Profile;
