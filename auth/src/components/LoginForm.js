import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { Card, CardSection, Button } from './common'

class LoginForm extends Component {
  state = { text: '' };
  render() {
    return(
      <Card>
        <CardSection>
          <TextInput 
            value = {this.state.text}
            onChangeText = { text => this.setState ({ text })} 
            style={{ height: 20, width: 100}} />
        </CardSection>
        <CardSection>
          <Button buttonText="Log In Fucker" />
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm