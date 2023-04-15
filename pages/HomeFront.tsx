import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { DataTable } from "react-native-paper";

export const HomeFront = (props: any) => {
  const userId = props.route.params.userId;
  useEffect(() => {
    //onSignInPressed();
  }, []);

  const navigation = useNavigation();
  const onNewGamePressed = () => {
    navigation.navigate("MatchPage" as never, { userId } as never);
  };
  const onGamePressed = () => {
    navigation.navigate("MatchListPage" as never, { userId } as never
    );
  };
  return (
    <SafeAreaView style={styles1.container}>
      <ImageBackground
        style={styles1.image}
        source={require("../assets/bingo.png")}
      >
        <View></View>
      </ImageBackground>

      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View>
          <TouchableOpacity
            onPress={onNewGamePressed}
            style={styles.buttonLogin}
          >
            <Text style={styles.buttonLoginText}>Crea una nuova partita!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonLogin} onPress={onGamePressed}>
            <Text style={styles.buttonLoginText}>Unisciti ad una partita!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles1 = StyleSheet.create({
  image: {
    flex: 1
  },
  container: {
    flex: 1,
  },
});

const TEXT: TextStyle = {
  color: "black",
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    //paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  form: {
    marginBottom: 100,
  },
  buttonLogin: {
    height: 60,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonLoginText: {
    ...TEXT,
  },
});
