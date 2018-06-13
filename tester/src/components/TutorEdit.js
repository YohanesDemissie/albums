import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import TutorForm from './TutorForm'
import { tutorUpdate } from '../actions'
import { Card, CardSection, Button } from './common'

class TutorEdit extends Component {
  componentWillMount() {
    _.each(this.props.tutor, (value, prop) => {
      this.props.tutorUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, number, subject } = this.props;
    console.log(name, number, subject);
  }
  render() {
    return(
      <Card>
        <TutorForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
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

export default connect(mapStateToProps, { tutorUpdate })(TutorEdit);