import React,{useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation,useRoute } from '@react-navigation/native';

import routes from '../routes';
import colors from '../../styles/colors';
import RouteDirection from '../../Pages/RouteDirection';
import QRScanner from '../../Pages/QRScanner';
import Timeline from '../../Pages/Timeline'

const Tab = createBottomTabNavigator();

const DetailStack = () => {
  const route = useRoute()
  const {name} = route.params
  const [lineName,setName]=useState(name)

  return (
  <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: colors.granite_Gray,
          tabBarActiveTintColor: colors.tomato,
          headerTintColor: colors.tomato,
        }}>
        <Tab.Screen
          name={routes.ROUTE_DIRECTION}
          component={RouteDirection}
          initialParams={lineName}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="sign-direction" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="clock-outline" color={color} size={20} />
            ),
          }}
          name={routes.TIMELINE}
          component={Timeline}
        />
         <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="qrcode" color={color} size={20} />
            ),
          }}
          name={routes.QRSCANNER}
          component={QRScanner}
        />
           
           
      </Tab.Navigator>
       );
};
export default DetailStack;