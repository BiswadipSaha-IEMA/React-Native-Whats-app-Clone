// AppRouter.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatPage from './src/Pages/ChatPage/ChatPage';

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Chat" component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
