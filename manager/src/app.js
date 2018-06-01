import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCnTDdfHIh87PJnTFS8dlaNed5aDoxCzIs',
      authDomain: 'manager-59898.firebaseapp.com',
      databaseURL: 'https://manager-59898.firebaseio.com',
      projectId: 'manager-59898',
      storageBucket: 'manager-59898.appspot.com',
      messagingSenderId: '553650342307'
    };
     firebase.initializeApp(config);
  }
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); //empty object is for pre-populating initial state(s)
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App