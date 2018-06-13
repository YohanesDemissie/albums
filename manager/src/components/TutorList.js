import _ from 'lodash'; //helps convert object into an array
import React, { Component } from 'react'
import { connect } from 'react-redux'
import  {FlatList}  from 'react-native'
import { tutorsFetch } from '../actions/TutorActions'
import { TutorListItem } from './TutorListItem'


class TutorList extends Component {
  componentWillMount() {
    this.createDataSource();
  }
  createDataSource() {
    this.props.tutorsFetch();
  }
  renderRow(tutor) {
    return <TutorListItem tutor={tutor} />;
  }

  render() {
    console.log(tutor, 'what is tutor')
    return (
      <FlatList
        data={this.props.tutors}
        renderItem={this.renderRow}
        keyExtractor={tutor => tutor.uid}
      />
    );
  }
}

const mapStateToProps = state => {
  const tutors = _.map(state.tutors, (val, uid) => {
    return { ...val, uid }; // {subject, name, number, id }
  });
  return  { tutors };
}

export default connect(mapStateToProps, { tutorsFetch })(TutorList);