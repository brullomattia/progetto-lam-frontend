import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Card } from "../components/Card";
import { getNumber, ready } from "../api/useFetch";

export const LobbyPage = (props: any) => {
    const userId = props.route.params.userId;
    const match: any = props.route.params.match;
    const cards: any = props.route.params.cards.cards;
    const first: any = props.route.params.match.numbers[0];
    const [isDisabled, setIsDisabled] = useState(false);
    const [curNumber, setCurNumber] = useState(0);
    const [extracted, setExtracted] = useState(new Set());
    useEffect(() => {
        const interval = setInterval(async () => {
            const { data } = await getNumber(match.id);

            if (data.number != first) {
                setCurNumber(data.number);
                setExtracted(new Set(match.numbers.slice(0, data.actual_move + 1)))
            }

        }, 1000);
        return () => clearInterval(interval);
    }, [])



    const navigation = useNavigation();
    const onCinquinaPressed = () => {

    };

    const onBingoPressed = () => {

    };

    const onReadyPressed = async () => {

        await ready(match?.id);
        console.warn("La partita inizierà a breve!")
        setIsDisabled(true);
        styles.buttonReady.opacity = 0;

    };


    return (



        <View style={styles.container}>
            <TouchableOpacity
                onPress={onReadyPressed}
                style={styles.buttonReady}
                disabled={isDisabled}


            >
                <Text style={styles.buttonReadyText}>Pronto!</Text>
            </TouchableOpacity>
            <View style={styles.textWrapper}>
                <Text style={styles.hiText}>Numero corrente: {curNumber} </Text>
                <Text style={styles.userText}>
                    Numeri estratti fino ad ora:

                </Text>
            </View>

            <ScrollView>
                {cards?.map((card: any, i: number) =>
                    <Card
                        key={i + 1}
                        onBingoPressed={onBingoPressed}
                        onCinquinaPressed={onCinquinaPressed}
                        card={card}
                        cardNumber={i + 1}
                        extracted={extracted} />
                )}

            </ScrollView>

        </View>



    );
};

const styles1 = StyleSheet.create({
    image: {
        flex: 1 / 5,
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
        height: 30,
        borderRadius: 25,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 5,
    },
    buttonReady: {
        height: 50,
        borderRadius: 25,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 5,
        opacity: 1
    },
    buttonLoginText: {
        ...TEXT,
    },
    buttonReadyText: {
        color: "black",
        textAlign: "center",
        fontSize: 20,
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
    userText: {
        ...TEXT,
        fontSize: 16,
        lineHeight: 30,
    },
});
