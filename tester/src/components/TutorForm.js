import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { tutorUpdate } from '../actions'
import { CardSection, Input } from './common'

class TutorForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
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
          <Input
            label="Major"
            placeholder="Business Administration"
            value={this.props.major}
            onChangeText={value => this.props.tutorUpdate({ prop: 'major', value})}
          />
        </CardSection>

        <CardSection>
          <Input
            label="School"
            placeholder="University of Washington"
            value={this.props.school}
            onChangeText={value => this.props.tutorUpdate({ prop: 'school', value})}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Class Standing"
            placeholder="Sophmore"
            value={this.props.classStanding}
            onChangeText={value => this.props.tutorUpdate({ prop: 'classStanding', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Bio"
            placeholder="Additional Information for viewers"
            value={this.props.bio}
            onChangeText={value => this.props.tutorUpdate({ prop: 'bio', value })}
          />
        </CardSection>

      </View>
    )
  }
}

const mapStateToProps = ( state ) => {
  const { name, number, subject, major, school, classStanding, bio } = state.tutorForm

  return { name, number, subject, major, school, classStanding, bio }
}
export default connect(mapStateToProps, { tutorUpdate })(TutorForm)