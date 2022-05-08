import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Button.styles';

const Button = ({onPress,title, theme = 'default'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[theme].btn_tab}>
    
          <Text style={styles[theme].text_tab}>{title}</Text>
   
    </TouchableOpacity>
  );
};
export default Button;