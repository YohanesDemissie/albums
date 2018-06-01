import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types' //look for type here in errors. console.log to make sure it isn't 'undefined'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
}; //setting initial state to blank email/password input

export default (state = INITIAL_STATE, action) => {
  console.log(action, 'is you working')

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return {...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload }
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false }

    default:
      return state;
  }
}