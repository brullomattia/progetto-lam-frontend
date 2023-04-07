import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View } from 'react-native';
import Constants from "expo-constants";
import * as Application from 'expo-application';

export default function App() {
  
  return (
      
      <SafeAreaView style={styles1.container}>
        <ImageBackground style={styles.container} source={require("./assets/bingo.png")}>
          <View>

          </View>

        </ImageBackground>

        <SafeAreaView style={styles.container}>
          <StatusBar style="light" />

          <View style={styles.content}>
            <View style={styles.textWrapper}>
              <Text style={styles.hiText}>Benvenuto in BINGO-APP! </Text>
              <Text style={styles.userText}>Inserisci il tuo nickname!</Text>
            </View>

            <View style={styles.form}>
              <TextInput
                style={styles.inputPassword}
                autoFocus={true}
                placeholder="Inserisci il tuo nickname"
                placeholderTextColor="#929292"
              />

              
              <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.buttonLoginText}>Inizia a giocare!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaView>
      
    
  );
}
//mobile id for android
const mobile_id = Application.androidId;





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
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  textWrapper: {
    marginTop: 60,
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
