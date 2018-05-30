import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED 
} from '../actions/types' //look for type here in errors. console.log to make sure it isn't 'undefined'

const INITIAL_STATE = {
  email: '',
  password: ''
}; //setting initial state to blank email/password input

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }; //...state is the default state declared above as initial_state, new state is the email user input payload
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload}
    default:
      return state;
  }
}