import { StatusBar } from "expo-status-bar";
import { RadioButton } from "react-native-paper";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import * as Application from "expo-application";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { auth2, joinMatch, postMatch, postUser, startGame } from "../api/useFetch";
import { ScrollView } from "react-native-gesture-handler";

export const MatchPage = (props: any) => {
  const userId = props.route.params.userId;
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState("first");




  const onPlayPressed = async () => {

    const { data: match } = await postMatch(Number(checked));

    const { data: cards } = await joinMatch(userId, Number(match.id));

    await startGame(Number(match.id));


    navigation.navigate("LobbyPage" as never, { userId, match, cards } as never);

  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("../assets/bingo.png")}
      >
        <View></View>
      </ImageBackground>

      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.content}>
          <View style={styles.textWrapper}>
            <Text style={styles.hiText}>Creazione partita: </Text>
            <Text style={styles.userText}>
              Inserisci il numero di cartelle predefinite:
            </Text>
          </View>

          <View>
            <View style={styles.button}>
              <RadioButton
                value="1"
                status={checked === "1" ? "checked" : "unchecked"}
                onPress={() => setChecked("1")}
                color="black"
              />
              <Text>1</Text>
            </View>

            <View style={styles.button}>
              <RadioButton
                value="2"
                status={checked === "2" ? "checked" : "unchecked"}
                onPress={() => setChecked("2")}
                color="black"
              />
              <Text>2</Text>
            </View>

            <View style={styles.button}>
              <RadioButton
                value="3"
                status={checked === "3" ? "checked" : "unchecked"}
                onPress={() => setChecked("3")}
                color="black"
              />
              <Text>3</Text>
            </View>

            <TouchableOpacity
              style={styles.buttonLobby}
              onPress={onPlayPressed}
            >
              <Text style={styles.buttonLobbyText}>Vai alla lobby!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const TEXT: TextStyle = {
  color: "black",
  textAlign: "center",
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "orange"
  },
  content: {
    paddingHorizontal: 50,
  },
  textWrapper: {
    marginTop: 30,
    marginBottom: 30,
  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 30,
  },
  buttonLobby: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonLobbyText: {
    ...TEXT,
  },
});
