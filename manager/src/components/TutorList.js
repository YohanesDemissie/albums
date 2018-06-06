import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { tutorsFetch } from '../actions'


class TutorList extends Component {
  componentWillMount() {
    this.props.tutorsFetch();
  }
  render () {
    return(
      <View>
        <Text>
          Tutor List
        </Text>
      </View>
    )
  }
}

export default connect(null, { tutorsFetch })(TutorList);