import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import TutorForm from './TutorForm'
import { tutorUpdate, tutorSave, tutorDelete } from '../actions'
import { Card, CardSection, Button, Confirm } from './common'

class TutorEdit extends Component {
  state= { showModal: false };

  componentWillMount() {
    _.each(this.props.tutor, (value, prop) => {
      this.props.tutorUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, number, subject, major, school, classStanding, bio } = this.props;

    this.props.tutorSave({ name, number, subject, major, school, classStanding, bio, uid: this.props.tutor.uid });

  }

  onTextPress() {
    const { number, subject } = this.props;

    Communications.text(number, `You've been requested for a tutoring session on ${subject}`);
  }

  onAccept() {
    const { uid } = this.props.tutor

    this.props.tutorDelete({ uid })

  }

  onDecline() {
    this.setState({ showModal: false })
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

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Contact
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })} >
            Delete
          </Button>
        </CardSection>
        <Confirm
        visible={this.state.showModal}
        onAccept={this.onAccept.bind(this)}
        onDecline={this.onDecline.bind(this)}
        >
          Pleaser verify the pending request for this tutor
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, number, subject, major, school, classStanding, bio } = state.tutorForm;

  return { name, number, subject, major, school, classStanding, bio };
};

export default connect(mapStateToProps, { tutorUpdate, tutorSave, tutorDelete })(TutorEdit);