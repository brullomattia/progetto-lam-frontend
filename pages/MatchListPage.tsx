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
import { getMatch, getMatches, joinMatch } from "../api/useFetch";

export const MatchListPage = (props: any) => {
    const userId = props.route.params.userId;
    const [matches, setMatches]: any = useState([]);
    const [number, setNumber] = useState("");
    //console.log(matches[0].id)

    useEffect(() => {
        //setUserId(props.route.params.userId);
        listMatches();
    }, [])




    const listMatches = async () => {
        await getMatches()
            .then((res) => {
                setMatches(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navigation = useNavigation();

    const onPlayPressed = async (match_id: number) => {

        const { data: match } = await getMatch(match_id);

        const matchdata = await match.data;

        const { data: cards } = await joinMatch(userId, Number(match.data.id));



        navigation.navigate("LobbyPage" as never, { userId, match: matchdata, cards } as never);
    };

    const onCreateMatchPressed = () => {
        navigation.navigate("MatchPage" as never, { userId } as never);
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
                        <Text style={styles.hiText}>Lista partite in attesa:</Text>
                    </View>

                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title >
                                <Text>Id</Text>
                            </DataTable.Title>
                            <DataTable.Title  >Players</DataTable.Title>
                            <DataTable.Title >State</DataTable.Title>
                            <DataTable.Title >-</DataTable.Title>
                        </DataTable.Header>


                        {
                            matches.map((curMatch: any, i: number) => {
                                const { id, players, state } = curMatch;

                                return (
                                    <DataTable.Row key={`match-${i}`}>
                                        <DataTable.Cell>{id}</DataTable.Cell>
                                        <DataTable.Cell>{players}</DataTable.Cell>
                                        <DataTable.Cell>{state}</DataTable.Cell>
                                        <DataTable.Cell><TouchableOpacity
                                            onPress={async () => onPlayPressed(id)}
                                            style={styles.buttonPlay}
                                        >
                                            <Text style={styles.buttonPlayText}>  Gioca!  </Text>
                                        </TouchableOpacity></DataTable.Cell>
                                    </DataTable.Row>
                                )
                            })
                        }

                    </DataTable>

                    <TouchableOpacity
                        onPress={onCreateMatchPressed}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Crea una nuova partita!</Text>
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
        fontSize: 20,
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
