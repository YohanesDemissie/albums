import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers/index'
import LoginForm from './components/LoginForm'
import RouterComponent from './Router'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp ({
      apiKey: 'AIzaSyCnTDdfHIh87PJnTFS8dlaNed5aDoxCzIs',
      authDomain: 'manager-59898.firebaseapp.com',
      databaseURL: 'https://manager-59898.firebaseio.com',
      projectId: 'manager-59898',
      storageBucket: 'manager-59898.appspot.com',
      messagingSenderId: '553650342307'
    });
    // firebase.initializeApp(config);
  }
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); //empty object is for pre-populating initial state(s)
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    )
  }
}

export default App