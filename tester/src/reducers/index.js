import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TutorFormReducer from './TutorFormReducer';
import TutorReducer from './TutorReducer';

export default combineReducers({
  auth: AuthReducer,
  tutorForm: TutorFormReducer,
  tutors: TutorReducer
});
