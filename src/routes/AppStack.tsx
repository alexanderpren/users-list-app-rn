import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Counter } from '../features/counter/Counter';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
        animationEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen name="List" component={Counter} />
    </Stack.Navigator>
  );
};
