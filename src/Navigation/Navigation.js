import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import DetailStack from './DetailStack';
import LineStack from './LineStack';
import QRResponse from '../Pages/QRResponse';
import routes from './routes';
import colors from '../styles/colors';

const Stack=createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
   <Stack.Navigator screenOptions={{headerTintColor: colors.tomato}}>
      <Stack.Screen
        name={routes.LINE_STACK}
        component={LineStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.DETAIL_STACK}
        component={DetailStack}
        options={{headerShown: false}}

      />
      <Stack.Screen
        name={routes.QRRESPONSE}
        component={QRResponse}
        options={{headerShown: false}}

      />
    </Stack.Navigator>
    </NavigationContainer>
 
  );
};
export default Navigation;