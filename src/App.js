import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterForm from './containers/RegisterForm';
import LoginForm from './containers/Login';
import Home from './containers/Home';
import ProtectedRoute from './Middelware/ProtectedRoute';
import Profile from './containers/Profile';
import Mission from './containers/Mission';
import Project from './containers/Project';
import MissionList from './containers/MissionList';
import LTable from './containers/Table';
import Projectlist from './containers/Projectlist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute ><Home /></ProtectedRoute>} />
        <Route path='/Login' element={<LoginForm />} />
        <Route path='/Profile' element={<ProtectedRoute ><Profile /></ProtectedRoute>} />
        <Route path='/Mission' element={<ProtectedRoute ><Mission /></ProtectedRoute>} />
        <Route path='/Register' element={<RegisterForm />} />
        <Route path='/Project' element={<ProtectedRoute ><Project /></ProtectedRoute>} />
        <Route path='/ListMission' element={<ProtectedRoute ><MissionList /></ProtectedRoute>} />
        <Route path='/ListProject/:id' element={<ProtectedRoute ><Projectlist /></ProtectedRoute>} />
        <Route path='/Table/:filename' element={<ProtectedRoute ><LTable /></ProtectedRoute>} />
      </Routes>
    </Router>);
}
export default App;
