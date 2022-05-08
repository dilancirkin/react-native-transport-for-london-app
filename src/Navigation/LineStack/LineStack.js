import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import routes from '../routes';
import colors from '../../styles/colors';
import BusLine from '../../Pages/BusLine';
import TubeLine from '../../Pages/TubeLine';
import RiverLine from '../../Pages/RiverLine';
import NationalRailLine from '../../Pages/NationalRailLine';

const Tab = createBottomTabNavigator();

const LineStack = () => {

  return (
  <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: colors.granite_Gray,
          tabBarActiveTintColor: colors.tomato,
          headerTintColor: colors.tomato,
        }}>
        <Tab.Screen
         options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="subway" color={color} size={20} />
          ),
        }}
          name={routes.TUBE_LINE}
          component={TubeLine}
       
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="bus" color={color} size={20} />
            ),
          }}
          name={routes.BUS_LINE}
          component={BusLine}
        />
         <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="fence" color={color} size={20} />
            ),
          }}
          name={routes.NATIONAL_RAIL}
          component={NationalRailLine}
        />
             <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="waves" color={color} size={20} />
            ),
          }}
          name={routes.RIVER_LINE}
          component={RiverLine}
        />
     
      </Tab.Navigator>
       );
};
export default LineStack;