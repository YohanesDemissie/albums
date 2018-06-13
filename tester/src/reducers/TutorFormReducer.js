import {
  TUTOR_UPDATE,
  TUTOR_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TUTOR_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case TUTOR_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
