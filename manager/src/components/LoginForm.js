import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions/index'
import { Card, CardSection, Input, Button } from './common/'

class LoginForm extends Component {
onEmailChange(text) {
  this.props.emailChanged(text)
}

onPasswordChange(text) {
  this.props.passwordChanged(text)
}

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password })
  }
  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label='email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button buttonText='Login' onPress={this.onButtonPress.bind(this)}/>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm) //null would be map state to props if we didnt have that functionality declared above