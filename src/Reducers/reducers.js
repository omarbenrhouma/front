import * as service from '../Types/types';

const initialState = {
  user: null,
  token: null,
  newmission: null,
  newproject: null,
  mission: null,
  project: null,
  isLoading: false,
  error: null,
  data: null
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case service.REQUEST:
      return { ...state, isLoading: true, error: null };
    case service.REGISTER_SUCCESS:
      return { ...state, isLoading: false, user: action.payload };
    case service.FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case service.LOGIN_SUCCESS:
      return { ...state, isLoading: false, user: action.payload, token: action.payload.token };
    case service.EDIT_SUCCESS:
      return { ...state, isLoading: false, user: action.payload };
    case service.MISSION_SUCCESS:
      return { ...state, isLoading: false, newmission: action.payload };
    case service.PROJECT_SUCCESS:
      return { ...state, isLoading: false, newproject: action.payload };
    case service.GET_MISSION_SUCCESS:
      return { ...state, isLoading: false, mission: action.payload, newmission: null, newproject: null };
    case service.DELETE_MISSION_SUCCESS:
      return { ...state, isLoading: false, mission: action.payload };
    case service.UPDATE_SUCCESS:
      return { ...state, isLoading: false, mission: action.payload };
    case service.GET_PROJECT_SUCCESS:
      return { ...state, isLoading: false, project: action.payload };
    case service.UPDATE_PROJECT_SUCCESS:
      return { ...state, isLoading: false, project: action.payload };
    case service.GET_DATA_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case service.LOGOUT:
      return {
        ...state, user: null,
        token: null,
        newmission: null,
        newproject: null,
        mission: null,
        project: null,
        isLoading: false,
        error: null,
        data: null
      };

    default:
      return state;
  }
};

export default authReducer;

