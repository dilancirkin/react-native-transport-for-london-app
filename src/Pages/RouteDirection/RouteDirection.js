import React,{useEffect} from 'react';
import { SafeAreaView,FlatList} from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';

import routes from '../../Navigation/routes';
import RouteCard from '../../Components/RouteCard';
import useFetch from '../../hooks/useFetch';

const RouteDirection = (props) => {
  const navigation=useNavigation();
  const{lineName}=props;
  const {data} = useFetch(`victoria/Arrivals?`);
  console.log(lineName)

  // useEffect(() => {
  // console.log(route)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

 const renderRoute = ({item}) => (
  <RouteCard routeDirection={item}/>
);

  return (
    <SafeAreaView>
    <FlatList data={data} renderItem={renderRoute} numColumns={1}/>
    </SafeAreaView>
    );
};

export default RouteDirection;
