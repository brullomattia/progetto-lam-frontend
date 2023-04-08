import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View } from 'react-native';
import Constants from "expo-constants";
import * as Application from 'expo-application';
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { base_url, headers } from '../App';
import { useNavigation } from '@react-navigation/native';

export const HomeFront = () => {
    
    const navigation = useNavigation()
  
    return (
      <SafeAreaView style={styles1.container}>
        <ImageBackground style={styles.container} source={require("../assets/bingo.png")}>
          <View>

          </View>

        </ImageBackground>

        <SafeAreaView style={styles.container}>
          <StatusBar style="light" />


            <View style={styles.form}>
              <TouchableOpacity style={styles.buttonLogin}>
                
                  <Text style={styles.buttonLoginText}>Crea una nuova partita!</Text>
                
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonLogin}>
                
                  <Text style={styles.buttonLoginText}>Unisciti ad una partita!</Text>
                
              </TouchableOpacity>
            </View>
            
          
        </SafeAreaView>
      </SafeAreaView>
      
    
  );

  
}

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
      marginBottom: 100,
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
      height: 60,
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