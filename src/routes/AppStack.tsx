import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, UserListScreen, DetailsScreen } from '../screens/';
import { HomeNavigatorProps } from '../types/navigators';
import headerStyle from '../styles/header';
import screenBaseStyle from '../styles/screen-base';
import { HeaderTitle } from '../components/HeaderTitle';

const Stack = createNativeStackNavigator<HomeNavigatorProps>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        contentStyle: screenBaseStyle,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="UserList"
        component={UserListScreen}
        options={{
          headerTitle: () => <HeaderTitle title="User List" />,
          headerStyle: headerStyle,
        }}
      />
      <Stack.Screen
        name="UserDetail"
        component={DetailsScreen}
        options={{
          headerTitle: () => <HeaderTitle title="User Detail" />,
          headerStyle: headerStyle,
        }}
      />
    </Stack.Navigator>
  );
};
