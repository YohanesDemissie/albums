import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const ListItem = (props) => {
  return (
    <Card>
      <Text>{props.item.title}</Text>
    </Card>
  );
};

export default ListItem;