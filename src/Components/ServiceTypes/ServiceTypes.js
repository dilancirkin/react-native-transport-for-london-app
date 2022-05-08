import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ServiceTypes.styles'
import Button from '../Button/Button';

const ServiceTypes  = ({onRegular,onNight,onAll}) => {
  return (
    <View style={styles.container}>
      <View style={styles.list_tab}>
        <Button  theme="default" title="Regular" onPress={onRegular}/>
        <Button theme="default" title="Night" onPress={onNight}/>
        <Button theme="default" title="All" onPress={onAll}/>
      </View>
    </View>
  );
};
export default ServiceTypes;