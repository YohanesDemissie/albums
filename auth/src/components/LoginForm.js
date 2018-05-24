import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Card, CardSection, Button, Input } from './common'

class LoginForm extends Component {
  state = { email: '',
            password: '',
            error: '',
            loading: false
          };

  onButtonPress () {
    const { email, password } = this.state

    this.setState({ error: '', loading: true }) //hides error message on correct email/password input

    firebase.auth().signInWithEmailAndPassword(email, password) //NOT ARBITRARY except params
      .then(this.onLoginSuccess.bind(this)) //arbitrary naming convention
      .catch(() => { //creating a promise to create account if incorrect login input
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this)) //binding state
          .catch(this.onLoginFail.bind(this)); //binding state
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false})
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  renderButton() {
    if(this.state.loading) {
      return <Spinner size='small' />
    }
    return (
      <Button buttonText="Log In Fucker" onPress={this.onButtonPress.bind(this)} />
    )
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value = {this.state.email}
            onChangeText = { email => this.setState ({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="password"
            value = { this.state.password }
            onChangeText = { password => this.setState ({ password })}
          />

        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm