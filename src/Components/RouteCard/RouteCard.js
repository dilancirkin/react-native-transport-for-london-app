import React from 'react';
import { ImageBackground,Text,View,TouchableOpacity } from 'react-native';
import styles from './RouteCard.styles'

const RouteCard = ({routeDirection}) => {
  const {stationName,direction} = routeDirection;
  return (
      
    <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.container}>
              <Text style={styles.station}>{stationName}</Text>
            </View>
            <Text style={styles.direction}>{direction}</Text>
          </View>
          <View style={styles.footer}></View>
        </View>

    );
};

export default RouteCard;
