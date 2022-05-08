import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TimelineButton.styles'
import Button from '../Button/Button';

const TimelineButton  = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list_tab}>
        <Button  theme="default" title="Monday-Friday"/>
        <Button theme="default" title="Weekend"/>
      </View>
    </View>
  );
};
export default TimelineButton;