import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { tutorsFetch } from '../actions';
import ListItem from './ListItem';

class TutorList extends Component {
  componentWillMount() {
    this.props.tutorsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ tutors }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(tutors);
  }

  renderRow(tutor) {
    return <ListItem tutor={tutor} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const tutors = _.map(state.tutors, (val, uid) => {
    return { ...val, uid };
  });

  return { tutors };
};

export default connect(mapStateToProps, { tutorsFetch })(TutorList);
