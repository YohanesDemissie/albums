import {
  TUTOR_UPDATE,
  TUTOR_CREATE,
  TUTOR_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  number: '',
  subject: '',
  major: '',
  school: '',
  classStanding: '',
  bio: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TUTOR_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case TUTOR_CREATE:
      return INITIAL_STATE;
    case TUTOR_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
