import axios  from 'axios';
import { fetchDataStart,fetchDataSuccess,DataError,updateSuccess,deleteallsuccess,deletesuccess,createSucess,getallData } from '../Actions/actions'; 
export const fetchData = () => async (dispatch) => {
    dispatch(fetchDataStart());
    try {
        axios.get ('/index')
       .then(({ data }) => {
        dispatch(fetchDataSuccess(data));
      })
    } catch (error) {
      dispatch(DataError(error.message));
    }
  };
  export const updateData = (id, newData) => async (dispatch) => {
    dispatch(fetchDataStart());
    try {
      await axios.put(`/edit/${id}`, newData) 
       .then(({ data }) => {
        dispatch(updateSuccess(data));
      })
    } catch (error) {
      dispatch(DataError(error.message));
    }
        
  };
  export const deleteData = (id) => async (dispatch) => {
    dispatch(fetchDataStart());
    try {
      await axios.delete(`/delete/${id}`)
   .then(({ data }) => {
    dispatch(deletesuccess(data));
  })
    } catch (error) {
      dispatch(DataError(error.message));
    }
        
  };
  export const Ajoute = (newData) => async (dispatch) => {
    dispatch(fetchDataStart());
    try {
        await axios.post (`/create`, newData)
           .then(({ data }) => {
        dispatch(createSucess(data));
      })
    } catch (error) {
      dispatch(DataError(error.message));
    }
        
  };
  export const deleteallData = () => async (dispatch) => {
    dispatch(fetchDataStart());
    try {
       await axios.delete(`/deleteall`)
        .then(({ data }) => {
          dispatch(deleteallsuccess(data));
        })
    } catch (error) {
      dispatch(DataError(error.message));
    }
        
  };
  export const addallData = () => async (dispatch) => {
    dispatch(fetchDataStart());
    try {
     await axios.get('/get');
      axios.get('/index').then(({ data }) => {
      dispatch(getallData(data));})
  
      } catch (error) {
      dispatch(DataError(error.message));
    }
  
        
  };