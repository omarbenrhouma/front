import  * as service from  '../Types/types';

export const Request = () => ({ type: service.REQUEST });
export const Failure = (error) => ({ type: service.FAILURE, payload: error});

export const registerSuccess = (user) => ({ type: service.REGISTER_SUCCESS, payload: user  });

export const editSuccess = (edit) => ({ type: service.EDIT_SUCCESS, payload:edit  });

export const loginSuccess = (data) => ({ type: service.LOGIN_SUCCESS, payload: data });

export const missionSuccess = (data) => ({ type: service.MISSION_SUCCESS, payload: data });

export const projectSuccess = (data) => ({ type: service.PROJECT_SUCCESS, payload: data });

export const getmissionSuccess = (data) => ({ type: service.GET_MISSION_SUCCESS, payload: data });

export const deleteMissionSuccess = (data) => ({type: service.DELETE_MISSION_SUCCESS,payload: data});

export const updateSuccess = (data) => ({type: service.UPDATE_SUCCESS,payload: data});

export const updateProjectSuccess = (data) => ({type: service.UPDATE_PROJECT_SUCCESS,payload: data});

export const getprojectSuccess = (data) => ({ type: service.GET_PROJECT_SUCCESS, payload: data });

export const getdataSuccess = (data) => ({ type: service.GET_DATA_SUCCESS, payload: data });

export const logout = () => ({ type: service.LOGOUT });
