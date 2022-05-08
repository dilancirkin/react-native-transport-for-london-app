import React,{useEffect} from 'react';
import { SafeAreaView,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import routes from '../../Navigation/routes';
import useFetch from '../../hooks/useFetch';
import LinesCard from '../../Components/LinesCard';
import ServiceTypes from '../../Components/ServiceTypes'


const BusLine = () => {
    const navigation=useNavigation();
    const {data} = useFetch(`Mode/bus/Status?detail=true&`);
    useEffect(() => {
      
    }, [data]);
  
    const handleNavigation=id=>{
        navigation.navigate(routes.DETAIL_STACK,{id})
        console.log(id)
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
          <FlatList data={data} renderItem={renderLines} numColumns={2} keyExtractor={item => item.id} />
      </SafeAreaView>
    );
};

export default BusLine;
