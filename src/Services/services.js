import  * as service from  '../Actions/actions';
import axios from 'axios';

export const register = (name, email, password ) => async (dispatch) => {
    dispatch(service.Request());
    try {
      const response = await axios.post('/users/', {name, email, password});
      const user = response.data;
      dispatch(service.registerSuccess(user));
    } catch (error) {
      dispatch(service.Failure(error.response.data.error));
    }
  };
  
  export const  login = (email, password ) => async (dispatch) => {
    dispatch(service.Request());
    try {
      const response = await axios.post('/users/login', { email, password});
          const data = response.data;
          localStorage.setItem('token',data.token);
          dispatch(service.loginSuccess(data));
        
      }catch (error) {
      dispatch(service.Failure(error.response.data.error));
    }
  };
  
  export const edit = (id,name, email, password ) => async (dispatch) => {
    dispatch(service.Request());
    try {
      
      const response =await axios.put(`/users/${id}`, {name, email, password});
      const edit = response.data;
      console.log(edit);
      dispatch(service.editSuccess(edit));
    } catch (error) {
      dispatch(service.Failure(error.response.data.error));
    }
  };


  export const mission = (name, nbdejour,debut,fin  ,budget,validateur,iduser) => async (dispatch) => {
    dispatch(service.Request());
    try {
      const response =await axios.post(`/missions/`, {name, nbdejour, debut,fin,budget,validateur,iduser});
      const mission = response.data;
      dispatch(service.missionSuccess(mission));
    } catch (error) {
      dispatch(service.Failure(error.response.data.error));
    }
  };
  export const getmission = (iduser) => async (dispatch) => {
    dispatch(service.Request());
    try {
      const response =await axios.get(`/users/${iduser}`);
      const mission = response.data;
      dispatch(service.getmissionSuccess(mission.mission));
    } catch (error) {
      dispatch(service.Failure(error.response.data.error));
    }
  };
  export const deleteMission = (id,iduser) => async (dispatch) => {
    dispatch(service.Request());
    try {
      await axios.delete(`/missions/${iduser}/${id}`)
   const response =await axios.get(`/users/${iduser}`);
   const mission = response.data;
   dispatch(service.getmissionSuccess(mission.mission));
    } catch (error) {
      dispatch(service.Failure(error.response.data.error));
    }
        
  };
  export const updateData = (id,iduser,newData) => async (dispatch) => {
    dispatch(service.Request());
    try {
      await axios.put(`/missions/${id}`, newData) 
       const response =await axios.get(`/users/${iduser}`);
       const mission = response.data;
       dispatch(service.updateSuccess(mission.mission));
    } catch (error) {
      dispatch(service.Failure(error.response.data.error));
    }
        
  };

  export const getproject = (id) => async (dispatch) => {
    dispatch(service.Request());
    try {
      const response =await axios.get(`/missions/${id}`);
      const project = response.data;
      dispatch(service.getprojectSuccess(project.Projects));
    } catch (error) {
      dispatch(service.Failure(error.response.data.error));
    }
  };
  export const updateProjet = (id,idmission,newData) => async (dispatch) => {
    dispatch(service.Request());
    try {
      await axios.put(`/projects/${id}`, newData) 
      const response =await axios.get(`/missions/${idmission}`);
      const project = response.data;
       dispatch(service.updateProjectSuccess(project.Projects));
    } catch (error) {
      dispatch(service.Failure(error.response.data.error));
    }
        
  };

  export const getdata = (filename) => async (dispatch) => {
    dispatch(service.Request());
    try {
      const response =await axios.get(`http://127.0.0.1:8000/table/${filename}`);
      const data = response.data;
       dispatch(service.getdataSuccess(data));
    } catch (error) {
      dispatch(service.Failure(error.response.data.error));
    }
        
  };
  export const project = (formaData) => async (dispatch) => {
    dispatch(service.Request());
    try {
       const response = await axios.post(`/projects/`, formaData);
       const project = response.data;
       dispatch(service.projectSuccess(project));
    } catch (error) {
      dispatch(service.Failure(error.response.data.error));
    }
        
  };

  export const deleteproject = (id,idmission) => async (dispatch) => {
    dispatch(service.Request());
    try {
    await axios.delete(`/projects/${idmission}/${id}`)
   const response =await axios.get(`/missions/${idmission}`);
   const project = response.data;
   dispatch(service.getprojectSuccess(project.Projects));
  } catch (error) {
      dispatch(service.Failure(error.response.data.error));
    }
        
  };
  export const logout = () => async (dispatch) => {
    dispatch(service.Request());
    try {
   dispatch(service.logout());
  } catch (error) {
      dispatch(service.Failure(error.response.data.error));
    }
        
  };