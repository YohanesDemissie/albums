import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  TUTOR_UPDATE,
  TUTOR_CREATE,
  TUTORS_FETCH_SUCCESS,
  TUTOR_SAVE_SUCCESS
} from './types';

export const tutorUpdate = ({ prop, value }) => {
  return {
    type: TUTOR_UPDATE,
    payload: { prop, value }
  };
};

export const tutorCreate = ({ name, number, subject, major, school, classStanding, bio }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tutors`)
      .push({ name, number, subject, major, school, classStanding, bio })
      .then(() => {
        dispatch({ type: TUTOR_CREATE });
        Actions.tutorList({ type: 'reset' });
      });
  };
};

export const tutorsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tutors`)
      .on('value', snapshot => {
        dispatch({ type: TUTORS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const tutorSave = ({ name, number, subject, major, school, classStanding, bio, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tutors/${uid}`)
      .set({ name, number, subject, major, school, classStanding, bio })
      .then(() => {
        dispatch({ type: TUTOR_SAVE_SUCCESS })
        Actions.tutorList({ type: 'reset'});
      });
    };
};

export const tutorDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/tutors/${uid}`)
      .remove()
      .then(() => {
        Actions.tutorList({ type: 'reset' })
      })
  }
}
