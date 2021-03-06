import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tutorUpdate, tutorCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import TutorForm from './TutorForm'

class TutorCreate extends Component {
  onButtonPress() {
    const { name, number, subject } = this.props;

    this.props.tutorCreate({ name, number, subject: subject || 'Monday' });
  }

  render() {
    console.log(this.props.tutor);

    return (
      <Card>
        <TutorForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, number, subject } = state.tutorForm;

  return { name, number, subject };
};

export default connect(mapStateToProps, {
  tutorUpdate, tutorCreate
})(TutorCreate);
