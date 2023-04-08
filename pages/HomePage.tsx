import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import * as Application from "expo-application";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { base_url, headers } from "../App";
import { useNavigation } from "@react-navigation/native";
import { auth2, postUser } from "../api/useFetch";

export const HomePage = () => {
  //mobile id for android
  const id_mobile: any = Application.androidId;
  //console.log(id_mobile);
  const [data, setData]: any = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [nickname, setNickname] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    auth();
    //onSignInPressed();
  }, []);

  const auth = async () => {
    await auth2(id_mobile)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createUser = async () => {
    await postUser(id_mobile, nickname)
      .then((res) => {
        console.log(res.status);
        navigation.navigate("HomeFront");
      })
      .catch((error) => {
        console.warn("enter another nickname : 4 or more characters");
        console.log(error);
      });
  };

  const onSignInPressed = () => {
    createUser();
  };

  if (data != null) {
    return (
      <SafeAreaView style={styles1.container}>
        <ImageBackground
          style={styles.container}
          source={require("../assets/bingo.png")}
        >
          <View></View>
        </ImageBackground>

        <SafeAreaView style={styles.container}>
          <StatusBar style="light" />

          <View style={styles.content}>
            <View style={styles.textWrapper}>
              <Text style={styles.hiText}>Bentornato in BINGO-APP</Text>
              <Text style={styles.hiText}> {data.nickname}!</Text>
            </View>

            <View style={styles.form}>
              <TouchableOpacity
                onPress={() => navigation.navigate("HomeFront")}
                style={styles.buttonLogin}
              >
                <Text style={styles.buttonLoginText}>Inizia a giocare!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaView>
    );
  } else
    return (
      <SafeAreaView style={styles1.container}>
        <ImageBackground
          style={styles.container}
          source={require("../assets/bingo.png")}
        >
          <View></View>
        </ImageBackground>

        <SafeAreaView style={styles.container}>
          <StatusBar style="light" />

          <View style={styles.content}>
            <View style={styles.textWrapper}>
              <Text style={styles.hiText}>Benvenuto in BINGO-APP! </Text>
              <Text style={styles.userText}>
                Scegli il tuo nickname ed inizia a giocare!
              </Text>
            </View>

            <View style={styles.form}>
              <TextInput
                style={styles.inputPassword}
                value={nickname}
                onChangeText={setNickname}
                placeholder="Inserisci il tuo nickname"
                placeholderTextColor="#929292"
              />

              <TouchableOpacity
                style={styles.buttonLogin}
                onPress={onSignInPressed}
              >
                <Text style={styles.buttonLoginText}>Inizia a giocare!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaView>
    );
};

const styles1 = StyleSheet.create({
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
  form: {
    marginBottom: 30,
  },
  iconLock: {
    color: "orange",
    position: "absolute",
    fontSize: 16,
    top: 22,
    left: 22,
    zIndex: 10,
  },
  inputPassword: {
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonLoginText: {
    ...TEXT,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});