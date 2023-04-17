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

export const EndGamePage = (props: any) => {
    const userId = props.route.params.userId;
    //const userId = 1;
    useEffect(() => {
    }, []);

    const navigation = useNavigation();
    const onLeaderboardPressed = () => {
        navigation.navigate("LeaderboardPage" as never, { userId } as never);
    };
    const onHomePagePressed = () => {
        navigation.navigate("HomePage" as never, { userId } as never);
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
                <StatusBar style="auto" />

                <View>
                    <Text style={styles.hiText}>La partita è terminata!!!  </Text>
                    <TouchableOpacity
                        onPress={onLeaderboardPressed}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Visualizza Classifica!</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={onHomePagePressed}>
                        <Text style={styles.buttonText}>Vai alla Home Page!</Text>
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
    button: {
        height: 60,
        borderRadius: 25,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 15,
    },
    buttonText: {
        ...TEXT,
    },
    hiText: {
        ...TEXT,
        fontSize: 25,
        lineHeight: 50,
        fontWeight: "bold",
        marginTop: 20
    },
});
