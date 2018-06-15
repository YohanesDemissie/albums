import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import TutorSubjects from './components/TutorSubjects';
import TutorCreate from './components/TutorCreate'
import TutorList from './components/TutorList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" initial />
        </Scene>

        <Scene key="tutorSubjects">
          <Scene key="subjects"
          component={TutorSubjects}
          title="Tutor Subject"
          rightTitle="tutors"
          onRight={() => Actions.tutorList()}
          leftTitle="Tutor Create"
          onLeft={() => Actions.tutorCreate()}
        />
        
        <Scene
          key="tutorCreate"
          component={TutorCreate}
          title="Create Tutor Account"
        />

        <Scene
          key="tutorList"
          component={TutorList}
          title="Tutor List"
        />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;