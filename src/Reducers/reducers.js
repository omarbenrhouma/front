import { FETCH_DATA_START, FETCH_DATA_SUCCESS, DATA_ERROR,UPDATE_DATA_SUCCESS,DELETE_DATA_SUCCESS,CREATE_SUCCESS,DATA_SUCCESS,DELETTA_SUCCES} from '../Types/types';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case UPDATE_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
        case DELETE_DATA_SUCCESS:
          return {
            ...state,
            loading: false,
            data: action.payload,
          };
          case CREATE_SUCCESS:
            return {
              ...state,
              loading: false,
              data: action.payload,
            };
            case DELETTA_SUCCES:
              return {
                ...state,
                loading: false,
                data: action.payload,
              };
              case DATA_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  data: action.payload,
                };
    default:
      return state;
  }
};

export default reducer;
