import { StatusBar } from "expo-status-bar";
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { DataTable } from "react-native-paper";
import { getUsers } from "../api/useFetch";

export const LeaderboardPage = () => {
    const [users, setUsers]: any = useState([]);

    useEffect(() => {

        listUsers();
    }, [])




    const listUsers = async () => {
        await getUsers()
            .then((res) => {
                setUsers((res.data.data).sort(function (a: any, b: any) {
                    return (b.points) - (a.points);
                }))

            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navigation = useNavigation();

    const onHomePressed = () => {
        navigation.navigate("HomePage" as never);
    };


    return (


        <SafeAreaView style={styles1.container}>
            <ImageBackground
                style={styles1.image}
                source={require("../assets/bingo.png")}
            >
                <View></View>
            </ImageBackground>

            <ScrollView style={styles.container}>
                <StatusBar style="auto" />

                <View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.hiText}>Classifica BINGO-APP</Text>
                    </View>

                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title >
                                <Text>Nickname</Text>
                            </DataTable.Title>
                            <DataTable.Title >Points</DataTable.Title>
                            <DataTable.Title  >Iscritto dal</DataTable.Title>
                            <DataTable.Title >-</DataTable.Title>
                        </DataTable.Header>


                        {

                            users.map((curUser: any, i: number) => {
                                const { createdAt, nickname, points } = curUser;

                                return (
                                    <DataTable.Row key={`match-${i}`}>
                                        <DataTable.Cell>{nickname}</DataTable.Cell>
                                        <DataTable.Cell>{points}</DataTable.Cell>
                                        <DataTable.Cell>{createdAt}</DataTable.Cell>
                                        <DataTable.Cell>{ }</DataTable.Cell>
                                    </DataTable.Row>
                                )
                            })
                        }

                    </DataTable>
                    <TouchableOpacity
                        onPress={onHomePressed}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Torna alla Home Page!</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

const styles1 = StyleSheet.create({
    image: {
        flex: 1 / 3,
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
        height: 40,
        borderRadius: 25,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 15,
    },
    buttonText: {
        ...TEXT,
    },
    textWrapper: {
        marginTop: 30,
        marginBottom: 30,
    },
    hiText: {
        ...TEXT,
        fontSize: 30,
        lineHeight: 50,
        fontWeight: "bold",
    },
    buttonPlay: {
        height: 40,
        borderRadius: 25,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 15,
    },
    buttonPlayText: {
        color: "black",
        textAlign: "center",
    }
});
