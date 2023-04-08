import React from 'react';
import { HomePage } from './pages/HomePage';
import { HomeFront } from './pages/HomeFront';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export const base_url = "http://10.0.2.2:8080/api"
export const headers = {
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName='HomePage'>
        <Stack.Screen name="HomeFront" component={HomeFront} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}










