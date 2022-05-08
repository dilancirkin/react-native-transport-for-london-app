import React,{useState} from 'react';
import { SafeAreaView,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import routes from '../../Navigation/routes';
import useFetch from '../../hooks/useFetch';
import LinesCard from '../../Components/LinesCard';
import ServiceTypes from '../../Components/ServiceTypes'


const NationalRailLine = () => {
    const navigation=useNavigation();
    const {loading, error, data} = useFetch(`Mode/national-rail/Status?detail=true&`);



    function handleNavigation(id){
        navigation.navigate(routes.DETAIL_STACK,{id})
    }
    const renderLines = ({item}) => (
        <LinesCard
          lines={item}
          onSelect={() => handleNavigation(item.id)}
        />
      );
  return (
      <SafeAreaView>
          <ServiceTypes/>
          <FlatList data={data} renderItem={renderLines} numColumns={2} />
      </SafeAreaView>
    );
};

export default NationalRailLine;
