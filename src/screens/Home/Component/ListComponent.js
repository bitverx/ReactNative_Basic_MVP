import React from 'react';
import { Text, View } from 'react-native';
import styles from '../Style/Style';

const ListItem = ({ item }) => (
  <View style={styles.mainCardView}>
    <Text>{item.title}</Text>
  </View>
);

export default ListItem;
