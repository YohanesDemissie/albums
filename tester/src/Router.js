import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TutorList from './components/TutorList';
import TutorCreate from './components/TutorCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.tutorCreate()}
          rightTitle="Add"
          key="tutorList"
          component={TutorList}
          title="Tutors"
          initial
        />
        <Scene key="tutorCreate" component={TutorCreate} title="Create Tutor" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
