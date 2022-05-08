import React from 'react';
import { ImageBackground,Text,View,TouchableOpacity } from 'react-native';
import styles from './LinesCard.styles';
import colors from '../../styles/colors';

const LinesCard = ({onSelect,lines}) => {
  const {name,lineStatuses} = lines;
const image='https://techforum.tfl.gov.uk/uploads/db1271/original/1X/5c9d9f2e6f3bc2ec0ffdfbf91d7eba0ddd0a99ee.jpg'
  return (
      <TouchableOpacity onPress={onSelect}>
      <ImageBackground source={{uri: image}} style={styles.image}>
        <View style={styles.image_color_container} />
      
        <View style={styles.linear} colors={colors.linear_colors}>
        <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{lineStatuses[0].statusSeverityDescription}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>

    );
};

export default LinesCard;
