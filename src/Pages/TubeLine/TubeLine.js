import React,{useState,useEffect} from 'react';
import { SafeAreaView,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import routes from '../../Navigation/routes';
import useFetch from '../../hooks/useFetch';
import LinesCard from '../../Components/LinesCard';
import ServiceTypes from '../../Components/ServiceTypes/ServiceTypes';

const TubeLine = () => {
    const [all, setAll] = useState([]);
    const navigation=useNavigation();
    const { data} = useFetch(`Mode/tube/Status?detail=true&`);

    function handleNavigation(name){
        navigation.navigate(routes.DETAIL_STACK,{name})
    }
    
    const renderLines = ({item}) => (
        <LinesCard
          lines={item}
          onSelect={() => handleNavigation(item.name)}
        />
      );
  return (
      <SafeAreaView>
          <ServiceTypes/>
          <FlatList data={data} renderItem={renderLines} numColumns={2} />
      </SafeAreaView>
    );
};

export default TubeLine;
