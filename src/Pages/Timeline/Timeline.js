import React,{useState,useEffect} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import QRCode from 'react-native-qrcode-svg';

import useFetch from '../../hooks/useFetch';
import TimelineButton from '../../Components/TimelineButton';
import routes from '../../Navigation/routes';
import styles from './Timeline.styles';

const Timeline = () => {
  const navigation = useNavigation();
  const {data} = useFetch(`Bakerloo/Timetable/9400ZZLUBST/to/9400ZZLUBST?`);

  useEffect(() => {
    if(data!==null){
setTimeline(data)
    }
  }, [data]);
 

  const handleNavigation=id=>{
    navigation.navigate(routes.QRRESPONSE,{id})
}
  return (
    
    <SafeAreaView>
     {/* { data?.timetable.routes[0].schedules[0].knownJourneys[0].map((item, index) => {
   return <View  key={index}><Text>{item.hour}</Text></View>
})} */}
        {/* <Text>{data.timetable.routes[0].schedules[0].knownJourneys[0].hour}:{data.timetable.routes[0].schedules[0].knownJourneys[0].minute}</Text> */}
         
      <View style={styles.qr_container}>
        <QRCode
          value={''}
          size={150} 
          color={'black'}
          enableGradient={true} 
          linearGradient={['red', 'pink', 'white']} 
        />
      </View>
    </SafeAreaView>
  );
};

export default Timeline;
