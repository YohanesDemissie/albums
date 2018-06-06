import {
TUTORS_FETCH_SUCCESS
} from '../actions/types'
import TutorCreate from '../components/TutorCreate';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TUTORS_FETCH_SUCCESS:
    console.log(action, 'tutor action');
      return state;

    default:
      return state;
  }
};