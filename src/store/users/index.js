import { UserTypes } from './types';

const INITIAL_STATE = {
  data: [],
  initialvalues: {
    id: 0,
    username: '',
  },
  loading: false,
  error: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case UserTypes.LOAD_SUCCESS:
      return { ...state, loading: false};
    case UserTypes.LOAD_FAIL:
      return { ...state, loading: false, error: true, errorMessage: action.payload};
    default:
      return state;
  }
};

export default reducer;
