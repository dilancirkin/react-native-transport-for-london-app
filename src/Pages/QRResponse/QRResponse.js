import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import useFetch from '../../hooks/useFetch';

const QRResponse = () => {
  const navigation = useNavigation();
  const {data} = useFetch(`Bakerloo/Timetable/9400ZZLUBST/to/9400ZZLUBST?`);
  return (
    <SafeAreaView>
      
     
    </SafeAreaView>
  );
};

export default QRResponse;
