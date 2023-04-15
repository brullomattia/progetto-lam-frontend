import React from "react";
import { HomePage } from "./pages/HomePage";
import { HomeFront } from "./pages/HomeFront";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MatchPage } from "./pages/MatchPage";
import { MatchListPage } from "./pages/MatchListPage";
import { LobbyPage } from "./pages/LobbyPage";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomeFront" component={HomeFront} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MatchPage" component={MatchPage} />
        <Stack.Screen name="MatchListPage" component={MatchListPage} />
        <Stack.Screen name="LobbyPage" component={LobbyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
