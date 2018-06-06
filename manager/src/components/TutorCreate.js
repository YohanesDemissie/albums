import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tutorUpdate, tutorCreate } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class TutorCreate extends Component {

  onButtonPress() {
    const { name, number, subject } = this.props

    this.props.tutorCreate({ name, number, subject });
  }
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="John Snow"
            value={this.props.name}
            onChangeText={value => this.props.tutorUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Number"
            placeholder="555-555-5555"
            value={this.props.number}
            onChangeText={value => this.props.tutorUpdate({ prop: 'number', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Subject"
            placeholder="Algebra 201"
            value={this.props.subject}
            onChangeText={value => this.props.tutorUpdate({ prop: 'subject', value })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>

      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, number, subject } = state.tutorForm;

  return { name, number, subject };
};

export default connect(mapStateToProps, { tutorUpdate, tutorCreate })(TutorCreate);