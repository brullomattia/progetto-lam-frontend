import React from "react";
import { HomePage } from "./pages/HomePage";
import { NotifierWrapper } from 'react-native-notifier';
import { HomeFront } from "./pages/HomeFront";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MatchPage } from "./pages/MatchPage";
import { MatchListPage } from "./pages/MatchListPage";
import { LobbyPage } from "./pages/LobbyPage";
import { EndGamePage } from "./pages/EndGamePage";
import { Button, Pressable, TouchableOpacity, StyleSheet, Text } from "react-native";
import { LeaderboardPage } from "./pages/LeaderboardPage";



const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NotifierWrapper>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen
            name="HomePage"
            component={HomePage} />
          <Stack.Screen name="MatchPage" component={MatchPage} />
          <Stack.Screen name="MatchListPage" component={MatchListPage} />
          <Stack.Screen name="HomeFront" component={HomeFront} />
          <Stack.Screen name="LobbyPage" component={LobbyPage} />
          <Stack.Screen name="EndGamePage" component={EndGamePage} />
          <Stack.Screen name="LeaderboardPage" component={LeaderboardPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotifierWrapper>

  );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: "orange",
    marginRight: 10
  },
  text: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',

  }
})
