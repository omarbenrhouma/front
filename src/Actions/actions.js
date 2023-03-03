import { FETCH_DATA_START, FETCH_DATA_SUCCESS, DATA_ERROR,UPDATE_DATA_SUCCESS,DELETE_DATA_SUCCESS,CREATE_SUCCESS,DATA_SUCCESS,DELETTA_SUCCES} from '../Types/types';
export const getallData = (data) => ({
  type: DATA_SUCCESS,
  payload: data,
});
export const fetchDataStart = () => ({
  type: FETCH_DATA_START,
});
export const deletesuccess = (data) => ({
  type: DELETE_DATA_SUCCESS,
  payload: data,
});
export const deleteallsuccess = (data) => ({
  type: DELETTA_SUCCES,
  payload: data,
});
export const createSucess = (data) => ({
  type: CREATE_SUCCESS,
  payload: data,
});
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
export const updateSuccess= (data) => ({
  type: UPDATE_DATA_SUCCESS,
  payload: data,
});
export const DataError = (error) => ({
  type: DATA_ERROR,
  payload: error,
});
