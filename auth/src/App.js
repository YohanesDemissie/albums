import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common' //takes in just the header component from "index" exports becuase index is always the expected file path by default if not determined otherwise
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAobKfqozVTIRSQ6gW2-6XGPUR3JWPx8mo',
        authDomain: 'authentication-7cf8d.firebaseapp.com',
        databaseURL: 'https://authentication-7cf8d.firebaseio.com',
        projectId: 'authentication-7cf8d',
        storageBucket: 'authentication-7cf8d.appspot.com',
        messagingSenderId: '109799496247'
    })
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App