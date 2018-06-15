import React, { Component } from 'react'
import { Text } from 'react-native'
import { CardSection } from './common'


class TutorListItem extends Component {
  render () {
    const { name } = this.props.tutor.item;
    return (
      <CardSection>
        <Text styles={styles.titleStyle}>
          {name}
        </Text>
      </CardSection>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default TutorListItem